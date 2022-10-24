import { List } from "antd";
import SiteLayout from "../components/base/SiteLayout";
import ActiveFiltersTags from "../components/tickets/ActiveFiltersTags";
import TicketListItem from "../components/tickets/TicketListItem";
import TicketsFilters from "../components/tickets/TicketsFilters";
import getSiderCollapsedCookie from "../helpers/getSiderCollapsedCookie";
import useFilters from "../hooks/apis/useFilters";
import useInfiniteResource from "../hooks/apis/useInfiniteResource";

const Tickets = ({ siderCollapsed }) => {
  const [filters, filterSetters] = useFilters();
  const activeFilters = {};
  for (const key in filters) {
    if (key.endsWith("Real")) {
      continue;
    }

    const filterValue = filters[key];
    if (
      filterValue !== null &&
      filterValue !== undefined &&
      filterValue !== "" &&
      !(typeof filterValue === "object" && filterValue.length === 0)
    ) {
      activeFilters[key] = filterValue;
    }
  }

  const {
    data: responses,
    error,
    isValidating,
    size,
    setSize,
  } = useInfiniteResource("tickets/", activeFilters);

  const onScroll = (e) => {
    if (isValidating) return;
    if (responses.at(-1)?.data?.next === null) return;
    const el = e.currentTarget;
    if (el.scrollHeight - el.scrollTop - 1 <= el.clientHeight) {
      setSize(size + 1);
    }
  };

  const tickets = [];
  if (responses) {
    responses.map((response) => tickets.push(...response.data.results));
  }

  if (error)
    return (
      <div>
        Ошибка...
        <br />
        {error.toString()}
      </div>
    );

  const isLoading =
    !responses || isValidating ? { wrapperClassName: "ticketsLoader" } : false;

  return (
    <SiteLayout siderCollapsed={siderCollapsed}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <ActiveFiltersTags filters={filters} filterSetters={filterSetters} />
          <List
            itemLayout="vertical"
            dataSource={tickets}
            loading={isLoading}
            renderItem={(ticket) => (
              <TicketListItem ticket={ticket} filterSetters={filterSetters} />
            )}
            onScroll={onScroll}
            style={{
              width: "100%",
              overflow: "auto",
              height: "80vh",
              paddingRight: 5,
            }}
          />
        </div>

        <TicketsFilters filters={filters} filterSetters={filterSetters} />
      </div>
    </SiteLayout>
  );
};

export async function getServerSideProps(context) {
  return { props: { siderCollapsed: getSiderCollapsedCookie(context) } };
}

export default Tickets;

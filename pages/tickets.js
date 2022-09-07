import { List } from "antd";
import SiteLayout from "../components/base/SiteLayout";
import TicketListItem from "../components/tickets/TicketListItem";
import TicketsFilters from "../components/tickets/TicketsFilters";
import getSiderCollapsedCookie from "../helpers/getSiderCollapsedCookie";
import useFilters from "../hooks/apis/useFilters";
import useResource from "../hooks/apis/useResource";

const Tickets = ({ siderCollapsed }) => {
  const [filters, filterSetters] = useFilters();
  const activeFilters = {};
  for (const key in filters) {
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
  const { data: response, error } = useResource("tickets/", activeFilters);


  if (error)
    return (
      <div>
        Ошибка...
        <br />
        {error.toString()}
      </div>
    );

  return (
    <SiteLayout siderCollapsed={siderCollapsed}>
      <div style={{ display: "flex" }}>
        <List
          itemLayout="vertical"
          dataSource={response ? response.data.results : []}
          loading={!response}
          renderItem={(ticket) => <TicketListItem ticket={ticket} />}
          style={{
            width: "100%",
            overflow: "auto",
            height: "85vh",
            paddingRight: 5,
          }}
        />
        <TicketsFilters filters={filters} filterSetters={filterSetters} />
      </div>
    </SiteLayout>
  );
};

export async function getServerSideProps(context) {
  return { props: { siderCollapsed: getSiderCollapsedCookie(context) } };
}

export default Tickets;

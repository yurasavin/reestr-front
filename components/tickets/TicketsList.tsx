import { LoadingOutlined } from "@ant-design/icons";
import TicketListItem from "@components/tickets/TicketListItem";
import useTicketInfiniteListResource, {
  TicketData,
} from "@hooks/apis/resources/useTicketListResource";
import { List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import styles from "./TicketsList.module.css";

const TicketsList: React.FC = () => {
  // const [filters, filterSetters] = useFilters();
  // const activeFilters = {};
  // for (const key in filters) {
  //   if (key.endsWith("Real")) {
  //     continue;
  //   }

  //   const filterValue = filters[key];
  //   if (
  //     filterValue !== null &&
  //     filterValue !== undefined &&
  //     filterValue !== "" &&
  //     !(typeof filterValue === "object" && filterValue.length === 0)
  //   ) {
  //     activeFilters[key] = filterValue;
  //   }
  // }

  const resource = useTicketInfiniteListResource();

  if (!resource) {
    return <div>Инициализация страницы</div>;
  }

  if (resource.error) {
    return (
      <div>
        Ошибка...
        <br />
        {resource.error.toString()}
      </div>
    );
  }

  const loadMoreData = (): void => {
    if (!resource.isLoading) {
      resource.setSize(resource.size + 1);
    }
  };

  const tickets: TicketData[] = [];
  let dataLength = 0;
  if (resource.data) {
    dataLength = resource.data[0].data.count;
    resource.data.map((response) => tickets.push(...response.data.results));
  }

  if (tickets.length === 0 && resource.isLoading && resource.isValidating) {
    return (
      <>
        <div>skeleton</div>
      </>
    );
  }

  const scrollableID = "scrollableDiv";

  return (
    <div id={scrollableID} className={styles.ticketslist}>
      {/* <ActiveFiltersTags filters={filters} filterSetters={filterSetters} /> */}
      <InfiniteScroll
        dataLength={tickets.length}
        next={loadMoreData}
        hasMore={tickets.length < dataLength}
        loader={
          <div className={styles.loader}>
            Загрузка...{" "}
            <Spin
              indicator={<LoadingOutlined className={styles.spinner} spin />}
            />
          </div>
        }
        scrollableTarget={scrollableID}
      >
        <List
          itemLayout="vertical"
          dataSource={tickets}
          renderItem={(ticket) => <TicketListItem ticket={ticket} />}
        />
      </InfiniteScroll>

      {/* <TicketsFilters filters={filters} filterSetters={filterSetters} /> */}
    </div>
  );
};

export default TicketsList;

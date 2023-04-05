import { LoadingOutlined } from "@ant-design/icons";
import TicketListItem from "@components/tickets/TicketListItem";
import useTicketInfiniteListResource, {
  TicketData,
} from "@hooks/apis/resources/useTicketListResource";
import { List, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import TicketListItemSkeleton from "./TicketListItemSkeleton";
import styles from "./TicketsList.module.css";

const TicketsList: React.FC = () => {
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
        <TicketListItemSkeleton />
        <TicketListItemSkeleton />
        <TicketListItemSkeleton />
        <TicketListItemSkeleton />
      </>
    );
  }

  const scrollableID = "scrollableDiv";

  return (
    <div id={scrollableID} className={styles.ticketslist}>
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
    </div>
  );
};

export default TicketsList;

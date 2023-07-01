import { LoadingOutlined } from "@ant-design/icons";
import { PaginatedResponse } from "@services/api";
import { List, Spin } from "antd";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { SWRInfiniteResponse } from "swr/infinite";
import styles from "./ItemsList.module.css";

// TODO: Fix component props
interface ItemsListProps {
  resource: SWRInfiniteResponse<PaginatedResponse<any>> | undefined;
  SkeletonItem: React.FC;
  ListItem: React.FC<any>;
}

const ItemsList: React.FC<ItemsListProps> = ({
  resource,
  SkeletonItem,
  ListItem,
}) => {
  if (!resource) {
    return (
      <>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </>
    );
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

  // TODO: type implements
  const listData = [];
  let dataLength = 0;
  if (resource.data) {
    dataLength = resource.data[0].data.count;
    resource.data.map((response) => listData.push(...response.data.results));
  }

  if (listData.length === 0 && resource.isLoading && resource.isValidating) {
    return (
      <>
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
        <SkeletonItem />
      </>
    );
  }

  const scrollableID = "scrollableDiv";

  return (
    <div id={scrollableID} className={styles.list}>
      <InfiniteScroll
        dataLength={listData.length}
        next={loadMoreData}
        hasMore={listData.length < dataLength}
        loader={
          <div className={styles.loader}>
            <Spin
              indicator={<LoadingOutlined className={styles.spinner} spin />}
            />
          </div>
        }
        scrollableTarget={scrollableID}
      >
        <List
          itemLayout="vertical"
          dataSource={listData}
          renderItem={(listItemData) => (
            <ListItem key={listItemData.id} itemData={listItemData} />
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default ItemsList;

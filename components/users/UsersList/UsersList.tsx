import { LoadingOutlined } from "@ant-design/icons";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { List, Spin } from "antd";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserListItem from "./UserListItem/UserListItem";
import styles from "./UsersList.module.css";
import UsersListSkeleton from "./UsersListSkeleton/UsersListSkeleton";

const UsersList: React.FC = () => {
  const { resource } = useContext(UsersResourceContext);

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

  const users: UserData[] = [];
  let dataLength = 0;
  if (resource.data) {
    dataLength = resource.data[0].data.count;
    resource.data.map((response) => users.push(...response.data.results));
  }

  if (users.length === 0 && resource.isLoading && resource.isValidating) {
    return (
      <>
        <UsersListSkeleton />
        <UsersListSkeleton />
        <UsersListSkeleton />
      </>
    );
  }

  const scrollableID = "scrollableDiv";

  return (
    <div id={scrollableID} className={styles.userslist}>
      <InfiniteScroll
        dataLength={users.length}
        next={loadMoreData}
        hasMore={users.length < dataLength}
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
          dataSource={users}
          renderItem={(user) => <UserListItem key={user.id} user={user} />}
        />
      </InfiniteScroll>
    </div>
  );
};

export default UsersList;

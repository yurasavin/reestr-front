import { LoadingOutlined } from "@ant-design/icons";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { List, Spin } from "antd";
import React, { useContext } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import UserListItem from "./UserListItem";
import styles from "./UsersList.module.css";

const UsersList: React.FC = () => {
  const resourse = useContext(UsersResourceContext);

  if (!resourse) {
    return <div>Инициализация страницы</div>;
  }

  if (resourse.error) {
    return (
      <div>
        Ошибка...
        <br />
        {resourse.error.toString()}
      </div>
    );
  }

  const loadMoreData = (): void => {
    if (!resourse.isLoading) {
      resourse.setSize(resourse.size + 1);
    }
  };

  const users: UserData[] = [];
  let dataLength = 0;
  if (resourse.data) {
    dataLength = resourse.data[0].data.count;
    resourse.data.map((response) => users.push(...response.data.results));
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
          dataSource={users}
          renderItem={(user) => <UserListItem user={user} />}
        />
      </InfiniteScroll>
    </div>
  );
};

export default UsersList;

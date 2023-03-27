import { formatDateString } from "@helpers/formatDateString";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { List, Row, Space } from "antd";
import { UserRoleDispalay } from "config/constants";
import styles from "./UserListItem.module.css";
import UserListItemUserAvatar from "./UserListItemUserAvatar";
import UserListItemUserDeleteButton from "./UserListItemUserDeleteButton";
import UserListItemUserEditButton from "./UserListItemUserEditButton";
import UserListItemUserStatus from "./UserListItemUserStatus";

interface UserListItemProps {
  user: UserData;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <List.Item key={user.id}>
      <Row className={styles.listItem}>
        <UserListItemUserAvatar user={user} />
        <div>
          <b className={styles.userName}>{user.last_name}</b>
          <UserListItemUserStatus user={user} />
          <div>
            <b>Должность: </b>
            {user.first_name}
          </div>
          <div>
            <b>Роль: </b>
            {UserRoleDispalay[user.role]}
          </div>
          <div>
            <b>Дата создания: </b>
            {formatDateString(user.date_joined)}
          </div>
          <div>
            <b>Последний вход: </b>
            {formatDateString(user.last_login)}
          </div>
          <Space>
            <UserListItemUserEditButton user={user} />
            <UserListItemUserDeleteButton user={user} />
          </Space>
        </div>
      </Row>
    </List.Item>
  );
};
export default UserListItem;

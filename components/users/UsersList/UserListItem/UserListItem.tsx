import ListItem from "@components/shared/ListItem/ListItem";
import { UserRoleDispalay } from "@config/constants/userRoles";
import { formatDateString } from "@helpers/formatDateString";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { Row, Space } from "antd";
import styles from "./UserListItem.module.css";
import UserAvatar from "./components/UserAvatar/UserAvatar";
import UserDeleteButton from "./components/UserDeleteButton";
import UserEditButton from "./components/UserEditButton";
import UserStatus from "./components/UserStatus/UserStatus";

interface UserListItemProps {
  user: UserData;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <ListItem key={user.id} onClick={() => {}}>
      <b className={styles.userName}>{user.last_name}</b>
      <Row className={styles.listItem}>
        <UserAvatar user={user} />
        <div className={styles.mainFields}>
          <UserStatus is_active={user.is_active} />
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
            <UserEditButton user={user} />
            <UserDeleteButton user={user} />
          </Space>
        </div>
      </Row>
    </ListItem>
  );
};
export default UserListItem;
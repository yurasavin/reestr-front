import ListItem from "@components/shared/ItemsList/ListItem/ListItem";
import ListItemTitle from "@components/shared/ItemsList/ListItem/ListItemTitle/ListItemTitle";
import SectionItem from "@components/shared/ItemsList/ListItem/SectionItem/SectionItem";
import UserCreatedDateIcon from "@components/users/icons/UserCreatedDateIcon";
import UserLastLoginDateIcon from "@components/users/icons/UserLastLoginDateIcon";
import UserLoginIcon from "@components/users/icons/UserLoginIcon";
import UserPositionIcon from "@components/users/icons/UserPositionIcon";
import UserRoleIcon from "@components/users/icons/UserRoleIcon";
import UserStatusIcon from "@components/users/icons/UserStatusIcon";
import { UserRoleDispalay } from "@config/constants/userRoles";
import { formatDateString } from "@helpers/formatDateString";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { Space } from "antd";
import styles from "./UserListItem.module.css";
import UserAvatar from "./components/UserAvatar/UserAvatar";
import UserChangePasswordButton from "./components/UserChangePasswordButton";
import UserDeleteButton from "./components/UserDeleteButton";
import UserEditButton from "./components/UserEditButton";
import UserStatus from "./components/UserStatus/UserStatus";

interface UserListItemProps {
  user: UserData;
}

const UserListItem: React.FC<UserListItemProps> = ({ user }) => {
  return (
    <ListItem>
      <Space align="start">
        <UserAvatar user={user} />
        <Space direction="vertical" size={5}>
          <ListItemTitle text={user.last_name} />
          <Space align="start" size={25}>
            <Space direction="vertical" size={5} className={styles.firstCol}>
              <SectionItem title="Статус" icon={<UserStatusIcon />}>
                <UserStatus is_active={user.is_active} />
              </SectionItem>
              <SectionItem title="Логин" icon={<UserLoginIcon />}>
                {user.username}
              </SectionItem>
            </Space>
            <Space direction="vertical" size={5} className={styles.secondCol}>
              <SectionItem title="Дата создания" icon={<UserCreatedDateIcon />}>
                {formatDateString(user.date_joined)}
              </SectionItem>
              <SectionItem
                title="Последний вход"
                icon={<UserLastLoginDateIcon />}
              >
                {formatDateString(user.last_login)}
              </SectionItem>
            </Space>
            <Space direction="vertical" size={5}>
              <SectionItem title="Должность" icon={<UserPositionIcon />}>
                {user.first_name}
              </SectionItem>
              <SectionItem title="Роль" icon={<UserRoleIcon />}>
                {UserRoleDispalay[user.role]}
              </SectionItem>
            </Space>
          </Space>
          <Space className={styles.buttons}>
            <UserEditButton user={user} />
            <UserChangePasswordButton userId={user.id} />
            <UserDeleteButton user={user} />
          </Space>
        </Space>
      </Space>
    </ListItem>
  );
};
export default UserListItem;

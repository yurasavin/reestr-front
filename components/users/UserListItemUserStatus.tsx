import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import styles from "./UserListItemUserStatus.module.css";

interface UserListItemUserStatusProps {
  user: UserData;
}

const UserListItemUserStatus: React.FC<UserListItemUserStatusProps> = ({
  user,
}) => {
  const title = user.is_active ? "Активный" : "Заблокирован";
  return (
    <div className={styles.statusContainer}>
      <b className={styles.label}>Статус:</b> {title}
      {user.is_active ? (
        <CheckCircleOutlined className={styles.statusActive} />
      ) : (
        <StopOutlined className={styles.statusBlocked} />
      )}
    </div>
  );
};

export default UserListItemUserStatus;

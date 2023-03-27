import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import styles from "./UserListItemUserStatus.module.css";

interface UserListItemUserStatusProps {
  is_active: Boolean;
}

const UserListItemUserStatus: React.FC<UserListItemUserStatusProps> = ({
  is_active,
}) => {
  const title = is_active ? "Активный" : "Заблокирован";
  return (
    <div className={styles.statusContainer}>
      <b className={styles.label}>Статус:</b> {title}
      {is_active ? (
        <CheckCircleOutlined className={styles.statusActive} />
      ) : (
        <StopOutlined className={styles.statusBlocked} />
      )}
    </div>
  );
};

export default UserListItemUserStatus;

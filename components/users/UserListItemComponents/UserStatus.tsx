import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import styles from "./UserStatus.module.css";

interface UserStatusProps {
  is_active: Boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ is_active }) => {
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

export default UserStatus;

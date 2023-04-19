import { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styles from "./UserStatus.module.css";

interface UserStatusProps {
  is_active: Boolean;
}

const UserStatus: React.FC<UserStatusProps> = ({ is_active }) => {
  const title = is_active ? "Активный" : "Заблокирован";

  return (
    <Space size={8}>
      {title}
      {is_active ? (
        <CheckCircleOutlined className={styles.statusActive} />
      ) : (
        <StopOutlined className={styles.statusBlocked} />
      )}
    </Space>
  );
};

export default UserStatus;

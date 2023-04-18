import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Space } from "antd";
import styles from "./TicketStatus.module.css";

interface TicketStatusProps {
  status: boolean;
}

const TicketStatus: React.FC<TicketStatusProps> = ({ status }) => {
  const title = status ? "В работе" : "Завершена";

  return (
    <Space size={8}>
      {title}
      {status ? (
        <ClockCircleOutlined className={styles.iconProcess} />
      ) : (
        <CheckCircleOutlined className={styles.iconFinished} />
      )}
    </Space>
  );
};

export default TicketStatus;

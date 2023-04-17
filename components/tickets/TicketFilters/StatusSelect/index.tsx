import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Select } from "antd";
import { useContext } from "react";
import styles from "./StatusSelect.module.css";

const StatusSelect: React.FC = () => {
  const { status, setStatus } = useContext(TicketsResourceContext);

  return (
    <Select
      className={styles.select}
      placeholder="Статус"
      allowClear
      defaultValue={status}
      onChange={(status) => setStatus && setStatus(status)}
      options={[
        { value: true, label: "В работе" },
        { value: false, label: "Завершена" },
      ]}
    />
  );
};

export default StatusSelect;

import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { Select } from "antd";
import { useContext } from "react";
import styles from "./StatusFilter.module.css";

const StatusFilter: React.FC = () => {
  const { status, setStatus } = useContext(UsersResourceContext);

  return (
    <Select
      allowClear
      className={styles.select}
      placeholder="Статус"
      defaultValue={status}
      onChange={(status) => setStatus && setStatus(status)}
      options={[
        { value: true, label: "Активный" },
        { value: false, label: "Заблокирован" },
      ]}
    />
  );
};

export default StatusFilter;

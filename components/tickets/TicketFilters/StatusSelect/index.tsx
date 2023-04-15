import { Select } from "antd";
import styles from "./StatusSelect.module.css";

const StatusSelect: React.FC = () => {
  return (
    <Select
      className={styles.select}
      // defaultValue
      // onSelect={(year) => setYear && setYear(year)}
      options={[
        { value: null, label: "---" },
        { value: true, label: "В работе" },
        { value: false, label: "Завершена" },
      ]}
    />
  );
};

export default StatusSelect;

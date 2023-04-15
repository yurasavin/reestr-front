import { Select } from "antd";
import styles from "./TenderTypeSelect.module.css";

const TenderTypeSelect: React.FC = () => {
  return (
    <Select
      className={styles.select}
      // defaultValue
      mode="multiple"
      // onSelect={(year) => setYear && setYear(year)}
      options={[
        { value: 1, label: "ЕП пункт 9 ч.1 ст.93 44-ФЗ" },
        { value: 2, label: "Электронный аукцион 223-ФЗ" },
        { value: 3, label: "Запрос котировок 44-ФЗ" },
      ]}
    />
  );
};

export default TenderTypeSelect;

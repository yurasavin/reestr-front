import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { DatePicker } from "antd";
import { useContext } from "react";
import styles from "./DateFilter.module.css";

const { RangePicker } = DatePicker;

const DateFilter: React.FC = () => {
  const { dateAfter, setDateAfter, dateBefore, setDateBefore } = useContext(
    TicketsResourceContext
  );

  return (
    <RangePicker
      className={styles.picker}
      value={[dateAfter, dateBefore]}
      format="DD.MM.YYYY"
      placeholder={["Дата от", "Дата до"]}
      allowEmpty={[true, true]}
      onChange={(value) => {
        if (value === null) {
          setDateAfter && setDateAfter(null);
          setDateBefore && setDateBefore(null);
        } else {
          setDateAfter && setDateAfter(value[0]);
          setDateBefore && setDateBefore(value[1]);
        }
      }}
    />
  );
};

export default DateFilter;

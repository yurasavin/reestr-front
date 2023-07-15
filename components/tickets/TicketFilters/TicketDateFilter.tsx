import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { DatePicker } from "antd";
import { useContext } from "react";
const TicketDateFilter: React.FC = () => {
  const { dateAfter, setDateAfter, dateBefore, setDateBefore } = useContext(
    TicketsResourceContext
  );

  return (
    <DatePicker.RangePicker
      defaultValue={[dateAfter, dateBefore]}
      format="DD.MM.YYYY"
      placeholder={["Дата заявки", "Дата заявки"]}
      allowEmpty={[true, true]}
      style={{ width: 250 }}
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

export default TicketDateFilter;

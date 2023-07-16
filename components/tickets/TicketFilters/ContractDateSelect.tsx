import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { DatePicker } from "antd";
import { useContext } from "react";

const ContractDateSelect: React.FC = () => {
  const { setContractDateAfter, setContractDateBefore } = useContext(
    TicketsResourceContext
  );

  return (
    <DatePicker.RangePicker
      format="DD.MM.YYYY"
      placeholder={["Дата контракта", "Дата контракта"]}
      allowEmpty={[true, true]}
      style={{ width: 300 }}
      onChange={(value) => {
        if (value === null) {
          setContractDateAfter && setContractDateAfter(null);
          setContractDateBefore && setContractDateBefore(null);
        } else {
          setContractDateAfter && setContractDateAfter(value[0]);
          setContractDateBefore && setContractDateBefore(value[1]);
        }
      }}
    />
  );
};

export default ContractDateSelect;

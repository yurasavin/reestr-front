import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Select } from "antd";
import { useContext } from "react";

const TicketStatusSelect: React.FC = () => {
  const { status, setStatus } = useContext(TicketsResourceContext);

  return (
    <Select
      placeholder="Статус заявки"
      allowClear
      defaultValue={status}
      style={{ width: 150 }}
      onChange={(status) => setStatus && setStatus(status)}
      options={[
        { value: true, label: "В работе" },
        { value: false, label: "Завершена" },
      ]}
    />
  );
};

export default TicketStatusSelect;

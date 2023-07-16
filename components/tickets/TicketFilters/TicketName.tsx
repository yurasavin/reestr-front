import { SearchOutlined } from "@ant-design/icons";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const TicketName: React.FC = () => {
  const { setTicketName } = useContext(TicketsResourceContext);

  return (
    <Input
      onChange={(e) => setTicketName && setTicketName(e.target.value)}
      placeholder="Предмет закупки"
      allowClear
      suffix={<SearchOutlined />}
      style={{ width: 300 }}
    />
  );
};

export default TicketName;

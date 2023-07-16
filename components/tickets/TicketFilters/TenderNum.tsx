import { SearchOutlined } from "@ant-design/icons";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const TenderNum: React.FC = () => {
  const { setTenderNum } = useContext(TicketsResourceContext);

  return (
    <Input
      onChange={(e) => setTenderNum && setTenderNum(e.target.value)}
      placeholder="Номер закупки"
      allowClear
      suffix={<SearchOutlined />}
      style={{ width: 220 }}
    />
  );
};

export default TenderNum;

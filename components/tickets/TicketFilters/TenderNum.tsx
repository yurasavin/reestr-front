import { SearchOutlined } from "@ant-design/icons";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const TenderNum: React.FC = () => {
  const { tenderNum, setTenderNum } = useContext(TicketsResourceContext);

  return (
    <Input
      defaultValue={tenderNum}
      onChange={(e) => setTenderNum && setTenderNum(e.target.value)}
      placeholder="Номер закупки"
      allowClear
      suffix={<SearchOutlined />}
      style={{ width: 220 }}
    />
  );
};

export default TenderNum;

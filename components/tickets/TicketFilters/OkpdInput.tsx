import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const OkpdInput: React.FC = () => {
  const { okpd, setOkpd } = useContext(TicketsResourceContext);

  return (
    <Input
      defaultValue={okpd}
      onChange={(e) => setOkpd && setOkpd(e.target.value)}
      placeholder="ОКПД2"
      allowClear
      style={{ width: 175 }}
    />
  );
};

export default OkpdInput;

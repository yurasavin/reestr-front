import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const KontragentInput: React.FC = () => {
  const { setKontragent } = useContext(TicketsResourceContext);

  return (
    <Input
      onChange={(e) => setKontragent && setKontragent(e.target.value)}
      placeholder="Контрагент"
      allowClear
      style={{ width: 250 }}
    />
  );
};

export default KontragentInput;

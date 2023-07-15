import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const ContractNumInput: React.FC = () => {
  const { contractNum, setContractNum } = useContext(TicketsResourceContext);

  return (
    <Input
      defaultValue={contractNum}
      onChange={(e) => setContractNum && setContractNum(e.target.value)}
      placeholder="Номер контракта"
      allowClear
      style={{ width: 250 }}
    />
  );
};

export default ContractNumInput;

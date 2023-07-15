import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { InputNumber, Space } from "antd";
import { useContext } from "react";

const ContractPriceInput: React.FC = () => {
  const {
    contractPriceFrom,
    setContractPriceFrom,
    contractPriceTo,
    setContractPriceTo,
  } = useContext(TicketsResourceContext);

  return (
    <Space.Compact>
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        defaultValue={contractPriceFrom}
        onChange={(value) =>
          setContractPriceFrom && setContractPriceFrom(value)
        }
        placeholder="Цена контракта от"
        style={{ width: 150 }}
      />
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        defaultValue={contractPriceTo}
        onChange={(value) => setContractPriceTo && setContractPriceTo(value)}
        placeholder="Цена контракта до"
        style={{ width: 150 }}
      />
    </Space.Compact>
  );
};

export default ContractPriceInput;

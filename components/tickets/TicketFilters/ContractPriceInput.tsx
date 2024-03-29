import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { InputNumber, Space } from "antd";
import { useContext } from "react";

const ContractPriceInput: React.FC = () => {
  const { setContractPriceFrom, setContractPriceTo } = useContext(
    TicketsResourceContext
  );

  return (
    <Space.Compact>
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        onChange={(value) =>
          setContractPriceFrom && setContractPriceFrom(value as string)
        }
        placeholder="Цена контракта от"
        style={{ width: 150 }}
      />
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        onChange={(value) =>
          setContractPriceTo && setContractPriceTo(value as string)
        }
        placeholder="Цена контракта до"
        style={{ width: 150 }}
      />
    </Space.Compact>
  );
};

export default ContractPriceInput;

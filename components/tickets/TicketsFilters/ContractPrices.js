import { Input, InputNumber } from "antd";
import InputGroup from "./InputGroup";

const ContractPrices = ({ filterSetters }) => {
  return (
    <InputGroup labelName="Сумма">
      <Input.Group style={{ display: "flex" }}>
        <InputNumber
          placeholder="От"
          onChange={(value) => filterSetters.setContractPriceFrom(value)}
          style={{ width: "50%" }}
        />
        <InputNumber
          placeholder="До"
          onChange={(value) => filterSetters.setContractPriceTo(value)}
          style={{ width: "50%" }}
        />
      </Input.Group>
    </InputGroup>
  );
};
export default ContractPrices;

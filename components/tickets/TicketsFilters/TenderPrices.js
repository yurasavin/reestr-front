import { Input, InputNumber } from "antd";
import InputGroup from "./InputGroup";

const TenderPrices = ({ filterSetters }) => {
  return (
    <InputGroup labelName="НМЦК">
      <Input.Group style={{ display: "flex" }}>
        <InputNumber
          placeholder="От"
          onChange={(value) => filterSetters.setTenderPriceFrom(value)}
          style={{ width: "50%" }}
        />
        <InputNumber
          placeholder="До"
          onChange={(value) => filterSetters.setTenderPriceTo(value)}
          style={{ width: "50%" }}
        />
      </Input.Group>
    </InputGroup>
  );
};
export default TenderPrices;

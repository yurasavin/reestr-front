import { Input, InputNumber } from "antd";
import InputGroup from "./InputGroup";

const TenderPrices = ({ filters, filterSetters }) => {
  return (
    <InputGroup labelName="НМЦК">
      <Input.Group style={{ display: "flex" }}>
        <InputNumber
          placeholder="От"
          value={filters.tenderPriceFromReal}
          onChange={(value) => filterSetters.setTenderPriceFrom(value)}
          style={{ width: "50%" }}
        />
        <InputNumber
          placeholder="До"
          value={filters.tenderPriceToReal}
          onChange={(value) => filterSetters.setTenderPriceTo(value)}
          style={{ width: "50%" }}
        />
      </Input.Group>
    </InputGroup>
  );
};
export default TenderPrices;

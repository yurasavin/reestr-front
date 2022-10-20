import { DatePicker } from "antd";
import InputGroup from "./InputGroup";

const ContractDates = ({ filterSetters }) => {
  return (
    <InputGroup labelName="Дата">
      <DatePicker.RangePicker
        format="DD.MM.YYYY"
        onChange={(values, stringValues) => {
          filterSetters.setContractDateFrom(stringValues[0]);
          filterSetters.setContractDateTo(stringValues[1]);
        }}
        allowEmpty={[true, true]}
        placeholder={["С", "По"]}
        getPopupContainer={(triggerNode) => triggerNode}
      />
    </InputGroup>
  );
};
export default ContractDates;

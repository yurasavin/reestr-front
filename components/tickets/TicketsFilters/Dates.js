import { DatePicker } from "antd";
import InputGroup from "./InputGroup";

const Dates = ({ filterSetters }) => {
  return (
    <InputGroup labelName="Дата">
      <DatePicker.RangePicker
        format="DD.MM.YYYY"
        onChange={(values, stringValues) => {
          filterSetters.setDateFrom(stringValues[0]);
          filterSetters.setDateTo(stringValues[1]);
        }}
        allowEmpty={[true, true]}
        placeholder={["С", "По"]}
        getPopupContainer={(triggerNode) => triggerNode}
      />
    </InputGroup>
  );
};
export default Dates;

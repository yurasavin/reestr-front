import { DatePicker } from "antd";
import moment from "moment";
import InputGroup from "./InputGroup";

const Dates = ({ filters, filterSetters }) => {
  const value = [
    filters.dateFrom ? moment(filters.dateFrom) : null,
    filters.dateTo ? moment(filters.dateTo) : null,
  ];
  return (
    <InputGroup labelName="Дата">
      <DatePicker.RangePicker
        format="DD.MM.YYYY"
        value={value}
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

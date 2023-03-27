import { DatePicker } from "antd";
import moment from "moment";
import InputGroup from "./InputGroup";

const Year = ({ filters, filterSetters }) => {
  const value = moment(filters.year, ["YYYY"]);

  return (
    <InputGroup labelName="Год">
      <DatePicker
        picker="year"
        allowClear={false}
        value={value}
        onChange={(value) => filterSetters.setYear(value.year())}
      />
    </InputGroup>
  );
};
export default Year;

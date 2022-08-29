import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useMemo } from "react";
import InputGroup from "./InputGroup";

const Year = ({ filterSetters }) => {
  const defaultYear = useMemo(() => moment(), []);
  useEffect(() => {
    filterSetters.setYear(defaultYear.year());
  }, []);

  return (
    <InputGroup labelName="Год">
      <DatePicker
        picker="year"
        allowClear={false}
        defaultValue={defaultYear}
        onChange={(value) => filterSetters.setYear(value.year())}
      />
    </InputGroup>
  );
};
export default Year;

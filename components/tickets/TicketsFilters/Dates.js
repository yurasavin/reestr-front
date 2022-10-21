import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import InputGroup from "./InputGroup";

const Dates = ({
  filters,
  filterSetters,
  parentScrolled,
  setParentScrolled,
}) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (!parentScrolled || !opened) return;

    setOpened(false);
    setParentScrolled(false);
  }, [parentScrolled, opened]);

  const value = [
    filters.dateFrom
      ? moment(filters.dateFrom, ["DD.MM.YYYY", "YYYY-MM-DD"])
      : null,
    filters.dateTo
      ? moment(filters.dateTo, ["DD.MM.YYYY", "YYYY-MM-DD"])
      : null,
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
        open={opened}
        onOpenChange={(open) => {
          setOpened(open);
          if (parentScrolled) setParentScrolled(false);
        }}
      />
    </InputGroup>
  );
};
export default Dates;

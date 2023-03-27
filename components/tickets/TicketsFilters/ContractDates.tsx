import { DatePicker } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import InputGroup from "./InputGroup";

const ContractDates = ({
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
    filters.contractDateFrom
      ? moment(filters.contractDateFrom, ["DD.MM.YYYY", "YYYY-MM-DD"])
      : null,
    filters.contractDateTo
      ? moment(filters.contractDateTo, ["DD.MM.YYYY", "YYYY-MM-DD"])
      : null,
  ];

  return (
    <InputGroup labelName="Дата">
      <DatePicker.RangePicker
        format="DD.MM.YYYY"
        value={value}
        onChange={(values, stringValues) => {
          filterSetters.setContractDateFrom(stringValues[0]);
          filterSetters.setContractDateTo(stringValues[1]);
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
export default ContractDates;

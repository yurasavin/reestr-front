import { DatePicker } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";
import styles from "./DateFilter.module.css";

const { RangePicker } = DatePicker;

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const DateFilter: React.FC = () => {
  const [dates, setDates] = useState<RangeValue>(null);
  const [value, setValue] = useState<RangeValue>(null);

  // const disabledDate = (current: Dayjs) => {
  //   if (!dates) {
  //     return false;
  //   }
  //   const tooLate = dates[0] && current.diff(dates[0], "days") >= 7;
  //   const tooEarly = dates[1] && dates[1].diff(current, "days") >= 7;
  //   return !!tooEarly || !!tooLate;
  // };

  const onOpenChange = (open: boolean) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  return (
    <RangePicker
      className={styles.picker}
      value={dates || value}
      format="DD.MM.YYYY"
      placeholder={["От", "До"]}
      allowEmpty={[true, true]}
      // disabledDate={disabledDate}
      onCalendarChange={(val) => setDates(val)}
      onChange={(val) => setValue(val)}
      onOpenChange={onOpenChange}
    />
  );
};

export default DateFilter;

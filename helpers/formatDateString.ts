import dayjs from "dayjs";

const formatDateString = (dateStr: string | null) => {
  const dayjsDate = dayjs(dateStr);
  return dayjsDate.isValid() ? dayjsDate.format("DD.MM.YYYY") : "---";
};

export { formatDateString };

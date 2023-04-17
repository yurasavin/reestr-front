import moment from "moment";

const formatDateString = (dateStr: string | null) => {
  // TODO: replace moment with dayjs
  const momentDate = moment(dateStr);
  if (momentDate.isValid()) {
    return momentDate.format("DD.MM.YYYY");
  }
  return "---";
};

export { formatDateString };

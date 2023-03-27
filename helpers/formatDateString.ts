import moment from "moment";

const formatDateString = (dateStr: string | null) => {
  const momentDate = moment(dateStr);
  if (momentDate.isValid()) {
    return momentDate.format("DD.MM.YYYY");
  }
  return "---";
};

export { formatDateString };

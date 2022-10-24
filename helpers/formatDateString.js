const formatDateString = (str) => {
  return str.split("-").reverse().join(".");
};
export default formatDateString;

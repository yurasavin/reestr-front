const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

const Price = ({ price }) => {
  return <span>{formatter.format(price)}</span>;
};
export default Price;

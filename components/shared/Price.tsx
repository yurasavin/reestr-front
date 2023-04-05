const formatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

interface PriceProps {
  priceStr: string;
}

const Price: React.FC<PriceProps> = ({ priceStr }) => {
  const price = parseFloat(priceStr);
  return <span>{formatter.format(price)}</span>;
};

export default Price;

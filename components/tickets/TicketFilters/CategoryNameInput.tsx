import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input } from "antd";
import { useContext } from "react";

const CategoryNameInput: React.FC = () => {
  const { categoryName, setCategoryName } = useContext(TicketsResourceContext);

  return (
    <Input
      defaultValue={categoryName}
      onChange={(e) => setCategoryName && setCategoryName(e.target.value)}
      placeholder="Категория"
      allowClear
      style={{ width: 150 }}
    />
  );
};

export default CategoryNameInput;

import { Input, Space } from "antd";
import Categories from "./Categories";
import Dates from "./Dates";
import InputGroup from "./InputGroup";
import Year from "./Year";

const Label = ({ name }) => <label style={{ fontWeight: 500 }}>{name}</label>;

const TicketsFilters = ({ filterSetters }) => {
  return (
    <Space
      direction="vertical"
      style={{
        height: "85vh",
        backgroundColor: "#001529",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: 10,
        borderRadius: 8,
      }}
    >
      <Label name="Заявка" />
      <Year filterSetters={filterSetters} />
      <InputGroup labelName="Наименование">
        <Input
          allowClear
          onChange={(e) => filterSetters.setName(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>

      <Dates filterSetters={filterSetters} />
      <Categories filterSetters={filterSetters} />
      <Label name="Закупка" />
      <Label name="Контракт" />
    </Space>
  );
};
export default TicketsFilters;

import { Select } from "antd";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Initiators = ({ filterSetters }) => {
  const { data: response, error } = useResource("initiators/");
  const options = response
    ? response.data.map((user) => ({
        value: user.id,
        label: user.name,
      }))
    : [];

  return (
    <InputGroup labelName="Инициатор">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        onChange={(values) => filterSetters.setInitiators(values)}
        options={options}
        filterOption={(inputValue, option) =>
          option.label.search(new RegExp(inputValue, "i")) !== -1
        }
        style={{ width: "100%" }}
      />
    </InputGroup>
  );
};

export default Initiators;

import { Select } from "antd";
import { useResource } from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Initiators = ({ filters, filterSetters }) => {
  const { data: response, error } = useResource("initiators/", {
    revalidateOnFocus: false,
  });
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
        value={filters.initiators}
        onChange={(values) => filterSetters.setInitiators(values)}
        options={options}
        filterOption={(inputValue, option) =>
          option.label.search(new RegExp(inputValue, "i")) !== -1
        }
        style={{ width: "100%" }}
        getPopupContainer={(triggerNode) => triggerNode.parentElement}
      />
    </InputGroup>
  );
};

export default Initiators;

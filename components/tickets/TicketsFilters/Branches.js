import { Select } from "antd";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Branches = ({ filters, filterSetters }) => {
  const { data: response, error } = useResource(
    "branches/",
    {},
    {
      revalidateOnFocus: false,
    }
  );
  const options = response
    ? response.data.map((branch) => ({
        value: branch.id,
        label: branch.name,
      }))
    : [];

  return (
    <InputGroup labelName="Филиал">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        value={filters.branches}
        onChange={(values) => filterSetters.setBranches(values)}
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

export default Branches;

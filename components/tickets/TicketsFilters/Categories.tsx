import { Select } from "antd";
import { useResource } from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Categories = ({ filters, filterSetters }) => {
  const { data: response, error } = useResource("categories/", {
    revalidateOnFocus: false,
  });
  const options = response
    ? response.data.map((category) => ({
        value: category.id,
        label: category.name,
      }))
    : [];

  return (
    <InputGroup labelName="Категория">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        value={filters.categories}
        onChange={(values) => filterSetters.setCategories(values)}
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
export default Categories;

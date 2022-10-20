import { Select } from "antd";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const TenderTypes = ({ filters, filterSetters }) => {
  const { data: response, error } = useResource(
    "tender_types/",
    {},
    {
      revalidateOnFocus: false,
    }
  );
  const options = response ? response.data : [];

  return (
    <InputGroup labelName="Способ закупки">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        value={filters.tenderTypes}
        onChange={(values) => filterSetters.setTenderTypes(values)}
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

export default TenderTypes;

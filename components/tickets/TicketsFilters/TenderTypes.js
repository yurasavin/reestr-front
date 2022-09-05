import { Select } from "antd";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const TenderTypes = ({ filterSetters }) => {
  const { data: response, error } = useResource("tender_types/");
  const options = response ? response.data : [];

  return (
    <InputGroup labelName="Способ закупки">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        onChange={(values) => filterSetters.setTenderTypes(values)}
        options={options}
        filterOption={(inputValue, option) =>
          option.label.search(new RegExp(inputValue, "i")) !== -1
        }
        style={{ width: "100%" }}
      />
    </InputGroup>
  );
};

export default TenderTypes;

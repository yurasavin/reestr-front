import { Select } from "antd";
import { ROLE_WRITER } from "config/constants";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Users = ({ filters, filterSetters }) => {
  const { data: response, error } = useResource(
    "users/",
    { role__gte: ROLE_WRITER },
    { revalidateOnFocus: false }
  );
  const options = response
    ? response.data.map((user) => ({
        value: user.id,
        label: user.last_name,
      }))
    : [];

  return (
    <InputGroup labelName="Ответственный">
      <Select
        mode="multiple"
        showArrow
        loading={!response}
        allowClear
        value={filters.users}
        onChange={(values) => filterSetters.setUsers(values)}
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

export default Users;

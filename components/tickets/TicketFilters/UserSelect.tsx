import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";

interface UserData {
  id: number;
  last_name: string;
}

const UserSelect: React.FC = () => {
  const { users, setUsers } = useContext(TicketsResourceContext);
  const resource = useResource<UserData[]>({
    swrKey: { path: "users/choices/" },
  });

  return (
    <Select
      allowClear
      placeholder="Ответственный"
      defaultValue={users}
      loading={!resource.data}
      onChange={(users) => setUsers && setUsers(users)}
      options={resource.data?.data}
      fieldNames={{ value: "id", label: "last_name" }}
      mode="multiple"
      showSearch={false}
      maxTagCount="responsive"
      virtual={false}
      listHeight={400}
      style={{ width: 250 }}
    />
  );
};

export default UserSelect;

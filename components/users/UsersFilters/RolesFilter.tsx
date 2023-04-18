import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import React, { useContext } from "react";

interface RoleData {
  id: number;
  name: string;
}

const RolesFilter: React.FC = () => {
  const { role, setRole } = useContext(UsersResourceContext);
  const resource = useResource<RoleData[]>({
    swrKey: { path: "users/roles/" },
  });

  return (
    <Select
      allowClear
      defaultValue={role}
      fieldNames={{ value: "id", label: "name" }}
      loading={!resource.data}
      placeholder="Роль"
      // onChange={(tenderTypes) => setTenderTypes && setTenderTypes(tenderTypes)}
      // options={options}
      virtual={false}
      // listHeight={400}
    />
  );
};

export default RolesFilter;

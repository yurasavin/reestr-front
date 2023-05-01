import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import React, { useContext } from "react";
import styles from "./RolesFilter.module.css";

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
      className={styles.select}
      defaultValue={role}
      fieldNames={{ value: "id", label: "name" }}
      loading={!resource.data}
      placeholder="Роль"
      onChange={(role) => setRole && setRole(role)}
      options={resource?.data?.data}
      virtual={false}
    />
  );
};

export default RolesFilter;

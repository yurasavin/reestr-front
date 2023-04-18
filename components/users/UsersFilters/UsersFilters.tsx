import Filters from "@components/shared/Filters/Filters";
import React from "react";
import RolesFilter from "./RolesFilter";
import UsersSearch from "./UsersSearch/UsersSearch";

const UsersFilters: React.FC = () => {
  return (
    <Filters justify="justifyStart">
      <UsersSearch />
      <RolesFilter />
    </Filters>
  );
};

export default UsersFilters;

import FilterItem from "@components/shared/Filters/FilterItem/FilterItem";
import Filters from "@components/shared/Filters/Filters";
import React from "react";
import RolesFilter from "./RolesFilter/RolesFilter";
import StatusFilter from "./StatusFilter/StatusFilter";
import UsersSearch from "./UsersSearch/UsersSearch";

const UsersFilters: React.FC = () => {
  return (
    <Filters align="start">
      <UsersSearch />
      <FilterItem title="Статус">
        <StatusFilter />
      </FilterItem>
      <FilterItem title="Роль">
        <RolesFilter />
      </FilterItem>
    </Filters>
  );
};

export default UsersFilters;

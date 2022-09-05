import { useDebounce } from "ahooks";
import { Select } from "antd";
import React, { useState } from "react";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Okpds = ({ filterSetters }) => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce(searchValue, { wait: 900 });

  const { data: response, error } = useResource("okpd2/", {
    search: debouncedSearchValue,
    limit: 100,
  });
  const options = response
    ? response.data.results.map((okpd) => ({
        value: okpd.id,
        label: okpd.label,
      }))
    : [];

  return (
    <InputGroup labelName="ОКПД2">
      {error ? (
        "Ошибка при загрузке..."
      ) : (
        <Select
          mode="multiple"
          loading={!response}
          onChange={(values) => filterSetters.setOkpds(values)}
          style={{ width: "100%" }}
          showSearch
          options={options}
          defaultActiveFirstOption={false}
          filterOption={false}
          onSearch={(newSearchValue) => setSearchValue(newSearchValue)}
        />
      )}
    </InputGroup>
  );
};

export default Okpds;

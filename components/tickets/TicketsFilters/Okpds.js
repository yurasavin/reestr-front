import { useDebounce } from "ahooks";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const Okpds = ({ filters, filterSetters }) => {
  const [searchValue, setSearchValue] = useState("");
  const [values, setValues] = useState([]);
  const [options, setOptions] = useState([]);
  const debouncedSearchValue = useDebounce(searchValue, { wait: 900 });

  const { data: response, error } = useResource(
    "okpd2/",
    {
      search: debouncedSearchValue,
      limit: 100,
    },
    { revalidateOnFocus: false }
  );

  useEffect(() => {
    if (filters.clickedOkpd) setSearchValue(filters.clickedOkpd);
    filterSetters.setClickedOkpd(null);
  }, [filters.clickedOkpd]);

  useEffect(() => {
    const options = response
      ? response.data.results.map((okpd) => ({
          value: okpd.id,
          label: okpd.label,
        }))
      : [];

    setOptions(options);

    const values = filters.okpds.map((id) => {
      if (!options.filter((option) => option.value === id).length) {
        return "Загрузка...";
      }
      return id;
    });

    setValues(values);
  }, [filters.okpds, response]);

  return (
    <InputGroup labelName="ОКПД2">
      {error ? (
        "Ошибка при загрузке..."
      ) : (
        <Select
          mode="multiple"
          loading={!response}
          value={values}
          onChange={(values) => filterSetters.setOkpds(values)}
          style={{ width: "100%" }}
          showSearch
          options={options}
          defaultActiveFirstOption={false}
          filterOption={false}
          onSearch={(newSearchValue) => setSearchValue(newSearchValue)}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
      )}
    </InputGroup>
  );
};

export default Okpds;

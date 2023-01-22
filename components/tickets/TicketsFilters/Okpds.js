import { Select } from "antd";
import { useEffect, useState } from "react";
import useResource from "../../../hooks/apis/useResource";
import InputGroup from "./InputGroup";

const TEMPORARY_VALUE = "Загрузка...";

const Okpds = ({ filters, filterSetters }) => {
  const [options, setOptions] = useState([]);

  const resourceParams = {
    search: filters.debouncedOkpdSearchValueReal,
    limit: 100,
  };

  if (filters.okpds.length) {
    resourceParams.extra_ids = filters.okpds;
  }

  const { data: response, error } = useResource(["okpd2/", resourceParams], {
    revalidateOnFocus: false,
  });

  useEffect(() => {
    const options = response
      ? response.data.results.map((okpd) => ({
          value: okpd.id,
          label: okpd.label,
        }))
      : [];

    filters.okpds.map((id) => {
      if (options.filter((option) => option.value === id).length) {
        return;
      }
      options.push({ value: id, label: TEMPORARY_VALUE });
    });

    setOptions(options);
  }, [filters.okpds, response]);

  return (
    <InputGroup labelName="ОКПД2">
      {error ? (
        "Ошибка при загрузке..."
      ) : (
        <Select
          mode="multiple"
          loading={!response}
          value={filters.okpds}
          onChange={(values) => filterSetters.setOkpds(values)}
          style={{ width: "100%" }}
          showSearch
          options={options}
          defaultActiveFirstOption={false}
          filterOption={false}
          onSearch={(newSearchValue) =>
            filterSetters.setOkpdSearchValueReal(newSearchValue)
          }
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
      )}
    </InputGroup>
  );
};

export default Okpds;

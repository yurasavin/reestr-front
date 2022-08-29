import { useDebounce } from "ahooks";
import { useMemo, useState } from "react";

const useFilters = () => {
  const [year, setYear] = useState("");

  const [name, setName] = useState("");
  const debouncedName = useDebounce(name, { wait: 900 });

  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const [categories, setCategories] = useState([]);

  const filters = useMemo(
    () => ({ year, name: debouncedName, dateFrom, dateTo, categories }),
    [year, debouncedName, dateFrom, dateTo, categories]
  );

  const filterSetters = {
    setYear,
    setName,
    setCategories,
    setDateFrom,
    setDateTo,
  };

  return [filters, filterSetters];
};

export default useFilters;

import { useDebounce } from "ahooks";
import { useMemo, useState } from "react";

const useFilters = () => {
  const [offset, setOffset] = useState(0);

  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);
  const debouncedName = useDebounce(name, { wait: 900 });
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [categories, setCategories] = useState([]);
  const [tenderTypes, setTenderTypes] = useState([]);
  const [branches, setBranches] = useState([]);
  const [okpds, setOkpds] = useState([]);
  const [users, setUsers] = useState([]);
  const [initiators, setInitiators] = useState([]);

  const [tenderStatuses, setTenderStatuses] = useState("");
  const [tenderNum, setTenderNum] = useState("");
  const debouncedTenderNum = useDebounce(tenderNum, { wait: 900 });
  const [smp, setSmp] = useState(null);
  const [tenderPriceFrom, setTenderPriceFrom] = useState(null);
  const debouncedTenderPriceFrom = useDebounce(tenderPriceFrom, { wait: 900 });
  const [tenderPriceTo, setTenderPriceTo] = useState(null);
  const debouncedTenderPriceTo = useDebounce(tenderPriceTo, { wait: 900 });

  const [contractNum, setContractNum] = useState(null);
  const debouncedContractNum = useDebounce(contractNum, { wait: 900 });
  const [contractDateFrom, setContractDateFrom] = useState("");
  const [contractDateTo, setContractDateTo] = useState("");
  const [contractPriceFrom, setContractPriceFrom] = useState(null);
  const debouncedContractPriceFrom = useDebounce(contractPriceFrom, {
    wait: 900,
  });
  const [contractPriceTo, setContractPriceTo] = useState(null);
  const debouncedContractPriceTo = useDebounce(contractPriceTo, { wait: 900 });
  const [contractContractor, setContractContractor] = useState("");
  const debouncedContractContractor = useDebounce(contractContractor, {
    wait: 900,
  });

  const filters = useMemo(
    () => ({
      limit: 20,
      offset,
      year,
      name: debouncedName,
      status,
      dateFrom,
      dateTo,
      categories,
      tenderTypes,
      branches,
      okpds,
      users,
      initiators,
      tenderStatuses,
      tenderNum: debouncedTenderNum,
      smp,
      tenderPriceFrom: debouncedTenderPriceFrom,
      tenderPriceTo: debouncedTenderPriceTo,
      contractNum: debouncedContractNum,
      contractDateFrom,
      contractDateTo,
      contractPriceFrom: debouncedContractPriceFrom,
      contractPriceTo: debouncedContractPriceTo,
      contractContractor: debouncedContractContractor,
    }),
    [
      offset,
      year,
      debouncedName,
      status,
      dateFrom,
      dateTo,
      categories,
      tenderTypes,
      branches,
      okpds,
      users,
      initiators,
      tenderStatuses,
      debouncedTenderNum,
      smp,
      debouncedTenderPriceFrom,
      debouncedTenderPriceTo,
      debouncedContractNum,
      contractDateFrom,
      contractDateTo,
      debouncedContractPriceFrom,
      debouncedContractPriceTo,
      debouncedContractContractor,
    ]
  );

  const filterSetters = {
    setOffset,
    setYear,
    setName,
    setStatus,
    setDateFrom,
    setDateTo,
    setCategories,
    setTenderTypes,
    setBranches,
    setOkpds,
    setUsers,
    setInitiators,
    setTenderStatuses,
    setTenderNum,
    setSmp,
    setTenderPriceFrom,
    setTenderPriceTo,
    setContractNum,
    setContractDateFrom,
    setContractDateTo,
    setContractPriceFrom,
    setContractPriceTo,
    setContractContractor,
  };

  return [filters, filterSetters];
};

export default useFilters;

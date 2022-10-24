import { useDebounce } from "ahooks";
import moment from "moment";
import { useMemo, useState } from "react";

const useFilters = () => {
  const [year, setYear] = useState(() => moment().year());
  const [name, setName] = useState("");
  const [status, setStatus] = useState(undefined);
  const debouncedName = useDebounce(name, { wait: 900 });
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [categories, setCategories] = useState([]);
  const [tenderTypes, setTenderTypes] = useState([]);
  const [branches, setBranches] = useState([]);
  const [okpds, setOkpds] = useState([]);
  const [okpdSearchValueReal, setOkpdSearchValueReal] = useState("");
  const debouncedOkpdSearchValueReal = useDebounce(okpdSearchValueReal, {
    wait: 900,
  });
  const [users, setUsers] = useState([]);
  const [initiators, setInitiators] = useState([]);

  const [tenderStatuses, setTenderStatuses] = useState([]);
  const [tenderNum, setTenderNum] = useState("");
  const debouncedTenderNum = useDebounce(tenderNum, { wait: 900 });
  const [smp, setSmp] = useState(undefined);
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
      year,
      nameReal: name,
      name: debouncedName,
      status,
      dateFrom,
      dateTo,
      categories,
      tenderTypes,
      branches,
      okpds,
      okpdSearchValueReal,
      debouncedOkpdSearchValueReal,
      users,
      initiators,
      tenderStatuses,
      tenderNumReal: tenderNum,
      tenderNum: debouncedTenderNum,
      smp,
      tenderPriceFromReal: tenderPriceFrom,
      tenderPriceFrom: debouncedTenderPriceFrom,
      tenderPriceToReal: tenderPriceTo,
      tenderPriceTo: debouncedTenderPriceTo,
      contractNumReal: contractNum,
      contractNum: debouncedContractNum,
      contractDateFrom,
      contractDateTo,
      contractPriceFromReal: contractPriceFrom,
      contractPriceFrom: debouncedContractPriceFrom,
      contractPriceToReal: contractPriceTo,
      contractPriceTo: debouncedContractPriceTo,
      contractContractorReal: contractContractor,
      contractContractor: debouncedContractContractor,
    }),
    [
      year,
      name,
      debouncedName,
      status,
      dateFrom,
      dateTo,
      categories,
      tenderTypes,
      branches,
      okpds,
      okpdSearchValueReal,
      debouncedOkpdSearchValueReal,
      users,
      initiators,
      tenderStatuses,
      tenderNum,
      debouncedTenderNum,
      smp,
      tenderPriceFrom,
      debouncedTenderPriceFrom,
      tenderPriceTo,
      debouncedTenderPriceTo,
      contractNum,
      debouncedContractNum,
      contractDateFrom,
      contractDateTo,
      contractPriceFrom,
      debouncedContractPriceFrom,
      contractPriceTo,
      debouncedContractPriceTo,
      contractContractor,
      debouncedContractContractor,
    ]
  );

  const filterSetters = {
    setYear,
    setName,
    setStatus,
    setDateFrom,
    setDateTo,
    setCategories,
    setTenderTypes,
    setBranches,
    setOkpds,
    setOkpdSearchValueReal,
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

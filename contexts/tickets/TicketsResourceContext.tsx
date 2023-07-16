import { TenderStatus } from "@config/constants/tender";
import useTicketInfiniteListResource from "@hooks/apis/resources/useTicketListResource";
import { useDebounce } from "ahooks";
import type { Dayjs } from "dayjs";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TicketsResourceContextInterface {
  resource?: ReturnType<typeof useTicketInfiniteListResource>;
  ticketName: string;
  setTicketName?: Dispatch<SetStateAction<string>>;
  categoryName: string;
  setCategoryName?: Dispatch<SetStateAction<string>>;
  dateAfter: Dayjs | null;
  setDateAfter?: Dispatch<SetStateAction<Dayjs | null>>;
  dateBefore: Dayjs | null;
  setDateBefore?: Dispatch<SetStateAction<Dayjs | null>>;
  status?: boolean;
  setStatus?: Dispatch<SetStateAction<boolean | undefined>>;
  users: number[];
  setUsers?: Dispatch<SetStateAction<number[]>>;
  year?: number;
  setYear?: Dispatch<SetStateAction<number | undefined>>;
  initiators: number[];
  setInitiators?: Dispatch<SetStateAction<number[]>>;
  filials: number[];
  setFilials?: Dispatch<SetStateAction<number[]>>;
  tenderStatuses: TenderStatus[];
  setTenderStatuses?: Dispatch<SetStateAction<TenderStatus[]>>;
  tenderTypes: number[];
  setTenderTypes?: Dispatch<SetStateAction<number[]>>;
  tenderNum: string;
  setTenderNum?: Dispatch<SetStateAction<string>>;
  nmckFrom: string | null;
  setNmckFrom?: Dispatch<SetStateAction<string | null>>;
  nmckTo: string | null;
  setNmckTo?: Dispatch<SetStateAction<string | null>>;
  okpd: string;
  setOkpd?: Dispatch<SetStateAction<string>>;
  contractNum: string;
  setContractNum?: Dispatch<SetStateAction<string>>;
  contractDateAfter: Dayjs | null;
  setContractDateAfter?: Dispatch<SetStateAction<Dayjs | null>>;
  contractDateBefore: Dayjs | null;
  setContractDateBefore?: Dispatch<SetStateAction<Dayjs | null>>;
  contractPriceFrom: string | null;
  setContractPriceFrom?: Dispatch<SetStateAction<string | null>>;
  contractPriceTo: string | null;
  setContractPriceTo?: Dispatch<SetStateAction<string | null>>;
  kontragent: string;
  setKontragent?: Dispatch<SetStateAction<string>>;
}
const TicketsResourceContext = createContext<TicketsResourceContextInterface>({
  ticketName: "",
  categoryName: "",
  dateAfter: null,
  dateBefore: null,
  users: [],
  initiators: [],
  filials: [],
  tenderStatuses: [],
  tenderTypes: [],
  tenderNum: "",
  nmckFrom: null,
  nmckTo: null,
  okpd: "",
  contractNum: "",
  contractDateAfter: null,
  contractDateBefore: null,
  contractPriceFrom: null,
  contractPriceTo: null,
  kontragent: "",
});

interface TicketsResourceProviderProps {
  children: React.ReactNode;
}

const TicketsResourceProvider: React.FC<TicketsResourceProviderProps> = ({
  children,
}) => {
  const [ticketName, setTicketName] = useState<string>("");
  const [categoryName, setCategoryName] = useState<string>("");
  const [dateAfter, setDateAfter] = useState<Dayjs | null>(null);
  const [dateBefore, setDateBefore] = useState<Dayjs | null>(null);
  const [status, setStatus] = useState<boolean>();
  const [users, setUsers] = useState<number[]>([]);
  const [year, setYear] = useState<number>();
  const [initiators, setInitiators] = useState<number[]>([]);
  const [filials, setFilials] = useState<number[]>([]);
  const [tenderStatuses, setTenderStatuses] = useState<TenderStatus[]>([]);
  const [tenderTypes, setTenderTypes] = useState<number[]>([]);
  const [tenderNum, setTenderNum] = useState<string>("");
  const [nmckFrom, setNmckFrom] = useState<string | null>(null);
  const [nmckTo, setNmckTo] = useState<string | null>(null);
  const [okpd, setOkpd] = useState<string>("");
  const [contractNum, setContractNum] = useState<string>("");
  const [contractDateAfter, setContractDateAfter] = useState<Dayjs | null>(
    null
  );
  const [contractDateBefore, setContractDateBefore] = useState<Dayjs | null>(
    null
  );
  const [contractPriceFrom, setContractPriceFrom] = useState<string | null>(
    null
  );
  const [contractPriceTo, setContractPriceTo] = useState<string | null>(null);
  const [kontragent, setKontragent] = useState<string>("");

  const debouncedTicketName = useDebounce(ticketName, { wait: 500 });
  const debouncedCategoryName = useDebounce(categoryName, { wait: 500 });
  const debouncedTenderNum = useDebounce(tenderNum, { wait: 500 });
  const debouncedNmckFrom = useDebounce(nmckFrom, { wait: 500 });
  const debouncedNmckTo = useDebounce(nmckTo, { wait: 500 });
  const debouncedOkpd = useDebounce(okpd, { wait: 500 });
  const debouncedContractNum = useDebounce(contractNum, { wait: 500 });
  const debouncedContractPriceFrom = useDebounce(contractPriceFrom, {
    wait: 500,
  });
  const debouncedContractPriceTo = useDebounce(contractPriceTo, { wait: 500 });
  const debouncedKontragent = useDebounce(kontragent, { wait: 500 });

  const resource = useTicketInfiniteListResource({
    ticketName: debouncedTicketName,
    categoryName: debouncedCategoryName,
    dateAfter,
    dateBefore,
    status,
    users,
    year,
    initiators,
    filials,
    tenderStatuses,
    tenderTypes,
    tenderNum: debouncedTenderNum,
    nmckFrom: debouncedNmckFrom,
    nmckTo: debouncedNmckTo,
    okpd: debouncedOkpd,
    contractNum: debouncedContractNum,
    contractDateAfter,
    contractDateBefore,
    contractPriceFrom: debouncedContractPriceFrom,
    contractPriceTo: debouncedContractPriceTo,
    kontragent: debouncedKontragent,
  });

  const contextValue = {
    resource,
    ticketName,
    setTicketName,
    categoryName,
    setCategoryName,
    dateAfter,
    setDateAfter,
    dateBefore,
    setDateBefore,
    status,
    setStatus,
    users,
    setUsers,
    year,
    setYear,
    initiators,
    setInitiators,
    filials,
    setFilials,
    tenderStatuses,
    setTenderStatuses,
    tenderTypes,
    setTenderTypes,
    tenderNum,
    setTenderNum,
    nmckFrom,
    setNmckFrom,
    nmckTo,
    setNmckTo,
    okpd,
    setOkpd,
    contractNum,
    setContractNum,
    contractDateAfter,
    setContractDateAfter,
    contractDateBefore,
    setContractDateBefore,
    contractPriceFrom,
    setContractPriceFrom,
    contractPriceTo,
    setContractPriceTo,
    kontragent,
    setKontragent,
  };

  return (
    <TicketsResourceContext.Provider value={contextValue}>
      {children}
    </TicketsResourceContext.Provider>
  );
};

export { TicketsResourceContext, TicketsResourceProvider };

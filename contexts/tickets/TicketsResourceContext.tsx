import useTicketInfiniteListResource from "@hooks/apis/resources/useTicketListResource";
import { useDebounce } from "ahooks";
import type { Dayjs } from "dayjs";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TicketsResourceContextInterface {
  resource?: ReturnType<typeof useTicketInfiniteListResource>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
  year?: number;
  setYear?: Dispatch<SetStateAction<number | undefined>>;
  status?: boolean;
  setStatus?: Dispatch<SetStateAction<boolean | undefined>>;
  tenderTypes?: number[];
  setTenderTypes?: Dispatch<SetStateAction<number[]>>;
  dateAfter: Dayjs | null;
  setDateAfter?: Dispatch<SetStateAction<Dayjs | null>>;
  dateBefore: Dayjs | null;
  setDateBefore?: Dispatch<SetStateAction<Dayjs | null>>;
}
const TicketsResourceContext = createContext<TicketsResourceContextInterface>({
  dateAfter: null,
  dateBefore: null,
});

interface TicketsResourceProviderProps {
  children: React.ReactNode;
}

const TicketsResourceProvider: React.FC<TicketsResourceProviderProps> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [year, setYear] = useState<number>();
  const [status, setStatus] = useState<boolean>();
  const [tenderTypes, setTenderTypes] = useState<number[]>([]);
  const [dateAfter, setDateAfter] = useState<Dayjs | null>(null);
  const [dateBefore, setDateBefore] = useState<Dayjs | null>(null);

  const debouncedSearch = useDebounce(searchInput, { wait: 500 });
  const resource = useTicketInfiniteListResource({
    search: debouncedSearch,
    year,
    status,
    tenderTypes,
    dateAfter,
    dateBefore,
  });

  const contextValue = {
    resource,
    searchInput,
    setSearchInput,
    year,
    setYear,
    status,
    setStatus,
    tenderTypes,
    setTenderTypes,
    dateAfter,
    setDateAfter,
    dateBefore,
    setDateBefore,
  };

  return (
    <TicketsResourceContext.Provider value={contextValue}>
      {children}
    </TicketsResourceContext.Provider>
  );
};

export { TicketsResourceProvider, TicketsResourceContext };

import useTicketInfiniteListResource from "@hooks/apis/resources/useTicketListResource";
import { useDebounce } from "ahooks";
import moment from "moment";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface TicketsResourceContextInterface {
  resource?: ReturnType<typeof useTicketInfiniteListResource>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
  year?: number;
  setYear?: Dispatch<SetStateAction<number>>;
}
const TicketsResourceContext = createContext<TicketsResourceContextInterface>(
  {}
);

interface TicketsResourceProviderProps {
  children: React.ReactNode;
}

const TicketsResourceProvider: React.FC<TicketsResourceProviderProps> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [year, setYear] = useState(() => moment().year());
  const debouncedSearch = useDebounce(searchInput, { wait: 500 });
  const resource = useTicketInfiniteListResource({
    search: debouncedSearch,
    year,
  });

  const contextValue = {
    resource,
    searchInput,
    setSearchInput,
    year,
    setYear,
  };

  return (
    <TicketsResourceContext.Provider value={contextValue}>
      {children}
    </TicketsResourceContext.Provider>
  );
};

export { TicketsResourceProvider, TicketsResourceContext };

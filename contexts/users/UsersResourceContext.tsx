import useUserInfiniteListResource from "@hooks/apis/resources/useUserListResource";
import { useDebounce } from "ahooks";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface UsersResourceContextInterface {
  resource?: ReturnType<typeof useUserInfiniteListResource>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
  role?: number;
  setRole?: Dispatch<SetStateAction<number | undefined>>;
  status?: boolean;
  setStatus?: Dispatch<SetStateAction<boolean | undefined>>;
}
const UsersResourceContext = createContext<UsersResourceContextInterface>({});

interface UsersResourceProviderProps {
  children: React.ReactNode;
}

const UsersResourceProvider: React.FC<UsersResourceProviderProps> = ({
  children,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const debouncedSearch = useDebounce(searchInput, { wait: 500 });

  const [role, setRole] = useState<number>();
  const [status, setStatus] = useState<boolean>();
  const resource = useUserInfiniteListResource({
    search: debouncedSearch,
    role,
    status,
  });

  const contextValue = {
    resource,
    searchInput,
    setSearchInput,
    role,
    setRole,
    status,
    setStatus,
  };

  return (
    <UsersResourceContext.Provider value={contextValue}>
      {children}
    </UsersResourceContext.Provider>
  );
};

export { UsersResourceProvider, UsersResourceContext };

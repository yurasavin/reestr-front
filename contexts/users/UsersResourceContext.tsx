import useUserInfiniteListResource from "@hooks/apis/resources/useUserListResource";
import { useDebounce } from "ahooks";
import { createContext, Dispatch, SetStateAction, useState } from "react";

interface UsersResourceContextInterface {
  resource?: ReturnType<typeof useUserInfiniteListResource>;
  searchInput?: string;
  setSearchInput?: Dispatch<SetStateAction<string>>;
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
  const resource = useUserInfiniteListResource(debouncedSearch);

  const contextValue = {
    resource,
    searchInput,
    setSearchInput,
  };

  return (
    <UsersResourceContext.Provider value={contextValue}>
      {children}
    </UsersResourceContext.Provider>
  );
};

export { UsersResourceProvider, UsersResourceContext };

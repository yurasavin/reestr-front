import useUserInfiniteListResource from "@hooks/apis/resources/useUserListResource";
import { createContext } from "react";

const UsersResourceContext = createContext<ReturnType<
  typeof useUserInfiniteListResource
> | null>(null);

interface UsersResourceProviderProps {
  children: React.ReactNode;
}

const UsersResourceProvider: React.FC<UsersResourceProviderProps> = ({
  children,
}) => {
  const contextValue = useUserInfiniteListResource();

  return (
    <UsersResourceContext.Provider value={contextValue}>
      {children}
    </UsersResourceContext.Provider>
  );
};

export { UsersResourceProvider, UsersResourceContext };

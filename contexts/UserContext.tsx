import useUser, { UseUserResult } from "@hooks/apis/useUser";
import React, { createContext } from "react";

const UserContext = createContext<UseUserResult>({
  user: null,
  setUser: null,
  isMutating: true,
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const contextValue = useUser();

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };

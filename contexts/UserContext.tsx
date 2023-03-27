import useUser, { UseUserResult } from "@hooks/apis/useUser";
import { createContext } from "react";

const UserContext = createContext<UseUserResult>({
  user: null,
  setUser: () => {},
  authToken: undefined,
  setAuthToken: () => {
    throw Error("setAuthToken is not implemented");
  },
  isMutating: true,
  onAuthError: () => {
    throw Error("onAuthError is not implemented");
  },
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

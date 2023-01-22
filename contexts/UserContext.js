import useResource from "hooks/apis/useResource";
import { createContext, useEffect, useMemo, useState } from "react";

export const UserContext = createContext({ user: null, setUser: () => {} });

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { data: response, error } = useResource("users/me/", {
    revalidateOnFocus: false,
  });
  const contextValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  useEffect(() => {
    if (error) {
      console.log("error is", error);
      setUser(null);
    } else if (!response) {
      console.log("no response", response);
      setUser(null);
    } else {
      console.log("get response", response);
      setUser(response.data);
    }
  }, [response, error]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

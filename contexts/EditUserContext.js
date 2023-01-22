import { createContext, useMemo, useState } from "react";

export const EditUserContext = createContext();

export const EditUserProvider = ({ children }) => {
  const [editUser, setEditUser] = useState(null);
  const contextValue = useMemo(
    () => ({ editUser, setEditUser }),
    [editUser, setEditUser]
  );

  return (
    <EditUserContext.Provider value={contextValue}>
      {children}
    </EditUserContext.Provider>
  );
};

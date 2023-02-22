import { SiderCollapsed } from "@helpers/getSiderCollapsedCookie";
import React, { createContext } from "react";

const SiderCollapsedContext = createContext<SiderCollapsed>(
  SiderCollapsed.False
);

interface SiderCollapsedProviderProps {
  children: React.ReactNode;
  value: SiderCollapsed;
}

const SiderCollapsedProvider: React.FC<SiderCollapsedProviderProps> = ({
  children,
}) => {
  const contextValue = SiderCollapsed.False;

  return (
    <SiderCollapsedContext.Provider value={contextValue}>
      {children}
    </SiderCollapsedContext.Provider>
  );
};

export { SiderCollapsedProvider, SiderCollapsedContext };

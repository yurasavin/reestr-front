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
  value,
}) => {
  return (
    <SiderCollapsedContext.Provider value={value}>
      {children}
    </SiderCollapsedContext.Provider>
  );
};

export { SiderCollapsedProvider, SiderCollapsedContext };

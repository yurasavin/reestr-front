import { Layout } from "antd";

import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SiteSider from "./SiteSider";

const SiteLayout = ({ children, siderCollapsed }) => {
  return (
    <Layout
      hasSider
      style={{
        minHeight: "100vh",
      }}
    >
      <SiteSider siderCollapsed={siderCollapsed} />
      <Layout>
        <SiteHeader />
        <Layout.Content
          style={{
            overflow: "auto",
            height: "86vh",
            padding: 15,
          }}
        >
          {children}
        </Layout.Content>
        <SiteFooter />
      </Layout>
    </Layout>
  );
};

export default SiteLayout;

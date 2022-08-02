import { Layout } from "antd";
import { useRouter } from "next/router";
import React from "react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import SiteSider from "./SiteSider";

const SiteLayout = ({ children }) => {
  const router = useRouter();
  const isLoginPage = router.asPath === "/login";

  return isLoginPage ? (
    children
  ) : (
    <Layout
      hasSider
      style={{
        minHeight: "100vh",
      }}
    >
      <SiteSider />
      <Layout className="site-layout">
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

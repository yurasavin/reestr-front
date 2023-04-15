import { Layout } from "antd";

import SiteHeader from "../SiteHeader";
import SiteSider from "../SiteSider";
import styles from "./SiteLayout.module.css";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <Layout hasSider className={styles.layout}>
      <SiteSider />
      <Layout>
        <SiteHeader />
        <Layout.Content className={styles.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default SiteLayout;

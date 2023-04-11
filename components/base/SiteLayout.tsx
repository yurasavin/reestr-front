import { Layout } from "antd";

import SiteHeader from "./SiteHeader";
import styles from "./SiteLayout.module.css";
import SiteSider from "./SiteSider";

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

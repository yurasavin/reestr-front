import { Layout } from "antd";

import SiteSider from "../SiteSider/SiteSider";
import styles from "./SiteLayout.module.css";

interface SiteLayoutProps {
  children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <Layout hasSider className={styles.layout}>
      <SiteSider />
      <Layout>
        <Layout.Content className={styles.content}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};

export default SiteLayout;

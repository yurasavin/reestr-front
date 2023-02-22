import { Layout } from "antd";
import styles from "./SiteHeader.module.css";

const SiteHeader = () => {
  return (
    <Layout.Header className={styles.header}>
      Реестр Закупок ГБУ РО &quot;КВД&quot;
    </Layout.Header>
  );
};
export default SiteHeader;

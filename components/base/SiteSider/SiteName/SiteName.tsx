import { SiderCollapsed } from "@helpers/getSiderCollapsedCookie";
import styles from "./SiteName.module.css";

interface SiteNameProps {
  collapsed?: string;
}

const SiteName: React.FC<SiteNameProps> = ({ collapsed }) => {
  const className =
    collapsed === SiderCollapsed.True
      ? styles.containerHidden
      : styles.containerDisplay;

  return <div className={className}>ГБУ РО &quot;КВД&quot;</div>;
};

export default SiteName;

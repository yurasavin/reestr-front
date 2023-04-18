import { Skeleton } from "antd";
import styles from "./TicketListItemSkeleton.module.css";

const TicketListItemSkeleton: React.FC = () => {
  return (
    <Skeleton
      active
      title={{ width: 800 }}
      className={styles.skeleton}
      paragraph={{
        rows: 2,
      }}
    />
  );
};

export default TicketListItemSkeleton;

import { Skeleton } from "antd";
import styles from "./UsersListSkeleton.module.css";

const UsersListSkeleton: React.FC = () => {
  return (
    <Skeleton
      avatar={{ size: 120, shape: "square" }}
      active
      title={false}
      paragraph={{ rows: 4, width: [200, 220, 185, 200] }}
      className={styles.skeleton}
    />
  );
};

export default UsersListSkeleton;

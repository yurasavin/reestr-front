import { Space } from "antd";
import React from "react";
import styles from "./Filters.module.css";

interface FiltersProps {
  align?: "start" | "end" | "center" | "baseline";
  children?: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({ align = "start", children }) => {
  return (
    <Space
      className={styles.filters}
      align={align}
      wrap
      style={{ columnGap: 25 }}
    >
      {children}
    </Space>
  );
};

export default Filters;

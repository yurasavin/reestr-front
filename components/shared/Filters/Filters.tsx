import { Space } from "antd";
import React from "react";
import styles from "./Filters.module.css";

interface FiltersProps {
  align?: "start" | "end" | "center" | "baseline";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Filters: React.FC<FiltersProps> = ({
  align = "start",
  children,
  style,
}) => {
  return (
    <Space
      className={styles.filters}
      align={align}
      wrap
      style={{ columnGap: 25, ...style }}
    >
      {children}
    </Space>
  );
};

export default Filters;

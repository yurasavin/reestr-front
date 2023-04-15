import React from "react";
import styles from "./FilterItem.module.css";

interface FilterItemProps {
  title: string;
  children: React.ReactNode;
}

const FilterItem: React.FC<FilterItemProps> = ({ title, children }) => {
  return (
    <>
      <span className={styles.title}>{title}</span>
      {children}
    </>
  );
};

export default FilterItem;

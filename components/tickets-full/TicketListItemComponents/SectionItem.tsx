import React from "react";
import styles from "./SectionItem.module.css";

interface SectionItemProps {
  title: string;
  children: React.ReactNode;
}

const SectionItem: React.FC<SectionItemProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}:</span>
      <span className={styles.content}>{children}</span>
    </div>
  );
};

export default SectionItem;

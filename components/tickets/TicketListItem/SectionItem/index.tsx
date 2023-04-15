import React from "react";
import styles from "./SectionItem.module.css";

interface SectionItemProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}

const SectionItem: React.FC<SectionItemProps> = ({ title, children, icon }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>
        <span className={styles.icon}>{icon}</span>
        {title}:
      </span>
      <span className={styles.content}>{children}</span>
    </div>
  );
};

export default SectionItem;

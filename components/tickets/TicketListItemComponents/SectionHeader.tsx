import React from "react";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text }) => {
  return <div className={styles.container}>{text.toUpperCase()}</div>;
};

export default SectionHeader;

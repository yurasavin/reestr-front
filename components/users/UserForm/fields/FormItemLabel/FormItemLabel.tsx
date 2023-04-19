import React from "react";
import styles from "./FormItemLabel.module.css";

interface FormItemLabelProps {
  text: string;
  icon: React.ReactNode;
}

const FormItemLabel: React.FC<FormItemLabelProps> = ({ text, icon }) => {
  return (
    <span>
      <span className={styles.icon}>{icon}</span>
      {text}
    </span>
  );
};

export default FormItemLabel;

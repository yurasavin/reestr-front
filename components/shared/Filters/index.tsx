import { Space } from "antd";
import React from "react";
import style from "./Filters.module.css";

interface FiltersProps {
  children: React.ReactNode;
}
const Filters: React.FC<FiltersProps> = ({ children }) => {
  return <Space className={style.container}>{children}</Space>;
};

export default Filters;

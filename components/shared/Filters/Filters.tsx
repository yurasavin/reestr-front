import { Space } from "antd";
import React from "react";
import style from "./Filters.module.css";

type JustifySpaceBetween = "justifySpaceBetween";
type JustifyStart = "justifyStart";

interface FiltersProps {
  justify?: JustifySpaceBetween | JustifyStart;
  children: React.ReactNode;
}

const Filters: React.FC<FiltersProps> = ({
  justify = "justifySpaceBetween",
  children,
}) => {
  return <Space className={style[justify]}>{children}</Space>;
};

export default Filters;

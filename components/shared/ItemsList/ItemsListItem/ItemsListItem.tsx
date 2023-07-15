import { List } from "antd";
import React from "react";
import styles from "./ItemsListItem.module.css";

interface ListItemProps {
  children: React.ReactNode;
}

const ItemsListItem: React.FC<ListItemProps> = ({ children }) => {
  return <List.Item className={styles.listItem}>{children}</List.Item>;
};

export default ItemsListItem;

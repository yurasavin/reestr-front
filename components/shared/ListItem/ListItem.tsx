import { List } from "antd";
import React, { MouseEventHandler } from "react";
import styles from "./ListItem.module.css";

interface ListItemProps {
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

const ListItem: React.FC<ListItemProps> = ({ children, onClick }) => {
  return (
    <List.Item className={styles.listItem} onClick={onClick}>
      {children}
    </List.Item>
  );
};

export default ListItem;

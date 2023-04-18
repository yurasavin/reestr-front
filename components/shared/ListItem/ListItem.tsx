import { List } from "antd";
import React, { MouseEventHandler } from "react";
import styles from "./ListItem.module.css";

interface ListItemProps {
  key: string | number;
  children: React.ReactNode;
  onClick: MouseEventHandler;
}

const ListItem: React.FC<ListItemProps> = ({ key, children, onClick }) => {
  return (
    <List.Item key={key} className={styles.listItem} onClick={onClick}>
      {children}
    </List.Item>
  );
};

export default ListItem;

import styles from "./ListItemTitle.module.css";

interface ListItemTitleProps {
  text: string;
}

const ListItemTitle: React.FC<ListItemTitleProps> = ({ text }) => {
  return <div className={styles.title}>{text}</div>;
};

export default ListItemTitle;

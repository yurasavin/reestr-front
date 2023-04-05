import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { MouseEventHandler } from "react";
import styles from "./AddButton.module.css";

type AddButtonProps = {
  onClick: MouseEventHandler<HTMLAnchorElement> &
    MouseEventHandler<HTMLButtonElement>;
};

const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
  return (
    <Button
      shape="round"
      icon={<PlusCircleOutlined style={{ height: 14 }} />}
      size="small"
      className={styles.button}
      onClick={onClick}
    >
      Добавить
    </Button>
  );
};

export default AddButton;

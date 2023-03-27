import { PlusOutlined } from "@ant-design/icons";
import { FloatButton, FloatButtonProps } from "antd";
import styles from "./StyledFloatButton.module.css";

type StyledFloatButtonProps = FloatButtonProps &
  React.RefAttributes<HTMLAnchorElement | HTMLButtonElement>;

const StyledFloatButton: React.FC<StyledFloatButtonProps> = (props) => {
  return (
    <FloatButton
      className={styles.button}
      icon={<PlusOutlined />}
      type="primary"
      {...props}
    />
  );
};

export default StyledFloatButton;

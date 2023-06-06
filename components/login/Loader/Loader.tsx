import { LoadingOutlined } from "@ant-design/icons";
import BluredLayout from "@components/shared/BluredLayout/BluredLayout";
import { Spin } from "antd";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <BluredLayout>
      Загрузка...
      <Spin indicator={<LoadingOutlined className={styles.spinner} spin />} />
    </BluredLayout>
  );
};

export default Loader;

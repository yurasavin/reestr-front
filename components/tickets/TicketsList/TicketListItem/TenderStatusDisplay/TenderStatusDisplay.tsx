import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { TenderStatus, TenderStatusDispalay } from "@config/constants/tender";
import { Space } from "antd";
import React from "react";
import styles from "./TenderStatusDisplay.module.css";

interface TenderStatusDisplayProps {
  status: TenderStatus;
}

const TenderStatusDisplay: React.FC<TenderStatusDisplayProps> = ({
  status,
}) => {
  const title = TenderStatusDispalay[status];
  let icon: React.ReactNode;

  switch (status) {
    case TenderStatus.InProcess:
      icon = <ClockCircleOutlined className={styles.iconProcess} />;
      break;
    case TenderStatus.Cancelled:
      icon = <MinusCircleOutlined className={styles.iconCancelled} />;
      break;
    case TenderStatus.NotHappen:
      icon = <ExclamationCircleOutlined className={styles.iconNotHappen} />;
      break;
    case TenderStatus.Finished:
      icon = <CheckCircleOutlined className={styles.iconFinished} />;
      break;
  }

  return (
    <Space size={8}>
      {title}
      {icon}
    </Space>
  );
};

export default TenderStatusDisplay;

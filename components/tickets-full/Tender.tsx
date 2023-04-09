import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { TenderStatusDispalay } from "@config/constants/tender";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space } from "antd";
import Price from "../shared/Price";
import AddButton from "./AddButton";
import styles from "./Tender.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";

interface TenderProps {
  tender: TicketData["tender"];
}

const Tender: React.FC<TenderProps> = ({ tender }) => {
  return (
    <Space direction="vertical" className={styles.container} size={0}>
      <SectionHeader text="Закупка" />
      {tender ? (
        <>
          <SectionItem title="Статус">
            <Space size={8}>
              {TenderStatusDispalay[tender.status]}

              {
                {
                  1: <ClockCircleOutlined className={styles.iconProcess} />,
                  2: <CheckCircleOutlined className={styles.iconFinished} />,
                  3: <InfoCircleOutlined className={styles.iconNotHappen} />,
                  4: <CloseCircleOutlined className={styles.iconCancelled} />,
                }[tender.status]
              }
            </Space>
          </SectionItem>
          <SectionItem title="Номер">{tender.num}</SectionItem>
          <SectionItem title="СМП">{tender.smp ? "Да" : "Нет"}</SectionItem>
          <SectionItem title="НМЦК">
            <Price priceStr={tender.price} />
          </SectionItem>
        </>
      ) : (
        <AddButton onClick={() => alert("under construction")} />
      )}
    </Space>
  );
};
export default Tender;

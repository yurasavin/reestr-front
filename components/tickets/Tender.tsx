import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Space } from "antd";
import Link from "next/link";
import Price from "../shared/Price";
import styles from "./Tender.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";

const Tender = ({ tender, filterSetters }) => {
  const iconStyles = {
    borderRadius: 10,
    fontSize: 16,
  };
  return (
    <Space direction="vertical" className={styles.container} size={0}>
      <SectionHeader text="Закупка" />
      {tender ? (
        <>
          <SectionItem title="Статус">
            <Space size={8}>
              {
                {
                  1: "Осуществляется",
                  2: "Завершена",
                  3: "Не состоялась",
                  4: "Отменена",
                }[tender.status]
              }

              {
                {
                  1: (
                    <ClockCircleOutlined
                      style={{
                        ...iconStyles,
                        color: "rgb(141 55 228)",
                        background: "rgb(240 236 245)",
                      }}
                    />
                  ),
                  2: (
                    <CheckCircleOutlined
                      style={{
                        ...iconStyles,
                        color: "#389e0d",
                        background: "rgb(232 245 219)",
                      }}
                    />
                  ),
                  3: (
                    <InfoCircleOutlined
                      style={{
                        ...iconStyles,
                        color: "rgb(244 105 14)",
                        background: "rgb(255 226 207)",
                      }}
                    />
                  ),
                  4: (
                    <CloseCircleOutlined
                      style={{
                        ...iconStyles,
                        color: "rgb(245 10 10)",
                        background: "rgb(255 226 226)",
                      }}
                    />
                  ),
                }[tender.status]
              }
            </Space>
          </SectionItem>
          <SectionItem title="Номер">{tender.num}</SectionItem>
          <SectionItem title="СМП">{tender.smp ? "Да" : "Нет"}</SectionItem>
          <SectionItem title="НМЦК">
            <Price price={tender.price} />
          </SectionItem>
        </>
      ) : (
        <Link href="/" className={styles.addButton}>
          <Button
            shape="round"
            icon={<PlusCircleOutlined style={{ height: 14 }} />}
            size="small"
            className={styles.hover}
            style={{
              color: "white",
              background: "rgb(4 84 231)",
              height: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            Добавить
          </Button>
        </Link>
      )}
    </Space>
  );
};
export default Tender;

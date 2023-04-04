import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Link from "next/link";
import { formatDateString } from "../../helpers/formatDateString";
import Price from "../shared/Price";
import styles from "./Contract.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";

const Contract = ({ contract, filterSetters }) => {
  return (
    <Space direction="vertical" wrap className={styles.container} size={0}>
      <SectionHeader text="Контракт" />
      {contract ? (
        <>
          <SectionItem title="Номер">{contract.num}</SectionItem>
          <SectionItem title="Дата">
            {formatDateString(contract.date)}
          </SectionItem>
          <SectionItem title="Сумма">
            <Price price={contract.price} />
          </SectionItem>
          <SectionItem title="Контрагент">{contract.kontragent}</SectionItem>
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

export default Contract;

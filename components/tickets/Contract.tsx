import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space } from "antd";
import { formatDateString } from "../../helpers/formatDateString";
import Price from "../shared/Price";
import AddButton from "./AddButton";
import styles from "./Contract.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";

interface ContractProps {
  contract: TicketData["contract"];
}

const Contract: React.FC<ContractProps> = ({ contract }) => {
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
            <Price priceStr={contract.price} />
          </SectionItem>
          <SectionItem title="Контрагент">{contract.kontragent}</SectionItem>
        </>
      ) : (
        <AddButton onClick={() => alert("under construction")} />
      )}
    </Space>
  );
};

export default Contract;

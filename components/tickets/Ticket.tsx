import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space, Tooltip } from "antd";
import { formatDateString } from "../../helpers/formatDateString";
import styles from "./Ticket.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";
import TicketStatus from "./TicketStatus";

interface TicketProps {
  ticket: TicketData;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <Space direction="vertical" size={0} className={styles.container}>
      <SectionHeader text="Заявка" />
      <Space className={styles.spaceBetween}>
        <SectionItem title="Статус">
          <TicketStatus status={ticket.status} />
        </SectionItem>
        <SectionItem title="Дата">{formatDateString(ticket.date)}</SectionItem>
      </Space>
      <Space className={styles.spaceBetween}>
        <SectionItem title="Филиал">{ticket.filial.name}</SectionItem>
        <SectionItem title="ОКПД2">
          <Tooltip title={ticket.okpd2?.name}>{ticket.okpd2?.code}</Tooltip>
        </SectionItem>
      </Space>
      <Space className={styles.spaceBetween}>
        <SectionItem title="Ответственный">
          {ticket.user?.last_name}
        </SectionItem>
        <SectionItem title="Инициатор">{ticket.initiator.name}</SectionItem>
      </Space>
      <SectionItem title="Способ закупки">
        {ticket.tender_type.label}
      </SectionItem>
      <SectionItem title="Категория">{ticket.tag?.name}</SectionItem>
    </Space>
  );
};

export default Ticket;

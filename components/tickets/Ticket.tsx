import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Space, Tooltip } from "antd";
import { formatDateString } from "../../helpers/formatDateString";
import styles from "./Ticket.module.css";
import SectionHeader from "./TicketListItemComponents/SectionHeader";
import SectionItem from "./TicketListItemComponents/SectionItem";

const TicketStatus = ({ status, filterSetters }) => {
  const title = status ? "В работе" : "Завершена";
  const style = {
    color: status ? "rgb(141 55 228)" : "#389e0d",
    background: status ? "rgb(240 236 245)" : "rgb(232 245 219)",
    borderRadius: 10,
    fontSize: 16,
    cursor: "pointer",
  };
  const onClick = () => filterSetters.setStatus(status);

  return (
    <Space size={8}>
      {title}
      {status ? (
        <ClockCircleOutlined onClick={onClick} style={style} />
      ) : (
        <CheckCircleOutlined onClick={onClick} style={style} />
      )}
    </Space>
  );
};

const Ticket = ({ ticket, filterSetters }) => {
  return (
    <Space direction="vertical" size={0} className={styles.container}>
      <SectionHeader text="Заявка" />
      <Space className={styles.spaceBetween}>
        <SectionItem title="Статус">
          <TicketStatus status={ticket.status} filterSetters={filterSetters} />
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
        <SectionItem title="Ответственный">{ticket.user.last_name}</SectionItem>
        <SectionItem title="Инициатор">{ticket.initiator.name}</SectionItem>
      </Space>
      <SectionItem title="Способ закупки">
        {ticket.tender_type.label}
      </SectionItem>
      <SectionItem title="Категория">{ticket.tag.name}</SectionItem>
    </Space>
  );
};

export default Ticket;

import {
  AuditOutlined,
  CalendarOutlined,
  FileProtectOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  TableOutlined,
  TagOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space, Tooltip } from "antd";
import { formatDateString } from "../../../helpers/formatDateString";
import SectionItem from "../TicketListItem/SectionItem/SectionItem";
import TicketStatus from "../TicketStatus/TicketStatus";
import styles from "./Ticket.module.css";

interface TicketProps {
  ticket: TicketData;
}

const Ticket: React.FC<TicketProps> = ({ ticket }) => {
  return (
    <div className={styles.container}>
      <Space direction="vertical" size={0} className={styles.firstCol}>
        <SectionItem title="Статус" icon={<InfoCircleOutlined />}>
          <TicketStatus status={ticket.status} />
        </SectionItem>
        <SectionItem title="Дата" icon={<CalendarOutlined />}>
          {formatDateString(ticket.date)}
        </SectionItem>
        <SectionItem title="Ответственный" icon={<UserOutlined />}>
          {ticket.user?.last_name}
        </SectionItem>
      </Space>
      <Space direction="vertical" size={0} className={styles.secondCol}>
        <SectionItem title="Филиал" icon={<HomeOutlined />}>
          {ticket.filial.name}
        </SectionItem>
        <SectionItem title="Инициатор" icon={<AuditOutlined />}>
          {ticket.initiator.name}
        </SectionItem>
        <SectionItem title="Способ закупки" icon={<FileProtectOutlined />}>
          {ticket.tender_type.label}
        </SectionItem>
      </Space>
      <Space direction="vertical" size={0}>
        <SectionItem title="ОКПД2" icon={<TableOutlined />}>
          <Tooltip title={ticket.okpd2?.name}>{ticket.okpd2?.code}</Tooltip>
        </SectionItem>
        <SectionItem title="Категория" icon={<TagOutlined />}>
          {ticket.category?.name}
        </SectionItem>
        <SectionItem title="Лимиты" icon={<PieChartOutlined />}>
          {ticket.limits.map((limit) => limit.year).join(", ")}
        </SectionItem>
      </Space>
    </div>
  );
};

export default Ticket;

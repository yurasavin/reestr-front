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
import ListItem from "@components/shared/ListItem/ListItem";
import ListItemTitle from "@components/shared/ListItem/ListItemTitle/ListItemTitle";
import { formatDateString } from "@helpers/formatDateString";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space, Tooltip } from "antd";
import SectionItem from "./SectionItem/SectionItem";
import styles from "./TicketListItem.module.css";
import TicketStatus from "./TicketStatus/TicketStatus";

interface TicketListItemProps {
  ticket: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  return (
    <ListItem onClick={() => alert("under development...")}>
      <ListItemTitle text={ticket.name} />
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
    </ListItem>
  );
};

export default TicketListItem;

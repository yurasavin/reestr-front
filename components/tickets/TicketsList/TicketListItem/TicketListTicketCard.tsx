import {
  AuditOutlined,
  HomeOutlined,
  PieChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import SectionItem from "@components/shared/ItemsList/ItemsListItem/SectionItem/SectionItem";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Card } from "antd";
import TicketStatus from "./TicketStatus/TicketStatus";

interface TicketListTicketCardProps {
  ticket: TicketData;
}

const TicketListTicketCard: React.FC<TicketListTicketCardProps> = ({
  ticket,
}) => {
  return (
    <Card
      title="ЗАЯВКА"
      type="inner"
      size="small"
      style={{ width: "100%", minHeight: 165 }}
      extra={<TicketStatus status={ticket.status} />}
    >
      <SectionItem title="Ответственный" icon={<UserOutlined />}>
        {ticket.user_last_name}
      </SectionItem>
      <SectionItem title="Лимиты" icon={<PieChartOutlined />}>
        {ticket.limits_years.join(", ")}
      </SectionItem>
      <SectionItem title="Инициатор" icon={<AuditOutlined />}>
        {ticket.initiator_name}
      </SectionItem>
      <SectionItem title="Филиал" icon={<HomeOutlined />}>
        {ticket.filial_name}
      </SectionItem>
    </Card>
  );
};

export default TicketListTicketCard;

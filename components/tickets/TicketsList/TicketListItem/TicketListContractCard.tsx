import { InfoCircleOutlined } from "@ant-design/icons";
import SectionItem from "@components/shared/ItemsList/ItemsListItem/SectionItem/SectionItem";
import Price from "@components/shared/Price";
import { formatDateString } from "@helpers/formatDateString";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Card } from "antd";

interface TicketListTenderCardProps {
  ticket: TicketData;
}

const TicketListContractCard: React.FC<TicketListTenderCardProps> = ({
  ticket,
}) => {
  return (
    <Card
      title="КОНТРАКТ"
      type="inner"
      size="small"
      style={{ width: "100%", minHeight: 165 }}
    >
      {ticket.contract && (
        <>
          <SectionItem title="Номер" icon={<InfoCircleOutlined />}>
            {ticket.contract.num}
          </SectionItem>
          <SectionItem title="Дата" icon={<InfoCircleOutlined />}>
            {formatDateString(ticket.contract.date)}
          </SectionItem>
          <SectionItem title="Цена" icon={<InfoCircleOutlined />}>
            <Price priceStr={ticket.contract.price} />
          </SectionItem>
          <SectionItem title="Контрагент" icon={<InfoCircleOutlined />}>
            {ticket.contract.kontragent}
          </SectionItem>
        </>
      )}
    </Card>
  );
};

export default TicketListContractCard;

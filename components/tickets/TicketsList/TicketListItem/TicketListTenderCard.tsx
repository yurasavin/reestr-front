import { NumberOutlined, TableOutlined } from "@ant-design/icons";
import SectionItem from "@components/shared/ItemsList/ItemsListItem/SectionItem/SectionItem";
import Price from "@components/shared/Price";
import SectionItemTenderType from "@components/tickets/TicketsList/TicketListItem/SectionItemTenderType";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Card, Tooltip } from "antd";
import React from "react";
import TenderStatusDisplay from "./TenderStatusDisplay/TenderStatusDisplay";

interface TicketListTenderCardProps {
  ticket: TicketData;
}

const TicketListTenderCard: React.FC<TicketListTenderCardProps> = ({
  ticket,
}) => {
  return (
    <Card
      title="ЗАКУПКА"
      type="inner"
      size="small"
      style={{ width: "100%", minHeight: 165 }}
      extra={
        ticket.tender && <TenderStatusDisplay status={ticket.tender.status} />
      }
    >
      <SectionItemTenderType tenderType={ticket.tender_type} />
      {ticket.tender && (
        <>
          <SectionItem title="Номер извещения" icon={<NumberOutlined />}>
            {ticket.tender.num}
          </SectionItem>
          <SectionItem title="НМЦК" icon={<TableOutlined />}>
            <Price priceStr={ticket.tender.price} />
          </SectionItem>
          {ticket.contract && (
            <SectionItem title="Экономия" icon={<TableOutlined />}>
              <Price priceStr={ticket.tender.economy} />
            </SectionItem>
          )}
        </>
      )}

      {ticket.okpd2 && (
        <SectionItem title="ОКПД2" icon={<TableOutlined />}>
          <Tooltip title={ticket.okpd2?.name}>
            {ticket.okpd2?.code || "-"}
          </Tooltip>
        </SectionItem>
      )}
    </Card>
  );
};

export default TicketListTenderCard;

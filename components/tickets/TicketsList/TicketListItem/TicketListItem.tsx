import { CalendarOutlined, TagOutlined } from "@ant-design/icons";
import ItemsListItem from "@components/shared/ItemsList/ItemsListItem/ItemsListItem";
import ListItemTitle from "@components/shared/ItemsList/ItemsListItem/ListItemTitle/ListItemTitle";
import { formatDateString } from "@helpers/formatDateString";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { Space, Tag } from "antd";

import SectionItem from "@components/shared/ItemsList/ItemsListItem/SectionItem/SectionItem";
import TicketListContractCard from "./TicketListContractCard";
import style from "./TicketListItem.module.css";
import TicketListTenderCard from "./TicketListTenderCard";
import TicketListTicketCard from "./TicketListTicketCard";

interface TicketListItemProps {
  itemData: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({
  itemData: ticket,
}) => {
  return (
    <ItemsListItem>
      <Space direction="vertical" className={style.innerContainer} size={0}>
        <Space align="center" className={style.header}>
          <ListItemTitle text={ticket.name} />
          <Space direction="vertical" align="end" size={5}>
            <Tag icon={<TagOutlined />} className={style.category}>
              {ticket?.category_name}
            </Tag>
            <SectionItem title="Дата" icon={<CalendarOutlined />}>
              {formatDateString(ticket.date)}
            </SectionItem>
          </Space>
        </Space>

        <div style={{ width: "100%", display: "flex", gap: 8 }}>
          <TicketListTicketCard ticket={ticket} />
          <TicketListTenderCard ticket={ticket} />
          <TicketListContractCard ticket={ticket} />
        </div>
      </Space>
    </ItemsListItem>
  );
};

export default TicketListItem;

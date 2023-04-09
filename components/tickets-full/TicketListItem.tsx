import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { List, Space } from "antd";
import Contract from "./Contract";
import Tender from "./Tender";
import Ticket from "./Ticket";
import styles from "./TicketListItem.module.css";

interface TicketListItemProps {
  ticket: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  return (
    <List.Item key={ticket.id} className={styles.listItem}>
      <div className={styles.listItemTitle}>{ticket.name}</div>
      <Space direction="horizontal" align="start" size={50}>
        <Ticket ticket={ticket} />
        <Tender tender={ticket.tender} />
        <Contract contract={ticket.contract} />
      </Space>
    </List.Item>
  );
};

export default TicketListItem;

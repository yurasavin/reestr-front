import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import { List } from "antd";
import Ticket from "../Ticket";
import styles from "./TicketListItem.module.css";

interface TicketListItemProps {
  ticket: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  return (
    <List.Item
      key={ticket.id}
      className={styles.listItem}
      onClick={() => alert("under development...")}
    >
      <div className={styles.listItemTitle}>{ticket.name}</div>
      <Ticket ticket={ticket} />
    </List.Item>
  );
};

export default TicketListItem;

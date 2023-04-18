import ListItem from "@components/shared/ListItem/ListItem";
import { TicketData } from "@hooks/apis/resources/useTicketListResource";
import Ticket from "../Ticket";
import styles from "./TicketListItem.module.css";

interface TicketListItemProps {
  ticket: TicketData;
}

const TicketListItem: React.FC<TicketListItemProps> = ({ ticket }) => {
  return (
    <ListItem key={ticket.id} onClick={() => alert("under development...")}>
      <div className={styles.title}>{ticket.name}</div>
      <Ticket ticket={ticket} />
    </ListItem>
  );
};

export default TicketListItem;

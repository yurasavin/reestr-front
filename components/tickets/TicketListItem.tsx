import { List, Space } from "antd";
import Contract from "./Contract";
import Tender from "./Tender";
import Ticket from "./Ticket";

const TicketListItem = ({ ticket, filterSetters }) => {
  return (
    <List.Item
      key={ticket.id}
      style={{
        border: "1px solid #00000078",
        borderRadius: 5,
        margin: "5px 5px 5px 0",
        padding: "5px 5px 5px 10px",
      }}
    >
      <div>
        <Space>
          <span
            style={{
              fontWeight: 450,
              // color: "rgb(4 84 231)",
              fontSize: 20,
            }}
          >
            {ticket.name.charAt(0).toUpperCase() + ticket.name.slice(1)}
          </span>
        </Space>
      </div>
      <Space direction="horizontal" align="start" size={50}>
        <Ticket ticket={ticket} filterSetters={filterSetters} />
        <Tender tender={ticket.tender} filterSetters={filterSetters} />
        <Contract contract={ticket.contract} filterSetters={filterSetters} />
      </Space>
    </List.Item>
  );
};

export default TicketListItem;

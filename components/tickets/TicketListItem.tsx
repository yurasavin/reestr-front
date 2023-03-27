import { List, Space } from "antd";
import Contract from "./Contract";
import Tender from "./Tender";
import Ticket from "./Ticket";

const TicketListItem = ({ ticket, filterSetters }) => {
  return (
    <List.Item
      key={ticket.id}
      style={{
        border: "1px solid black",
        borderRadius: 15,
        margin: "5px 0",
        padding: "5px 5px 5px 10px",
      }}
    >
      <Space direction="vertical" size={4}>
        <Ticket ticket={ticket} filterSetters={filterSetters} />
        <div style={{ paddingLeft: 50 }}>
          <Tender tender={ticket.tender} filterSetters={filterSetters} />
        </div>
        <div style={{ paddingLeft: 50 }}>
          <Contract contract={ticket.contract} filterSetters={filterSetters} />
        </div>
      </Space>
    </List.Item>
  );
};

export default TicketListItem;

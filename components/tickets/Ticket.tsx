import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Space, Tooltip, Typography } from "antd";
import { formatDateString } from "../../helpers/formatDateString";
import Clickable from "./Clickable";
import RoundedTag from "./RoundedTag";
import TagWithTooltip from "./TagWithTooltip";

const TicketStatus = ({ status, filterSetters }) => {
  const title = status ? "В работе" : "Завершена";
  const style = {
    color: status ? "#096dd9" : "#389e0d",
    background: status ? "#e6f7ff" : "#f6ffed",
    borderRadius: 10,
    fontSize: 20,
    cursor: "pointer",
  };
  const onClick = () => filterSetters.setStatus(status);

  return (
    <Tooltip title={title}>
      {status ? (
        <ClockCircleOutlined onClick={onClick} style={style} />
      ) : (
        <CheckCircleOutlined onClick={onClick} style={style} />
      )}
    </Tooltip>
  );
};

const Ticket = ({ ticket, filterSetters }) => {
  return (
    <Space direction="vertical" size={2}>
      <Space align="baseline">
        <TicketStatus status={ticket.status} filterSetters={filterSetters} />
        <Typography.Title level={5} style={{ margin: 0 }}>
          <span
            style={{
              fontWeight: 600,
            }}
          >
            {ticket.name.charAt(0).toUpperCase() + ticket.name.slice(1)}
          </span>
        </Typography.Title>
      </Space>
      <Space wrap style={{ paddingLeft: 50 }} size={2}>
        <TagWithTooltip title="Дата" color="rgba(111, 106, 208, 0.2)">
          <Clickable
            onClick={() => {
              filterSetters.setDateFrom(ticket.date);
              filterSetters.setDateTo(ticket.date);
            }}
          >
            {formatDateString(ticket.date)}
          </Clickable>
        </TagWithTooltip>
        <TagWithTooltip title="Категория" color="rgba(108, 191, 206, 0.2)">
          {ticket.tag ? (
            <Clickable
              onClick={() => filterSetters.setCategories([ticket.tag.id])}
            >
              {ticket.tag.name}
            </Clickable>
          ) : (
            "-"
          )}
        </TagWithTooltip>
        <TagWithTooltip title="Способ закупки" color="rgba(58, 156, 234, 0.2)">
          <Clickable
            onClick={() =>
              filterSetters.setTenderTypes([ticket.tender_type.value])
            }
          >
            {ticket.tender_type.label}
          </Clickable>
        </TagWithTooltip>

        <RoundedTag color="rgba(171, 145, 191, 0.2)">
          <Clickable
            onClick={() => filterSetters.setBranches([ticket.filial.id])}
          >
            Филиал: {ticket.filial.name}
          </Clickable>
        </RoundedTag>
        {ticket.okpd2 ? (
          <TagWithTooltip
            title={ticket.okpd2.name}
            color="rgba(132, 181, 149, 0.2)"
          >
            <Clickable
              onClick={() => {
                filterSetters.setOkpds([ticket.okpd2.id]);
                filterSetters.setOkpdSearchValueReal(ticket.okpd2.name);
              }}
            >
              ОКПД2: {ticket.okpd2.code}
            </Clickable>
          </TagWithTooltip>
        ) : null}
        <RoundedTag>
          {ticket.user ? (
            <Clickable onClick={() => filterSetters.setUsers([ticket.user.id])}>
              Ответственный: {ticket.user.last_name}
            </Clickable>
          ) : (
            "-"
          )}
        </RoundedTag>
        <RoundedTag>
          <Clickable
            onClick={() => filterSetters.setInitiators([ticket.initiator.id])}
          >
            Инициатор: {ticket.initiator.name}
          </Clickable>
        </RoundedTag>
      </Space>
    </Space>
  );
};

export default Ticket;

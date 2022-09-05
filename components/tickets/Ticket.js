import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Space, Tooltip, Typography } from "antd";
import RoundedTag from "./RoundedTag";

const TagWithTooltip = ({ title, color, children }) => {
  return (
    <Tooltip title={title}>
      <RoundedTag color={color}>{children}</RoundedTag>
    </Tooltip>
  );
};

const Ticket = ({ ticket }) => {
  return (
    <Space direction="vertical" size={2}>
      <Space align="baseline">
        <Tooltip title={ticket.status ? "В работе" : "Завершена"}>
          {ticket.status ? (
            <ClockCircleOutlined
              style={{
                color: "#096dd9",
                background: "#e6f7ff",
                borderRadius: 10,
                fontSize: 20,
              }}
            />
          ) : (
            <CheckCircleOutlined
              style={{
                color: "#389e0d",
                background: "#f6ffed",
                borderRadius: 10,
                fontSize: 20,
              }}
            />
          )}
        </Tooltip>
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
          {ticket.date.split("-").reverse().join(".")}
        </TagWithTooltip>
        <TagWithTooltip title="Категория" color="rgba(108, 191, 206, 0.2)">
          {ticket.tags_name || "-"}
        </TagWithTooltip>
        <TagWithTooltip title="Способ закупки" color="rgba(58, 156, 234, 0.2)">
          {ticket.tender_type}
        </TagWithTooltip>

        <RoundedTag color="rgba(171, 145, 191, 0.2)">
          Филиал: {ticket.filial_name}
        </RoundedTag>
        {ticket.okpd2 ? (
          <TagWithTooltip
            title={ticket.okpd2.name}
            color="rgba(132, 181, 149, 0.2)"
          >
            ОКПД2: {ticket.okpd2.code}
          </TagWithTooltip>
        ) : null}
        <RoundedTag>Ответственный: {ticket.user_name}</RoundedTag>
        <RoundedTag>Инициатор: {ticket.initiator_name}</RoundedTag>
      </Space>
    </Space>
  );
};

export default Ticket;

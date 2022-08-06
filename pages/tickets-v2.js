import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Divider, List, Space, Tag } from "antd";
import useTickets from "../hooks/apis/useTickets";

const Tickets = () => {
  const resource = useTickets();

  if (resource.error)
    return (
      <div>
        Ошибка...
        <br />
        {resource.error.toString()}
      </div>
    );

  return (
    <>
      <List
        itemLayout="vertical"
        bordered
        dataSource={resource.data ? resource.data.data : []}
        loading={!resource.data}
        renderItem={(ticket) => (
          <List.Item
            key={ticket.id}
            extra={
              <Space direction="vertical">
                <Space>
                  Статус:
                  <Tag
                    icon={
                      ticket.status ? (
                        <ClockCircleOutlined />
                      ) : (
                        <CheckCircleOutlined />
                      )
                    }
                    color={ticket.status ? "blue" : "green"}
                  >
                    {ticket.status ? "В работе" : "Завершена"}
                  </Tag>
                </Space>
                <Space>Ответственный: {ticket.user_name}</Space>
                <Space>Инициатор: {ticket.initiator_name}</Space>
                <Space>Филиал: {ticket.filial_name}</Space>
              </Space>
            }
          >
            <List.Item.Meta
              title={
                <Space direction="vertical">
                  <Space>
                    <Tag color="geekblue">{ticket.tender_type}</Tag>
                    {ticket.name}
                  </Space>
                  <Space>
                    Категория: <Tag color="cyan">{ticket.tags_name}</Tag>
                  </Space>
                  <Space>Дата: {ticket.date}</Space>
                </Space>
              }
            />
            <Space direction="vertical">
              <Space>Закупка: {JSON.stringify(ticket.tender)}</Space>
              <Space>Контракт: {JSON.stringify(ticket.contract)}</Space>
            </Space>
            <Divider />
          </List.Item>
        )}
      ></List>
    </>
  );
};
export default Tickets;

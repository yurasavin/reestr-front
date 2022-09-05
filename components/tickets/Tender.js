import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Button, Space, Tooltip, Typography } from "antd";
import Link from "next/link";

const Tender = ({ tender }) => {
  if (!tender) {
    return (
      <Space align="baseline" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontWeight: 500 }}>Закупка</span>
        <Link href="/">
          <Button
            shape="round"
            icon={<PlusCircleOutlined style={{ height: 14 }} />}
            size="small"
            style={{
              color: "rgb(9, 109, 217)",
              background: "rgb(230, 247, 255)",
              height: 20,
              display: "flex",
              alignItems: "center",
            }}
          >
            Добавить
          </Button>
        </Link>
      </Space>
    );
  }

  return (
    <Space align="baseline" style={{ marginLeft: -25 }}>
      <Tooltip
        title={
          {
            1: "Осуществляется",
            2: "Завершена",
            3: "Не состоялась",
            4: "Отменена",
          }[tender.status]
        }
      >
        {
          {
            1: (
              <ClockCircleOutlined
                style={{
                  color: "#096dd9",
                  background: "#e6f7ff",
                  borderRadius: 10,
                  fontSize: 18,
                }}
              />
            ),
            2: (
              <CheckCircleOutlined
                style={{
                  color: "#389e0d",
                  background: "#f6ffed",
                  borderRadius: 10,
                  fontSize: 18,
                }}
              />
            ),
            3: (
              <InfoCircleOutlined
                style={{
                  color: "#d48806",
                  background: "#fffbe6",
                  borderRadius: 10,
                  fontSize: 18,
                }}
              />
            ),
            4: (
              <CloseCircleOutlined
                style={{
                  color: "#c41d7f",
                  background: "#fff0f6",
                  borderRadius: 10,
                  fontSize: 18,
                }}
              />
            ),
          }[tender.status]
        }
      </Tooltip>
      <label style={{ fontWeight: 500 }}>Закупка</label>
      {tender.num}
      <Space size={2}>
        <Typography.Text underline>СМП:</Typography.Text>
        {tender.smp ? "Да" : "Нет"}
      </Space>
      <Space size={2}>
        <Typography.Text underline>НМЦК, руб.:</Typography.Text> {tender.price}
      </Space>
    </Space>
  );
};
export default Tender;

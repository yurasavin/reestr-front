import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space, Typography } from "antd";
import Link from "next/link";

const Contract = ({ contract }) => {
  if (!contract) {
    return (
      <Space align="baseline" style={{ display: "flex", alignItems: "center" }}>
        <span style={{ fontWeight: 500 }}>Контракт</span>
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
  const date = contract.date.split("-").reverse().join(".");

  return (
    <Space align="baseline" wrap>
      <span style={{ fontWeight: 500 }}>Контракт</span>
      <span>{`№ ${contract.num} от ${date}`}</span>
      <Space size={2}>
        <Typography.Text underline>Сумма, руб.:</Typography.Text>
        {contract.price}
      </Space>
      <Space size={2}>
        <Typography.Text underline>Контрагент:</Typography.Text>
        {contract.kontragent}
      </Space>
    </Space>
  );
};

export default Contract;

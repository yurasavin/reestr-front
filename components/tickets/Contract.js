import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Link from "next/link";
import formatDateString from "../../helpers/formatDateString";
import Price from "../shared/Price";
import Clickable from "./Clickable";
import TagWithTooltip from "./TagWithTooltip";

const Contract = ({ contract, filterSetters }) => {
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

  return (
    <Space align="baseline" wrap>
      <span style={{ fontWeight: 500 }}>Контракт</span>
      <span>№ {contract.num}</span>
      <Space size={2}>
        <TagWithTooltip title="Дата">
          <Clickable
            onClick={() => {
              filterSetters.setContractDateFrom(contract.date);
              filterSetters.setContractDateTo(contract.date);
            }}
          >
            {formatDateString(contract.date)}
          </Clickable>
        </TagWithTooltip>
      </Space>
      <Space size={2}>
        <TagWithTooltip title="Сумма">
          <Clickable
            onClick={() => {
              filterSetters.setContractPriceFrom(contract.price);
              filterSetters.setContractPriceTo(contract.price);
            }}
          >
            <Price price={contract.price} />
          </Clickable>
        </TagWithTooltip>
      </Space>
      <Space size={2}>
        <TagWithTooltip title="Контрагент">
          <Clickable
            onClick={() =>
              filterSetters.setContractContractor(contract.kontragent)
            }
          >
            {contract.kontragent}
          </Clickable>
        </TagWithTooltip>
      </Space>
    </Space>
  );
};

export default Contract;

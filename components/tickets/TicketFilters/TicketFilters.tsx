import { DownCircleFilled, UpCircleFilled } from "@ant-design/icons";
import filtersStyle from "@components/shared/Filters/Filters.module.css";
import { Space } from "antd";
import { useState } from "react";
import CategoryNameInput from "./CategoryNameInput";
import ContractDateSelect from "./ContractDateSelect";
import ContractNumInput from "./ContractNumInput";
import ContractPriceInput from "./ContractPriceInput";
import FilialSelect from "./FilialSelect";
import InitiatorSelect from "./InitiatorSelect";
import KontragentInput from "./KontragentInput";
import LimitSelect from "./LimitSelect";
import NmckInput from "./NmckInput";
import OkpdInput from "./OkpdInput";
import TenderNum from "./TenderNum";
import TenderStatusSelect from "./TenderStatusSelect";
import TenderTypeSelect from "./TenderTypeSelect";
import TicketDateFilter from "./TicketDateFilter";
import style from "./TicketFilters.module.css";
import TicketName from "./TicketName";
import TicketStatusSelect from "./TicketStatusSelect";
import UserSelect from "./UserSelect";

const TicketFilters: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <Space direction="vertical" className={filtersStyle.filters}>
      <Space wrap={expanded} className={style.ticketContainer}>
        Заявка:
        <TicketName />
        <UserSelect />
        <TicketStatusSelect />
        <TicketDateFilter />
        <CategoryNameInput />
        <InitiatorSelect />
        <LimitSelect />
        <FilialSelect />
        <OkpdInput />
      </Space>

      {!expanded && (
        <div className={style.expandContainer}>
          <DownCircleFilled
            className={style.expand}
            onClick={() => setExpanded(true)}
          />
        </div>
      )}

      {expanded && (
        <Space>
          Закупка:
          <TenderNum />
          <TenderStatusSelect />
          <TenderTypeSelect />
          <NmckInput />
        </Space>
      )}

      {expanded && (
        <Space>
          Контракт:
          <ContractNumInput />
          <ContractDateSelect />
          <ContractPriceInput />
          <KontragentInput />
        </Space>
      )}

      {expanded && (
        <div className={style.expandContainer}>
          <UpCircleFilled
            className={style.expand}
            onClick={() => setExpanded(false)}
          />
        </div>
      )}
    </Space>
  );
};

export default TicketFilters;

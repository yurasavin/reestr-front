import { Input, Select, Space } from "antd";
import Branches from "./Branches";
import Categories from "./Categories";
import ContractDates from "./ContractDates";
import ContractPrices from "./ContractPrices";
import Dates from "./Dates";
import Initiators from "./Initiators";
import InputGroup from "./InputGroup";
import Okpds from "./Okpds";
import TenderPrices from "./TenderPrices";
import TenderTypes from "./TenderTypes";
import Users from "./Users";
import Year from "./Year";

const Label = ({ name }) => <label style={{ fontWeight: 500 }}>{name}</label>;

const TicketsFilters = ({ filterSetters }) => {
  return (
    <Space
      direction="vertical"
      style={{
        height: "85vh",
        overflow: "auto",
        backgroundColor: "#001529",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: 10,
        borderRadius: 8,
        width: 400,
      }}
    >
      <Label name="Заявка" />
      <Year filterSetters={filterSetters} />
      <InputGroup labelName="Наименование">
        <Input
          allowClear
          onChange={(e) => filterSetters.setName(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <InputGroup labelName="Статус">
        <Select
          allowClear
          onChange={(value) => filterSetters.setStatus(value)}
          style={{ width: "100%" }}
          options={[
            { value: true, label: "В работе" },
            { value: false, label: "Завершена" },
          ]}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
      </InputGroup>
      <Dates filterSetters={filterSetters} />
      <Categories filterSetters={filterSetters} />
      <TenderTypes filterSetters={filterSetters} />
      <Branches filterSetters={filterSetters} />
      <Okpds filterSetters={filterSetters} />
      <Users filterSetters={filterSetters} />
      <Initiators filterSetters={filterSetters} />

      <Label name="Закупка" />
      <InputGroup labelName="Статус">
        <Select
          mode="multiple"
          showArrow
          allowClear
          onChange={(values) => filterSetters.setTenderStatuses(values)}
          style={{ width: "100%" }}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          options={[
            { value: 1, label: "Осуществляется" },
            { value: 2, label: "Завершена" },
            { value: 3, label: "Не состоялась" },
            { value: 4, label: "Отменена" },
          ]}
        />
      </InputGroup>
      <InputGroup labelName="Номер">
        <Input
          allowClear
          onChange={(e) => filterSetters.setTenderNum(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <InputGroup labelName="СМП">
        <Select
          allowClear
          onChange={(value) => filterSetters.setSmp(value)}
          style={{ width: "100%" }}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          options={[
            { value: true, label: "Да" },
            { value: false, label: "Нет" },
          ]}
        />
      </InputGroup>
      <TenderPrices filterSetters={filterSetters} />

      <Label name="Контракт" />
      <InputGroup labelName="Номер">
        <Input
          allowClear
          onChange={(e) => filterSetters.setContractNum(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <ContractDates filterSetters={filterSetters} />
      <ContractPrices filterSetters={filterSetters} />
      <InputGroup labelName="Контрагент">
        <Input
          allowClear
          onChange={(e) => filterSetters.setContractContractor(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
    </Space>
  );
};
export default TicketsFilters;

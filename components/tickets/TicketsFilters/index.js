import { Input, Select, Space } from "antd";
import { useState } from "react";
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

const TicketsFilters = ({ filters, filterSetters }) => {
  const [scrolled, setScrolled] = useState(false);

  return (
    <Space
      onScroll={() => {
        if (!scrolled) {
          setScrolled(true);
        }
      }}
      direction="vertical"
      style={{
        height: "85vh",
        overflow: "auto",
        backgroundColor: "#001529",
        display: "flex",
        alignItems: "center",
        color: "white",
        padding: "10px 0",
        borderRadius: 8,
        width: 325,
        minWidth: 325,
        maxWidth: 325,
      }}
    >
      <Label name="Заявка" />
      <Year filters={filters} filterSetters={filterSetters} />
      <InputGroup labelName="Наименование">
        <Input
          allowClear
          value={filters.nameReal}
          onChange={(e) => filterSetters.setName(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <InputGroup labelName="Статус">
        <Select
          allowClear
          value={filters.status}
          onChange={(value) => filterSetters.setStatus(value)}
          style={{ width: "100%" }}
          options={[
            { value: true, label: "В работе" },
            { value: false, label: "Завершена" },
          ]}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
        />
      </InputGroup>
      <Dates
        filters={filters}
        filterSetters={filterSetters}
        parentScrolled={scrolled}
        setParentScrolled={setScrolled}
      />
      <Categories filters={filters} filterSetters={filterSetters} />
      <TenderTypes filters={filters} filterSetters={filterSetters} />
      <Branches filters={filters} filterSetters={filterSetters} />
      <Okpds filters={filters} filterSetters={filterSetters} />
      <Users filters={filters} filterSetters={filterSetters} />
      <Initiators filters={filters} filterSetters={filterSetters} />

      <Label name="Закупка" />
      <InputGroup labelName="Статус">
        <Select
          mode="multiple"
          showArrow
          allowClear
          value={filters.tenderStatuses}
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
      <InputGroup labelName="Номер извещения">
        <Input
          allowClear
          value={filters.tenderNumReal}
          onChange={(e) => filterSetters.setTenderNum(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <InputGroup labelName="СМП">
        <Select
          allowClear
          value={filters.smp}
          onChange={(value) => filterSetters.setSmp(value)}
          style={{ width: "100%" }}
          getPopupContainer={(triggerNode) => triggerNode.parentElement}
          options={[
            { value: true, label: "Да" },
            { value: false, label: "Нет" },
          ]}
        />
      </InputGroup>
      <TenderPrices filters={filters} filterSetters={filterSetters} />

      <Label name="Контракт" />
      <InputGroup labelName="Номер">
        <Input
          allowClear
          value={filters.contractNumReal}
          onChange={(e) => filterSetters.setContractNum(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
      <ContractDates
        filters={filters}
        filterSetters={filterSetters}
        parentScrolled={scrolled}
        setParentScrolled={setScrolled}
      />
      <ContractPrices filters={filters} filterSetters={filterSetters} />
      <InputGroup labelName="Контрагент">
        <Input
          allowClear
          value={filters.contractContractorReal}
          onChange={(e) => filterSetters.setContractContractor(e.target.value)}
          style={{ border: "1px solid black", borderRadius: 7 }}
        />
      </InputGroup>
    </Space>
  );
};
export default TicketsFilters;

import Filters from "@components/shared/Filters";
import FilterItem from "@components/shared/Filters/FilterItem";
import DateFilter from "./DateFilter";
import LimitSelect from "./LimitSelect";
import StatusSelect from "./StatusSelect";
import TenderTypeSelect from "./TenderTypeSelect";
import TicketsSearch from "./TicketsSearch";

const TicketFilters: React.FC = () => {
  return (
    <Filters>
      <TicketsSearch />
      <FilterItem title="Лимиты">
        <LimitSelect />
      </FilterItem>
      <FilterItem title="Статус">
        <StatusSelect />
      </FilterItem>
      <FilterItem title="Способ закупки">
        <TenderTypeSelect />
      </FilterItem>
      <FilterItem title="Дата">
        <DateFilter />
      </FilterItem>
    </Filters>
  );
};

export default TicketFilters;

import FilterItem from "@components/shared/Filters/FilterItem/FilterItem";
import Filters from "@components/shared/Filters/Filters";
import DateFilter from "./DateFilter/DateFilter";
import LimitSelect from "./LimitSelect";
import StatusSelect from "./StatusSelect/StatusSelect";
import TenderTypeSelect from "./TenderTypeSelect/TenderTypeSelect";
import TicketsSearch from "./TicketsSearch/TicketsSearch";

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

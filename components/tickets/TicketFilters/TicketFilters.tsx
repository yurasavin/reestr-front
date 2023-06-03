import FilterItem from "@components/shared/Filters/FilterItem/FilterItem";
import Filters from "@components/shared/Filters/Filters";
import { useSize } from "ahooks";
import { useRef } from "react";
import DateFilter from "./DateFilter/DateFilter";
import LimitSelect from "./LimitSelect";
import StatusSelect from "./StatusSelect/StatusSelect";
import TenderTypeSelect from "./TenderTypeSelect/TenderTypeSelect";
import TicketsSearch from "./TicketsSearch/TicketsSearch";

const MINIMUM_TITLES_DISPLAY_WIDTH = 1410;

const TicketFilters: React.FC = () => {
  // TODO: Fix jumping of this element on sider collapse
  const elementRef = useRef(null);
  const size = useSize(elementRef);

  const showTitle = !size || size.width >= MINIMUM_TITLES_DISPLAY_WIDTH;

  return (
    <div ref={elementRef}>
      <Filters>
        <TicketsSearch />
        <FilterItem title={showTitle ? "Лимиты" : ""}>
          <LimitSelect />
        </FilterItem>
        <FilterItem title={showTitle ? "Статус" : ""}>
          <StatusSelect />
        </FilterItem>
        <FilterItem title={showTitle ? "Способ закупки" : ""}>
          <TenderTypeSelect />
        </FilterItem>
        <FilterItem title={showTitle ? "Дата" : ""}>
          <DateFilter />
        </FilterItem>
      </Filters>
    </div>
  );
};

export default TicketFilters;

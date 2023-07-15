import { TenderStatus } from "@config/constants/tender";
import { useInfiniteResource } from "@hooks/apis/resources/useResource";
import type { Dayjs } from "dayjs";

export interface TicketData {
  id: number;
  name: string;
  category_name: string | null;
  status: boolean;
  tender_type: number;
  initiator_name: string;
  filial_name: string;
  user_last_name: string | null;
  date: string;
  limits_years: number[];
  okpd2: {
    code: string;
    name: string;
  } | null;
  tender: {
    ikz: string;
    num: string;
    price: string;
    economy: string;
    status: TenderStatus;
    smp: boolean;
  } | null;
  contract: {
    num: string;
    date: string;
    price: string;
    kontragent: string;
  } | null;
}

interface useTicketInfiniteListResourceProps {
  ticketName: string;
  categoryName: string;
  dateAfter: Dayjs | null;
  dateBefore: Dayjs | null;
  status?: boolean;
  users: number[];
  year?: number;
  initiators: number[];
  filials: number[];
  tenderStatuses: TenderStatus[];
  tenderTypes: number[];
  tenderNum: string;
  nmckFrom: string | null;
  nmckTo: string | null;
  okpd: string;
  contractNum: string;
  contractDateAfter: Dayjs | null;
  contractDateBefore: Dayjs | null;
  contractPriceFrom: string | null;
  contractPriceTo: string | null;
  kontragent: string;
}

const useTicketInfiniteListResource = ({
  ticketName,
  categoryName,
  dateAfter,
  dateBefore,
  status,
  users,
  year,
  initiators,
  filials,
  tenderStatuses,
  tenderTypes,
  tenderNum,
  nmckFrom,
  nmckTo,
  okpd,
  contractNum,
  contractDateAfter,
  contractDateBefore,
  contractPriceFrom,
  contractPriceTo,
  kontragent,
}: useTicketInfiniteListResourceProps): ReturnType<
  typeof useInfiniteResource<TicketData>
> => {
  const queryParams = {
    limit: "20",
    ticket_name: ticketName,
    category_name: categoryName,
    date_after: dateAfter === null ? "" : dateAfter.format("YYYY-MM-DD"),
    date_before: dateBefore === null ? "" : dateBefore.format("YYYY-MM-DD"),
    status: status === undefined ? "" : JSON.stringify(status),
    user_in: users.join(","),
    year: year === undefined ? "" : year.toString(),
    initiator_in: initiators.join(","),
    filial_in: filials.join(","),
    tender_status_in: tenderStatuses.join(","),
    tender_type_in: tenderTypes.join(","),
    tender_num: tenderNum,
    nmck_min: nmckFrom || "",
    nmck_max: nmckTo || "",
    okpd2: okpd,
    contract_num: contractNum,
    contract_date_after:
      contractDateAfter === null ? "" : contractDateAfter.format("YYYY-MM-DD"),
    contract_date_before:
      contractDateBefore === null
        ? ""
        : contractDateBefore.format("YYYY-MM-DD"),
    contract_price_min: contractPriceFrom || "",
    contract_price_max: contractPriceTo || "",
    kontragent,
  };

  return useInfiniteResource<TicketData>({
    swrKey: {
      path: "tickets/",
      queryParams,
    },
  });
};

export default useTicketInfiniteListResource;

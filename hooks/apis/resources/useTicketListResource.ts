import { useInfiniteResource } from "@hooks/apis/resources/useResource";
import type { Dayjs } from "dayjs";

export interface TicketData {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  } | null;
  status: boolean;
  okpd2: {
    id: number;
    code: string;
    name: string;
  } | null;
  tender_type: {
    value: number;
    label: string;
  };
  initiator: {
    id: number;
    name: string;
  };
  filial: {
    id: number;
    name: string;
  };
  user: {
    id: number;
    last_name: string;
  } | null;
  date: string;
  limits: {
    id: number;
    year: number;
  }[];
}

interface useTicketInfiniteListResourceProps {
  search: string;
  year?: number;
  status?: boolean;
  tenderTypes: number[];
  dateAfter: Dayjs | null;
  dateBefore: Dayjs | null;
}

const useTicketInfiniteListResource = ({
  search,
  year,
  status,
  tenderTypes,
  dateAfter,
  dateBefore,
}: useTicketInfiniteListResourceProps): ReturnType<
  typeof useInfiniteResource<TicketData>
> => {
  const queryParams = {
    limit: "20",
    search,
    year: year === undefined ? "" : year.toString(),
    status: status === undefined ? "" : JSON.stringify(status),
    tender_type_in: tenderTypes.join(","),
    date_after: dateAfter === null ? "" : dateAfter.format("YYYY-MM-DD"),
    date_before: dateBefore === null ? "" : dateBefore.format("YYYY-MM-DD"),
  };

  return useInfiniteResource<TicketData>({
    swrKey: {
      path: "tickets/",
      queryParams,
    },
  });
};

export default useTicketInfiniteListResource;

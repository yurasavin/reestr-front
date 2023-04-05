import { TenderStatus } from "@config/constants/tender";
import { useInfiniteResource } from "@hooks/apis/resources/useResource";

export interface TicketData {
  id: number;
  name: string;
  tag: {
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
  tender: {
    id: number;
    num: string;
    status: TenderStatus;
    smp: boolean;
    price: string;
  } | null;
  contract: {
    id: number;
    num: string;
    date: string;
    price: string;
    kontragent: string;
  } | null;
}

interface TicketListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: TicketData[];
}

const useTicketInfiniteListResource = (): ReturnType<
  typeof useInfiniteResource<TicketListData>
> => {
  return useInfiniteResource<TicketListData>({
    swrKey: { path: "tickets/", queryParams: { limit: "10" } },
  });
};

export default useTicketInfiniteListResource;

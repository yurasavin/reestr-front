import { useInfiniteResource } from "@hooks/apis/resources/useResource";

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
  year: number;
}

const useTicketInfiniteListResource = ({
  search,
  year,
}: useTicketInfiniteListResourceProps): ReturnType<
  typeof useInfiniteResource<TicketData>
> => {
  return useInfiniteResource<TicketData>({
    swrKey: {
      path: "tickets/",
      queryParams: { limit: "10", search, year: year.toString() },
    },
  });
};

export default useTicketInfiniteListResource;

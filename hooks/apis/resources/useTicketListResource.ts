import { useInfiniteResource } from "@hooks/apis/resources/useResource";

export interface TicketData {
  id: number;
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

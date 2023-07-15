import { useResource } from "./useResource";

export interface TenderTypeData {
  id: number;
  name: string;
}

const useTenderTypesResource = () => {
  return useResource<TenderTypeData[]>({
    swrKey: { path: "tenders/tender-types/" },
  });
};

export default useTenderTypesResource;

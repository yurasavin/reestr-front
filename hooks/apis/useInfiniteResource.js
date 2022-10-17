import { useRouter } from "next/router";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../services/api";

const PAGE_SIZE = 20;

const useInfiniteResource = (path, queryParams) => {
  const router = useRouter();

  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.data.next) {
      return null;
    }

    if (previousPageData && previousPageData.data.next) {
      const nextUrl = new URL(previousPageData.data.next);
      const offset = parseInt(nextUrl.searchParams.get("offset"));
      queryParams = { ...queryParams, limit: PAGE_SIZE, offset };
    }

    return [path, queryParams];
  };

  const resource = useSWRInfinite(getKey, fetcher, { revalidateAll: true });
  const error = resource.error;

  if (
    !resource.isValidating &&
    error &&
    (error.status === 401 || error.status === 403)
  ) {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return resource;
};

export default useInfiniteResource;

import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import useSWRInfinite from "swr/infinite";
import { fetcher } from "../../services/api";

const PAGE_SIZE = 20;

const useInfiniteResource = (key) => {
  const { setUser } = useContext(UserContext);

  const getKey = (pageIndex, previousPageData) => {
    if (!previousPageData) {
      return key;
    }

    if (!previousPageData.data.next) {
      return null;
    }

    let path = key;
    let customParams = {};
    if (Array.isArray(key)) {
      path = key[0];
      customParams = key[1];
    }

    const nextUrl = new URL(previousPageData.data.next);
    const offset = parseInt(nextUrl.searchParams.get("offset"));
    const queryParams = { ...customParams, limit: PAGE_SIZE, offset };

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
    setUser(null);
  }

  return resource;
};

export default useInfiniteResource;

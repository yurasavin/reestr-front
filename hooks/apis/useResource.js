import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../services/api";

const useResource = (path, queryParams) => {
  const router = useRouter();
  const resource = useSWR([path, queryParams], fetcher);
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

export default useResource;

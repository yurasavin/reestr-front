import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../services/api";

const useResource = (path) => {
  const router = useRouter();
  const resource = useSWR(path, fetcher);
  const error = resource.error;

  if (error && (error.status === 401 || error.status === 403)) {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return resource;
};

export default useResource;

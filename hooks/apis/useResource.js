import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "../../services/api";

const useResource = (path) => {
  const router = useRouter();
  const resource = useSWR(path, fetcher);

  if (resource.data) {
    const status = resource.data.status;
    if (status === 403 || status === 401) {
      router.push("/login");
    }
  }

  return resource;
};

export default useResource;

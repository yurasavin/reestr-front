import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import useSWR from "swr";
import { fetcher } from "../../services/api";

const useResource = (key, options) => {
  const { setUser } = useContext(UserContext);
  const resource = useSWR(key, fetcher, options);
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

export default useResource;

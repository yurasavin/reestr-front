import { UserContext } from "@contexts/UserContext";
import { DEFAULT_HEADERS } from "@services/api";
import { useContext, useMemo } from "react";

const useHeaders = (initHeaders?: { [key: string]: string }): Headers => {
  const { authToken } = useContext(UserContext);

  const headers = useMemo(() => {
    const headers = new Headers(initHeaders || DEFAULT_HEADERS);

    if (authToken && !headers.has("Authorization")) {
      headers.set("Authorization", `Token ${authToken}`);
    }
    return headers;
  }, [authToken, initHeaders]);

  return headers;
};

export default useHeaders;

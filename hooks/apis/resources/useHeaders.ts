import { UserContext } from "@contexts/UserContext";
import { DEFAULT_HEADERS } from "@services/api";
import { useContext, useMemo } from "react";

const useHeaders = (initHeaders?: { [key: string]: string }): Headers => {
  const { accessToken } = useContext(UserContext);

  const headers = useMemo(() => {
    const headers = new Headers(initHeaders || DEFAULT_HEADERS);

    if (accessToken && !headers.has("Authorization")) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }
    return headers;
  }, [accessToken, initHeaders]);

  return headers;
};

export default useHeaders;

import {
  addAuthTokenToHeaders,
  fetcher,
  getDefaultFetchParams,
  getDefaultHeaders,
} from "@services/api";
import { useCookieState } from "ahooks";
import type { State } from "ahooks/lib/useCookieState";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";

export interface UserResponse {
  id: number;
}

export interface UseUserResult {
  user: UserResponse | null;
  setUser: Dispatch<SetStateAction<UserResponse | null>>;
  authToken: string | undefined;
  setAuthToken: (
    newValue: State | ((prevState: State) => State),
    newOptions?: Cookies.CookieAttributes
  ) => void;
  isMutating: boolean;
  onAuthError: () => void;
}

const useUser = (): UseUserResult => {
  const [user, setUser] = useState<UserResponse | null>(null);
  const [authToken, setAuthToken] = useCookieState("authToken", {
    // TODO: uncomment
    // secure: true,
    secure: false,
    sameSite: "strict",
  });
  const [isMutating, setIsMutating] = useState<boolean>(true);

  const cachedResult = useMemo<UseUserResult>(
    () => ({
      user,
      setUser,
      authToken,
      setAuthToken,
      isMutating,
      onAuthError: () => {
        setUser(null);
        setAuthToken(undefined);
        setIsMutating(false);
      },
    }),
    [user, setUser, isMutating, authToken, setAuthToken]
  );

  useEffect(() => {
    const fetchParams = getDefaultFetchParams();
    fetchParams.headers = getDefaultHeaders();
    addAuthTokenToHeaders(fetchParams.headers, authToken);

    fetcher({ path: "users/me/", fetchParams })
      .then((response) => {
        setUser(response.data);
        setIsMutating(false);
      })
      .catch(cachedResult.onAuthError);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return cachedResult;
};

export default useUser;

import Login from "@components/login/Login/Login";
import { createContext } from "react";

import Loader from "@components/login/Loader/Loader";
import { UserRole } from "@config/constants/userRoles";
import {
  Response,
  addAuthTokenToHeaders,
  fetcher,
  getDefaultFetchParams,
  getDefaultHeaders,
} from "@services/api";
import { useCookieState } from "ahooks";
import { State } from "ahooks/lib/useCookieState";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSWRConfig } from "swr";

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

interface UserResponse {
  id: number;
  username: string;
  email: string;
  is_active: boolean;
  first_name: string;
  last_name: string;
  date_joined: string;
  last_login: string | null;
  role: UserRole;
  avatar: string | null;
}

interface UseUserResult {
  user: UserResponse | null;
  setUser: Dispatch<SetStateAction<UserResponse | null>>;
  accessToken: string | null;
  setAccessToken: Dispatch<SetStateAction<string | null>>;
  refreshToken: string | undefined;
  setRefreshToken: (
    newValue: State | ((prevState: State) => State),
    newOptions?: Cookies.CookieAttributes
  ) => void;
}

interface UserProviderProps {
  children: React.ReactNode;
}

const UserContext = createContext<UseUserResult>({
  user: null,
  setUser: () => {},
  accessToken: null,
  setAccessToken: () => {
    throw Error("setAccessToken is not implemented");
  },
  refreshToken: undefined,
  setRefreshToken: () => {
    throw Error("setRefreshToken is not implemented");
  },
});

// Is used for preventing multiple queries at the same time
let tokenRefreshingPromise: Promise<any> | null = null;

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const { mutate } = useSWRConfig();
  const [user, setUser] = useState<UserResponse | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useCookieState("refreshToken", {
    // TODO: uncomment
    // secure: true,
    secure: false,
    sameSite: "strict",
  });
  const [showLoader, setShowLoader] = useState<boolean>(true);

  const contextValue = {
    user,
    setUser,
    accessToken,
    setAccessToken,
    refreshToken,
    setRefreshToken,
  };

  useEffect(() => {
    // определяем надо ли показывать лоадер
    if (user && accessToken && refreshToken) {
      setShowLoader(false);
    } else if (!user && !accessToken && !refreshToken) {
      setShowLoader(false);
    } else {
      setShowLoader(true);
    }
  }, [user, accessToken, refreshToken, setShowLoader]);

  useEffect(() => {
    // сбрасываем кеш запросов при обновлении токена
    if (accessToken) {
      mutate(() => true, undefined, { revalidate: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  useEffect(() => {
    // тут получаем токен если только открыли приложение или протух основной
    if (accessToken || !refreshToken || tokenRefreshingPromise) {
      return;
    }

    const fetchParams = getDefaultFetchParams();
    fetchParams.headers = getDefaultHeaders();
    fetchParams.method = "POST";
    fetchParams.body = JSON.stringify({
      refresh_token: refreshToken,
      client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
      grant_type: "refresh_token",
    });

    tokenRefreshingPromise = fetcher({ path: "oauth/token/", fetchParams })
      .then((response: Response<LoginResponse>) => {
        setAccessToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);
      })
      .catch(() => {
        setRefreshToken(undefined);
        setUser(null);
      })
      .finally(() => (tokenRefreshingPromise = null));
  }, [accessToken, refreshToken, setRefreshToken, mutate]);

  useEffect(() => {
    // тут получаем профиль пользователя
    if (user || !accessToken) {
      return;
    }

    const fetchParams = getDefaultFetchParams();
    fetchParams.headers = getDefaultHeaders();
    addAuthTokenToHeaders(fetchParams.headers, accessToken);

    fetcher({ path: "users/me/", fetchParams })
      .then((response: Response<UserResponse>) => {
        setUser(response.data);
      })
      .catch(() => {
        setAccessToken(null);
      });
  }, [user, accessToken]);

  return (
    <>
      <UserContext.Provider value={contextValue}>
        {showLoader && <Loader />}
        {!showLoader && !user && <Login />}
        {children}
      </UserContext.Provider>
    </>
  );
};

export { UserContext, UserProvider };

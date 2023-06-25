import { message } from "antd";

const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;

export interface Response<T> {
  status: number;
  data: T;
}

export interface PaginatedResponse<T> {
  status: number;
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: T[];
  };
}

export interface ErrorResponse {
  status: number;
  data: {
    [key: string]: string | string[];
  };
}

export interface Fetcher {
  path: string;
  queryParams?: { [key: string]: string };
  fetchParams: RequestInit;
}

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

const DEFAULT_FETCH_PARAMS: RequestInit = {
  method: "GET",
  mode: "cors",
};

const fetcher = async ({
  path,
  queryParams,
  fetchParams,
}: Fetcher): Promise<Response<any>> => {
  const url = buildUrlWithParams(path, queryParams);

  let response: globalThis.Response;
  try {
    response = await fetch(url, fetchParams);
  } catch (error) {
    message.warning("Ошибка сети. Повторите попытку позже");
    throw error;
  }

  let data = {};
  if (response.status === 400 || (response.ok && response.status !== 204)) {
    data = await response.json();
  }

  const ret = { status: response.status, data: data };
  console.debug(ret);

  if (response.ok) {
    return ret;
  }

  if (response.status === 500) {
    message.warning("Что-то пошло не так. Уже работаем над проблемой");
  } else if (response.status === 403) {
    message.warning("У вас нет прав для выполнения данного действия");
  }

  throw ret;
};

const buildUrlWithParams = (
  path: string,
  queryParams: { [key: string]: string } | undefined
): URL => {
  const url = new URL(`${API_ROOT}/${path}`);

  if (queryParams) {
    for (const key in queryParams) {
      url.searchParams.append(key, queryParams[key]);
    }
  }

  return url;
};

const getDefaultFetchParams = (): RequestInit => ({ ...DEFAULT_FETCH_PARAMS });
const getDefaultHeaders = (): Headers => new Headers(DEFAULT_HEADERS);
const addAuthTokenToHeaders = (headers: Headers, accessToken: string): void => {
  if (!headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${accessToken}`);
  }
};

export {
  DEFAULT_FETCH_PARAMS,
  DEFAULT_HEADERS,
  addAuthTokenToHeaders,
  fetcher,
  getDefaultFetchParams,
  getDefaultHeaders,
};

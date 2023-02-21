const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;

export interface Response<T> {
  status: number;
  data: T;
}

export interface ErrorResponse {
  status: number;
  data: {
    [key: string]: string | string[];
  };
}

const DEFAULT_FETCH_PARAMS: RequestInit = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

interface Fetcher {
  path: string;
  queryParams?: { [key: string]: string };
  fetchParams: RequestInit;
  headers: HeadersInit;
}

const fetcher = async ({
  path,
  queryParams,
  fetchParams = DEFAULT_FETCH_PARAMS,
  headers,
}: Fetcher): Promise<Response<any>> => {
  const url = buildUrlWithParams(path, queryParams);

  const params = buildFetchParamsWithHeaders(fetchParams, headers);
  const response = await fetch(url, params);

  let data = {};
  if (response.status === 400 || response.ok) {
    data = await response.json();
  }

  const ret = { status: response.status, data: data };
  console.debug(ret);

  if (response.ok) {
    return ret;
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

const buildFetchParamsWithHeaders = (
  fetchParams: RequestInit,
  headers: HeadersInit
): RequestInit => {
  if (!headers) {
    headers = buildDefaultHeaders();
  }
  return { ...fetchParams, headers };
};

const buildDefaultHeaders = (): Headers => {
  const headers = new Headers({ "Content-Type": "application/json" });
  const authToken = getAuthorizationToken();
  if (authToken) {
    headers.append("Authorization", authToken);
  }
  return headers;
};

const getAuthorizationToken = (): string | undefined => {
  const token = localStorage.getItem("token");
  if (token) {
    return `Token ${token}`;
  }
};

export { fetcher };

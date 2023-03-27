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

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

const DEFAULT_FETCH_PARAMS: RequestInit = {
  method: "GET",
  mode: "cors",
};

export interface Fetcher {
  path: string;
  queryParams?: { [key: string]: string };
  fetchParams: RequestInit;
}

const fetcher = async ({
  path,
  queryParams,
  fetchParams,
}: Fetcher): Promise<Response<any>> => {
  const url = buildUrlWithParams(path, queryParams);
  const response = await fetch(url, fetchParams);

  let data = {};
  if (response.status === 400 || (response.ok && response.status !== 204)) {
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

const getDefaultFetchParams = (): RequestInit => ({ ...DEFAULT_FETCH_PARAMS });
const getDefaultHeaders = (): Headers => new Headers(DEFAULT_HEADERS);
const addAuthTokenToHeaders = (headers: Headers, authToken?: string): void => {
  if (authToken && !headers.has("Authorization")) {
    headers.set("Authorization", `Token ${authToken}`);
  }
};

export {
  fetcher,
  DEFAULT_HEADERS,
  DEFAULT_FETCH_PARAMS,
  getDefaultFetchParams,
  getDefaultHeaders,
  addAuthTokenToHeaders,
};

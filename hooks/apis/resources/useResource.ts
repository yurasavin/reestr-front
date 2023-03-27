import {
  addAuthTokenToHeaders,
  fetcher,
  getDefaultFetchParams,
  getDefaultHeaders,
  Response,
} from "@services/api";
import { UserContext } from "contexts/UserContext";
import { useContext } from "react";
import type { SWRConfiguration } from "swr";
import useSWR, { SWRResponse } from "swr";

import useSWRInfinite, { SWRInfiniteResponse } from "swr/infinite";

interface ResourceSwrKey {
  path: string;
  queryParams?: { [key: string]: string };
}

interface ResourceOtherFetcherOptions {
  queryParams?: { [key: string]: string };
  fetchParams?: RequestInit;
}

export interface UseResource {
  swrKey: ResourceSwrKey;
  otherFetcherOptions?: ResourceOtherFetcherOptions;
  headers?: Headers;
  SWROptions?: SWRConfiguration;
}

const PAGE_SIZE = "20";

const getFetchParams = (
  otherFetcherOptions: ResourceOtherFetcherOptions,
  headers?: Headers,
  authToken?: string
): RequestInit => {
  const fetchParams: RequestInit =
    "fetchParams" in otherFetcherOptions && otherFetcherOptions.fetchParams
      ? otherFetcherOptions.fetchParams
      : getDefaultFetchParams();

  if (headers) {
    fetchParams.headers = headers;
  } else {
    fetchParams.headers = getDefaultHeaders();
  }

  addAuthTokenToHeaders(fetchParams.headers, authToken);

  return fetchParams;
};

function useResource<T>({
  swrKey,
  otherFetcherOptions = {},
  headers,
  SWROptions,
}: UseResource): SWRResponse<Response<T>> {
  const { authToken, onAuthError } = useContext(UserContext);

  const fetchParams = getFetchParams(otherFetcherOptions, headers, authToken);
  const fetcherOptions = { ...swrKey, ...otherFetcherOptions, fetchParams };

  const resource = useSWR<Response<T>>(swrKey, () => fetcher(fetcherOptions), {
    onError(err, key, config) {
      if (err.status === 401) {
        onAuthError();
      }
    },
    ...SWROptions,
  });

  return resource;
}

function useInfiniteResource<T>({
  swrKey,
  otherFetcherOptions = {},
  headers,
  SWROptions,
}: UseResource): SWRInfiniteResponse<Response<T>> {
  const { authToken, onAuthError } = useContext(UserContext);

  const fetchParams = getFetchParams(otherFetcherOptions, headers, authToken);

  const getKey = (
    pageIndex: number,
    previousPageData: Response<T>
  ): ResourceSwrKey | null => {
    if (!previousPageData) {
      return swrKey;
    }

    if (!previousPageData.data.next) {
      return null;
    }

    const nextUrl = new URL(previousPageData.data.next);
    const offset = nextUrl.searchParams.get("offset") || "";
    return {
      path: swrKey.path,
      queryParams: { offset, limit: PAGE_SIZE, ...swrKey.queryParams },
    };
  };

  const resource = useSWRInfinite<Response<T>>(
    getKey,
    (key: ResourceSwrKey) =>
      fetcher({ ...key, ...otherFetcherOptions, fetchParams }),
    {
      onError(err, key, config) {
        if (err.status === 401) {
          onAuthError();
        }
      },
      ...SWROptions,
    }
  );

  return resource;
}

export { useResource, useInfiniteResource };

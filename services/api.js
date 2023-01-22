const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;

const defaultParams = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

const getParams = (customParams, skipContentType) => {
  const authToken = getAuthorizationToken();
  const params = {
    ...defaultParams,
    ...customParams,
    headers: {
      Authorization: authToken,
      ...defaultParams.headers,
      ...customParams?.headers,
    },
  };

  if (skipContentType) {
    delete params.headers["Content-Type"];
  }

  return params;
};

const getAuthorizationToken = () => {
  const token = localStorage.getItem("token");
  return `Token ${token}`;
};

export const fetcher = async (
  path,
  queryParams,
  customParams,
  skipContentType = false
) => {
  const url = new URL(`${API_ROOT}/${path}`);

  if (queryParams) {
    for (const key in queryParams) {
      url.searchParams.append(key, queryParams[key]);
    }
  }

  let params = getParams(customParams, skipContentType);

  const response = await fetch(url, params);
  let data = {};
  if (response.status === 400 || response.ok) {
    data = await response.json();
  }

  const ret = { status: response.status, data: data };

  if (response.ok) {
    return ret;
  }

  throw ret;
};

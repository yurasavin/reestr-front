const API_ROOT = process.env.NEXT_PUBLIC_API_ROOT;

const defaultParams = {
  method: "GET",
  mode: "cors",
  headers: {
    "Content-Type": "application/json",
  },
};

const getParams = (customParams) => {
  let params = { ...defaultParams, ...customParams };
  params = addAuthorizationHeader(params);
  params = addCors(params);
  return params;
};

const addAuthorizationHeader = (params) => {
  const token = localStorage.getItem("token");
  if (token) {
    params.headers.Authorization = `Token ${token}`;
  }
  return params;
};

const addCors = (params) => {
  params.mode = "cors";
  return params;
};

export const fetcher = async (path, customParams = {}) => {
  const url = `${API_ROOT}/${path}`;
  let params = getParams(customParams);

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

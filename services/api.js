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
  params.headers.Authorization = `Token ${token}`;
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
  if (
    response.status === 400 ||
    (200 <= response.status && response.status < 300)
  ) {
    data = await response.json();
  }

  return { status: response.status, data: data };
};

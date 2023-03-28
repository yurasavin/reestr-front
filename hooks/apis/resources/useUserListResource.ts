import { UserRole } from "@config/constants";
import { useInfiniteResource } from "@hooks/apis/resources/useResource";
import { Response } from "@services/api";
import { SWRInfiniteResponse } from "swr/infinite/dist/infinite";

export interface UserData {
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

export interface UserListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: UserData[];
}

const useUserInfiniteListResource = (
  search: string
): SWRInfiniteResponse<Response<UserListData>> => {
  return useInfiniteResource<UserListData>({
    swrKey: { path: "users/", queryParams: { limit: "5", search } },
  });
};

export default useUserInfiniteListResource;

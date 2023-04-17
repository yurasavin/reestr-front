import { UserRole } from "@config/constants/userRoles";
import { useInfiniteResource } from "@hooks/apis/resources/useResource";

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

const useUserInfiniteListResource = (
  search: string
): ReturnType<typeof useInfiniteResource<UserData>> => {
  return useInfiniteResource<UserData>({
    swrKey: { path: "users/", queryParams: { limit: "10", search } },
  });
};

export default useUserInfiniteListResource;

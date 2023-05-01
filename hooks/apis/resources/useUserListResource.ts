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

interface useUserInfiniteListResourceProps {
  search: string;
  role?: number;
  status?: boolean;
}

const useUserInfiniteListResource = ({
  search,
  role,
  status,
}: useUserInfiniteListResourceProps): ReturnType<
  typeof useInfiniteResource<UserData>
> => {
  const queryParams = {
    limit: "10",
    search,
    role: role === undefined ? "" : role.toString(),
    is_active: status === undefined ? "" : JSON.stringify(status),
  };

  return useInfiniteResource<UserData>({
    swrKey: { path: "users/", queryParams },
  });
};

export default useUserInfiniteListResource;

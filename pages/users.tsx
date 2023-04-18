import SiteLayout from "@components/base/SiteLayout/SiteLayout";
import AddUserButton from "@components/users/AddUserButton";
import UsersFilters from "@components/users/UsersFilters/UsersFilters";
import UsersList from "@components/users/UsersList/UsersList";
import { SiderCollapsedProvider } from "@contexts/SiderCollapsedContext";
import { UsersResourceProvider } from "@contexts/users/UsersResourceContext";
import {
  getSiderCollapsedServerSideProps,
  SiderCollapsedPageProps,
} from "@helpers/getSiderCollapsedCookie";

const Users: React.FC<SiderCollapsedPageProps> = ({ siderCollapsed }) => {
  return (
    <SiderCollapsedProvider value={siderCollapsed}>
      <SiteLayout>
        <UsersResourceProvider>
          <UsersFilters />
          <UsersList />
        </UsersResourceProvider>
        <AddUserButton />
      </SiteLayout>
    </SiderCollapsedProvider>
  );
};

export default Users;
export { getSiderCollapsedServerSideProps as getServerSideProps };

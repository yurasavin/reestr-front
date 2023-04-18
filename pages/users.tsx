import SiteLayout from "@components/base/SiteLayout";
import AddUserButton from "@components/users/AddUserButton";
import UsersFilters from "@components/users/UsersFilters/intex";
import UsersList from "@components/users/UsersList";
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

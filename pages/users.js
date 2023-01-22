import { List } from "antd";
import UserForm from "components/users/UserForm";
import { EditUserProvider } from "contexts/EditUserContext";

import SiteLayout from "../components/base/SiteLayout";
import AddUserButton from "../components/users/AddUserButton";
import UserListItem from "../components/users/UserListItem";
import getSiderCollapsedCookie from "../helpers/getSiderCollapsedCookie";
import useResource from "../hooks/apis/useResource";

function Users({ siderCollapsed }) {
  const { data: response, error } = useResource("users/");

  if (error)
    return (
      <div>
        Ошибка...
        <br />
        {error.toString()}
      </div>
    );

  return (
    <SiteLayout siderCollapsed={siderCollapsed}>
      <EditUserProvider>
        <List
          itemLayout="vertical"
          dataSource={response?.data}
          loading={!response}
          renderItem={(user) => <UserListItem user={user} />}
          style={{
            overflow: "auto",
            height: "85vh",
          }}
        />
        <AddUserButton />
        <UserForm />
      </EditUserProvider>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  return { props: { siderCollapsed: getSiderCollapsedCookie(context) } };
}

export default Users;

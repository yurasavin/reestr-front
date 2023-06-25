import { EditOutlined } from "@ant-design/icons";
import UserForm from "@components/users/UserForm/UserForm";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { Button } from "antd";
import { useState } from "react";

interface UserEditButtonProps {
  user: UserData;
}

const UserEditButton: React.FC<UserEditButtonProps> = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        size="small"
        ghost
        icon={<EditOutlined />}
        onClick={() => setOpen(true)}
      >
        Редактировать
      </Button>
      {open && (
        <UserForm
          close={() => setOpen(false)}
          initialValues={user}
          editUserId={user.id}
        />
      )}
    </>
  );
};
export default UserEditButton;

import { EditTwoTone } from "@ant-design/icons";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { Button } from "antd";
import { useState } from "react";
import UserForm, { UserFormData } from "./UserForm";

const transformData = (user: UserData): UserFormData => {
  return {
    is_active: user.is_active,
    username: user.username,
    last_name: user.last_name,
    first_name: user.first_name,
    role: user.role,
    email: user.email,
    avatar: user.avatar
      ? [{ status: "done", url: user.avatar, uid: "-1", name: "" }]
      : undefined,
  };
};

interface UserListItemUserEditButtonProps {
  user: UserData;
}

const UserListItemUserEditButton: React.FC<UserListItemUserEditButtonProps> = ({
  user,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        size="small"
        ghost
        icon={<EditTwoTone />}
        onClick={() => setOpen(true)}
      >
        Редактировать
      </Button>
      {open && (
        <UserForm
          close={() => setOpen(false)}
          initialValues={transformData(user)}
          editUserId={user.id}
        />
      )}
    </>
  );
};
export default UserListItemUserEditButton;

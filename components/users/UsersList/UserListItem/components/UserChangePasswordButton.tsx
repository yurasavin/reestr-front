import { LockOutlined } from "@ant-design/icons";
import UserChangePasswordForm from "@components/users/UserForm/UserChangePasswordForm";
import { Button } from "antd";
import { useState } from "react";

interface UserChangePasswordButtonProps {
  userId: number;
}

const UserChangePasswordButton: React.FC<UserChangePasswordButtonProps> = ({
  userId,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="primary"
        size="small"
        ghost
        icon={<LockOutlined />}
        onClick={() => setOpen(true)}
      >
        Изменить пароль
      </Button>
      {open && (
        <UserChangePasswordForm close={() => setOpen(false)} userId={userId} />
      )}
    </>
  );
};
export default UserChangePasswordButton;

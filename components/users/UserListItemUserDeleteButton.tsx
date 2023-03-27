import { DeleteTwoTone, ExclamationCircleOutlined } from "@ant-design/icons";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import useHeaders from "@hooks/apis/resources/useHeaders";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import { Button, message, Modal } from "antd";
import { useContext } from "react";
import { fetcher } from "services/api";

interface UserListItemUserDeleteButtonProps {
  user: UserData;
}

const UserListItemUserDeleteButton: React.FC<
  UserListItemUserDeleteButtonProps
> = ({ user }) => {
  const headers = useHeaders();
  const usersResource = useContext(UsersResourceContext);

  const showConfirm = (user: UserData) => {
    Modal.confirm({
      title: `Удаление пользователя "${user.last_name}"`,
      icon: <ExclamationCircleOutlined />,
      content: "Вы уверены?",
      onOk: () => deleteUser(user.id),
    });
  };

  const deleteUser = async (userId: number) => {
    try {
      const path = `users/${userId}/`;
      await fetcher({ path, fetchParams: { method: "DELETE", headers } });
      usersResource?.mutate();
      message.success("Пользователь удален!");
    } catch (error) {
      message.warning("Что-то пошло не так. Уже работаем над проблемой");
      console.log(error);
    }
  };

  return (
    <Button
      type="primary"
      size="small"
      danger
      ghost
      icon={<DeleteTwoTone twoToneColor="#ff4f4f" />}
      onClick={() => showConfirm(user)}
    >
      Удалить
    </Button>
  );
};
export default UserListItemUserDeleteButton;

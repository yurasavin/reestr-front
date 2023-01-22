import { DeleteTwoTone, ExclamationCircleOutlined } from "@ant-design/icons";
import { message, Modal, Tooltip } from "antd";
import { fetcher } from "services/api";
import { mutate } from "swr";

const deleteUser = async (userId) => {
  try {
    const path = `users/${userId}/`;
    await fetcher(path, {}, { method: "DELETE" });
    mutate(["users/", undefined]);
    message.success("Пользователь удален!");
  } catch (error) {
    console.log(error);
  }
};

const showConfirm = (user) => {
  Modal.confirm({
    title: `Удаление пользователя "${user.last_name}"`,
    icon: <ExclamationCircleOutlined />,
    content: "Вы уверены?",
    onOk: () => deleteUser(user.id),
  });
};

const UserDeleteButton = ({ user }) => {
  return (
    <>
      <Tooltip title="Удалить">
        <DeleteTwoTone
          className="hover-opacity"
          twoToneColor="#d90909"
          style={{
            cursor: "pointer",
            fontSize: 20,
          }}
          onClick={() => showConfirm(user)}
        />
      </Tooltip>
    </>
  );
};
export default UserDeleteButton;

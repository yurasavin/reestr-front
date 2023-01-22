import { EditTwoTone } from "@ant-design/icons";
import { Tooltip } from "antd";
import { EditUserContext } from "contexts/EditUserContext";
import { useContext } from "react";

const UserEditButton = ({ user }) => {
  const { setEditUser } = useContext(EditUserContext);
  return (
    <Tooltip title="Редактировать">
      <EditTwoTone
        className="hover-opacity"
        twoToneColor="#096ed9"
        style={{
          cursor: "pointer",
          fontSize: 20,
        }}
        onClick={() => setEditUser(user)}
      />
    </Tooltip>
  );
};
export default UserEditButton;

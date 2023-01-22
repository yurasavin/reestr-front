import { PlusCircleOutlined } from "@ant-design/icons";
import { EditUserContext } from "contexts/EditUserContext";
import { useContext } from "react";

const AddUserButton = () => {
  const { setEditUser } = useContext(EditUserContext);
  return (
    <div style={{ position: "absolute", bottom: 50, right: 50 }}>
      <PlusCircleOutlined
        className="hover-opacity rotate"
        style={{
          fontSize: 54,
          color: "#096ed9",
          background: "#e6f7ff",
          borderRadius: 25,
          cursor: "pointer",
        }}
        onClick={() => setEditUser({})}
      />
    </div>
  );
};
export default AddUserButton;

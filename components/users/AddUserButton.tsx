import StyledFloatButton from "@components/shared/StyledFloatButton";
import { useState } from "react";
import UserForm from "./UserForm";

const AddUserButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledFloatButton
        tooltip="Создать пользователя"
        onClick={() => setOpen(true)}
      />
      {open && <UserForm close={() => setOpen(false)} />}
    </>
  );
};
export default AddUserButton;

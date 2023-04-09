import StyledFloatButton from "@components/shared/StyledFloatButton";
import { useState } from "react";

const TicketAddButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledFloatButton
        tooltip="Создать заявку"
        onClick={() => setOpen(true)}
      />
    </>
  );
};

export default TicketAddButton;

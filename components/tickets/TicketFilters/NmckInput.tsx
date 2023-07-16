import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { InputNumber, Space } from "antd";
import { useContext } from "react";

const NmckInput: React.FC = () => {
  const { setNmckFrom, setNmckTo } = useContext(TicketsResourceContext);

  return (
    <Space.Compact>
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        onChange={(value) => setNmckFrom && setNmckFrom(value)}
        placeholder="НМЦК от"
        style={{ width: 125 }}
      />
      <InputNumber
        controls={false}
        precision={2}
        stringMode
        onChange={(value) => setNmckTo && setNmckTo(value)}
        placeholder="НМЦК до"
        style={{ width: 125 }}
      />
    </Space.Compact>
  );
};

export default NmckInput;

import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";

interface TicketInitiatorData {
  id: number;
  name: string;
}

const InitiatorSelect: React.FC = () => {
  const { initiators, setInitiators } = useContext(TicketsResourceContext);
  const resource = useResource<TicketInitiatorData[]>({
    swrKey: { path: "tickets/ticket-initiators/" },
  });

  return (
    <Select
      allowClear
      placeholder="Инициатор"
      defaultValue={initiators}
      loading={!resource.data}
      onChange={(initiators) => setInitiators && setInitiators(initiators)}
      options={resource.data?.data}
      fieldNames={{ value: "id", label: "name" }}
      mode="multiple"
      showSearch={false}
      maxTagCount="responsive"
      virtual={false}
      listHeight={450}
      style={{ width: 250 }}
    />
  );
};

export default InitiatorSelect;

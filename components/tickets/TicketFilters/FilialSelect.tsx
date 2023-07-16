import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";

interface FilialData {
  id: number;
  name: string;
}

const FilialSelect: React.FC = () => {
  const { setFilials } = useContext(TicketsResourceContext);
  const resource = useResource<FilialData[]>({
    swrKey: { path: "tickets/filials/" },
  });

  return (
    <Select
      allowClear
      placeholder="Филиал"
      loading={!resource.data}
      onChange={(filials) => setFilials && setFilials(filials)}
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

export default FilialSelect;

import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import useTenderTypesResource, {
  TenderTypeData,
} from "@hooks/apis/resources/useTenderTypesResource";
import { Select } from "antd";
import { useContext } from "react";

const TenderTypeSelect: React.FC = () => {
  const { setTenderTypes } = useContext(TicketsResourceContext);
  const resource = useTenderTypesResource();

  const options223FZ: TenderTypeData[] = [];
  const options44FZ: TenderTypeData[] = [];

  if (resource.data) {
    resource.data.data.map((tenderType) =>
      tenderType.name.includes("44-ФЗ")
        ? options44FZ.push(tenderType)
        : options223FZ.push(tenderType)
    );
  }

  const options = [
    { name: "223-ФЗ", options: options223FZ },
    { name: "44-ФЗ", options: options44FZ },
  ];

  return (
    <Select
      allowClear
      fieldNames={{ value: "id", label: "name" }}
      loading={!resource.data}
      mode="multiple"
      placeholder="Способ закупки"
      onChange={(tenderTypes) => setTenderTypes && setTenderTypes(tenderTypes)}
      options={options}
      showSearch={false}
      maxTagCount="responsive"
      virtual={false}
      listHeight={400}
      style={{ width: 350 }}
    />
  );
};

export default TenderTypeSelect;

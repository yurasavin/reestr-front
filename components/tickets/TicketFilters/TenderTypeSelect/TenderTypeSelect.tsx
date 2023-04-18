import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";
import styles from "./TenderTypeSelect.module.css";

interface TenderTypeData {
  id: number;
  name: string;
}

const TenderTypeSelect: React.FC = () => {
  const { tenderTypes, setTenderTypes } = useContext(TicketsResourceContext);
  const resource = useResource<TenderTypeData[]>({
    swrKey: { path: "tenders/tender-types/" },
  });

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
      className={styles.select}
      allowClear
      defaultValue={tenderTypes}
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
    />
  );
};

export default TenderTypeSelect;

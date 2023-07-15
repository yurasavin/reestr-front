import { TenderStatus, TenderStatusDispalay } from "@config/constants/tender";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Select } from "antd";
import { useContext } from "react";

const TenderStatusSelect: React.FC = () => {
  const { tenderStatuses, setTenderStatuses } = useContext(
    TicketsResourceContext
  );

  return (
    <Select
      placeholder="Статус закупки"
      allowClear
      mode="multiple"
      defaultValue={tenderStatuses}
      onChange={(statuses) => setTenderStatuses && setTenderStatuses(statuses)}
      options={[
        {
          value: TenderStatus.InProcess,
          label: TenderStatusDispalay[TenderStatus.InProcess],
        },
        {
          value: TenderStatus.Finished,
          label: TenderStatusDispalay[TenderStatus.Finished],
        },
        {
          value: TenderStatus.Cancelled,
          label: TenderStatusDispalay[TenderStatus.Cancelled],
        },
        {
          value: TenderStatus.NotHappen,
          label: TenderStatusDispalay[TenderStatus.NotHappen],
        },
      ]}
      showSearch={false}
      maxTagCount="responsive"
      virtual={false}
      listHeight={400}
      style={{ width: 250 }}
    />
  );
};

export default TenderStatusSelect;

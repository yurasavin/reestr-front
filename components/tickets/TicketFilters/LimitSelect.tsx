import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";

interface LimitData {
  id: number;
  year: number;
}

const LimitSelect: React.FC = () => {
  const { year, setYear } = useContext(TicketsResourceContext);
  const resource = useResource<LimitData[]>({
    swrKey: { path: "limits/" },
  });

  return (
    <Select
      fieldNames={{ value: "year", label: "year" }}
      defaultValue={year}
      loading={!resource.data}
      onSelect={(year) => setYear && setYear(year)}
      options={resource.data?.data}
    />
  );
};

export default LimitSelect;

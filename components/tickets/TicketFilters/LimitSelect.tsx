import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { useResource } from "@hooks/apis/resources/useResource";
import { Select } from "antd";
import { useContext } from "react";

interface LimitData {
  id: number;
  year: number;
}

const LimitSelect: React.FC = () => {
  const { setYear } = useContext(TicketsResourceContext);
  const resource = useResource<LimitData[]>({
    swrKey: { path: "limits/" },
  });

  let options: { value: number; label: string }[] = [];

  if (resource.data) {
    options = resource.data.data.map((limit) => ({
      value: limit.year,
      label: limit.year.toString(),
    }));
    options.reverse();
  }

  return (
    <Select
      allowClear
      placeholder="Лимиты"
      loading={!resource.data}
      onChange={(year) => setYear && setYear(year)}
      options={options}
      style={{ width: 100 }}
    />
  );
};

export default LimitSelect;

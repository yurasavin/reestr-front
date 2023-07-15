import { FileProtectOutlined } from "@ant-design/icons";
import useTenderTypesResource from "@hooks/apis/resources/useTenderTypesResource";
import SectionItem from "../../../shared/ItemsList/ItemsListItem/SectionItem/SectionItem";

interface SectionItemTenderTypeProps {
  tenderType: number;
}

const SectionItemTenderType: React.FC<SectionItemTenderTypeProps> = ({
  tenderType,
}) => {
  const resource = useTenderTypesResource();
  let tenderTypeName: string = "";
  resource.data?.data.map((tenderTypeData) => {
    if (tenderTypeData.id === tenderType) tenderTypeName = tenderTypeData.name;
  });

  return (
    <SectionItem title="Способ закупки" icon={<FileProtectOutlined />}>
      {tenderTypeName}
    </SectionItem>
  );
};

export default SectionItemTenderType;

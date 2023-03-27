import { Tooltip } from "antd";
import RoundedTag from "./RoundedTag";

const TagWithTooltip = ({ title, color, children }) => {
  return (
    <Tooltip title={title}>
      <RoundedTag color={color}>{children}</RoundedTag>
    </Tooltip>
  );
};

export default TagWithTooltip;

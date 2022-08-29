import { Tag } from "antd";

const RoundedTag = ({ children, ...props }) => {
  return (
    <Tag
      {...props}
      style={{ borderRadius: 6, color: "black", borderColor: "black" }}
    >
      {children}
    </Tag>
  );
};

export default RoundedTag;

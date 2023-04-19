import UserPositionIcon from "@components/users/icons/UserPositionIcon";
import { Form, Input, Tooltip } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const FirstNameField: React.FC = () => {
  const label = <FormItemLabel text="Должность" icon={<UserPositionIcon />} />;

  return (
    <Tooltip title="Должность в организации" trigger="focus" placement="right">
      <Form.Item
        name="first_name"
        label={label}
        rules={[
          {
            required: true,
            message: "Введите должность",
          },
        ]}
      >
        <Input placeholder="Должность" />
      </Form.Item>
    </Tooltip>
  );
};

export default FirstNameField;

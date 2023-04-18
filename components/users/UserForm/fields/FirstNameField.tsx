import { Form, Input, Tooltip } from "antd";

const FirstNameField: React.FC = () => {
  return (
    <Tooltip title="Должность в организации" trigger="focus" placement="right">
      <Form.Item
        name="first_name"
        label="Должность"
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

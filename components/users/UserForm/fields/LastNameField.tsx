import { Form, Input, Tooltip } from "antd";

const LastNameField: React.FC = () => {
  return (
    <Tooltip
      title='Фамилия и инициалы пользователя: "Иванов И.И."'
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="last_name"
        label="Фамилия и инициалы"
        rules={[
          {
            required: true,
            message: "Введите фамилию и инициалы",
          },
        ]}
      >
        <Input placeholder="ФИО" />
      </Form.Item>
    </Tooltip>
  );
};

export default LastNameField;

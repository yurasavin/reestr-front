import { Form, Input, Tooltip } from "antd";

const UsernameField: React.FC = () => {
  return (
    <Tooltip
      title="Имя для входа в приложение"
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="username"
        label="Логин"
        rules={[
          {
            required: true,
            message: "Введите логин пользователя",
          },
        ]}
      >
        <Input placeholder="Логин" autoComplete="off" />
      </Form.Item>
    </Tooltip>
  );
};

export default UsernameField;

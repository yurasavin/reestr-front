import { Form, Input } from "antd";

const EmailField: React.FC = () => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          type: "email",
          message: "Введите корректный email",
        },
      ]}
    >
      <Input autoComplete="off" placeholder="Email" />
    </Form.Item>
  );
};

export default EmailField;

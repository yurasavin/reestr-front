import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const FormUsername = () => {
  return (
    <Form.Item
      name="username"
      label="Логин"
      rules={[
        {
          required: true,
          message: "Введите логин!",
        },
      ]}
    >
      <Input prefix={<UserOutlined />} />
    </Form.Item>
  );
};
export default FormUsername;

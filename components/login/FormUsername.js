import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";

const FormUsername = () => {
  return (
    <Form.Item
      name="username"
      rules={[
        {
          required: true,
          message: "Введите логин!",
        },
      ]}
    >
      <Input prefix={<UserOutlined />} placeholder="Логин" />
    </Form.Item>
  );
};
export default FormUsername;

import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";

const FormPassword = () => {
  return (
    <Form.Item
      name="password"
      rules={[
        {
          required: true,
          message: "Введите пароль!",
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Пароль"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};
export default FormPassword;

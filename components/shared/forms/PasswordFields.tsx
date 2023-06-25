import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";

const CurrentPasswordField: React.FC = () => {
  return (
    <Form.Item
      name="current_password"
      label="Текущий пароль"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Введите текущий пароль",
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Текущий пароль"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

export { CurrentPasswordField };

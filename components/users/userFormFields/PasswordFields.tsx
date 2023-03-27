import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { Form, Input } from "antd";

const PasswordField: React.FC = () => {
  return (
    <Form.Item
      name="password"
      label="Пароль"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Введите пароль",
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Пароль"
        autoComplete="off"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

const PasswordConfirmField: React.FC = () => {
  return (
    <Form.Item
      name="password_confirm"
      label="Подтверждение пароля"
      dependencies={["password"]}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Введите пароль",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }
            return Promise.reject(new Error("Пароли не совпадают!"));
          },
        }),
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Подтверждение пароля"
        autoComplete="off"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

export { PasswordConfirmField, PasswordField };

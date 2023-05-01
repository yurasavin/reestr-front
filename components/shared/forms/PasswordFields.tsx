import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import FormItemLabel from "@components/users/UserForm/fields/FormItemLabel/FormItemLabel";
import UserPasswordIcon from "@components/users/icons/UserPasswordIcon";
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

const PasswordField: React.FC = () => {
  const label = <FormItemLabel text="Пароль" icon={<UserPasswordIcon />} />;

  return (
    <Form.Item
      name="password"
      label={label}
      hasFeedback
      rules={[
        {
          required: true,
          message: "Введите пароль",
        },
      ]}
    >
      <Input.Password
        placeholder="Пароль"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

const PasswordConfirmField: React.FC = () => {
  const label = (
    <FormItemLabel text="Подтверждение пароля" icon={<UserPasswordIcon />} />
  );

  return (
    <Form.Item
      name="password_confirm"
      label={label}
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
        placeholder="Подтверждение пароля"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

export { CurrentPasswordField, PasswordConfirmField, PasswordField };

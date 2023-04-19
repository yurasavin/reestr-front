import UserLoginIcon from "@components/users/icons/UserLoginIcon";
import { Form, Input, Tooltip } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const UsernameField: React.FC = () => {
  const label = <FormItemLabel text="Логин" icon={<UserLoginIcon />} />;

  return (
    <Tooltip
      title="Имя для входа в приложение"
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="username"
        label={label}
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

import UserEmailIcon from "@components/users/icons/UserEmailIcon";
import { Form, Input } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const EmailField: React.FC = () => {
  const label = <FormItemLabel text="Email" icon={<UserEmailIcon />} />;

  return (
    <Form.Item
      name="email"
      label={label}
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

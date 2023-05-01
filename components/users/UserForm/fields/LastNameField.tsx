import UserNameIcon from "@components/users/icons/UserNameIcon";
import { Form, Input, Tooltip } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const LastNameField: React.FC = () => {
  const label = (
    <FormItemLabel text="Фамилия и инициалы" icon={<UserNameIcon />} />
  );

  return (
    <Tooltip
      title='Фамилия и инициалы пользователя: "Иванов И.И."'
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="last_name"
        label={label}
        rules={[
          {
            required: true,
            message: "Введите фамилию и инициалы",
          },
        ]}
      >
        <Input placeholder="ФИО" />
      </Form.Item>
    </Tooltip>
  );
};

export default LastNameField;

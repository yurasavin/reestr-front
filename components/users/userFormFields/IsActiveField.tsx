import { Form, Switch } from "antd";

const IsActiveField: React.FC = () => {
  return (
    <Form.Item
      name="is_active"
      valuePropName="checked"
      initialValue={true}
      label="Активный пользователь"
    >
      <Switch checkedChildren="Да" unCheckedChildren="Нет" />
    </Form.Item>
  );
};

export default IsActiveField;

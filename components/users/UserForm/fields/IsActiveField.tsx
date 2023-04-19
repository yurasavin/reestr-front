import UserStatus from "@components/users/UsersList/UserListItem/components/UserStatus/UserStatus";
import UserStatusIcon from "@components/users/icons/UserStatusIcon";
import { Form, Select } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const IsActiveField: React.FC = () => {
  const label = <FormItemLabel text="Статус" icon={<UserStatusIcon />} />;

  return (
    <Form.Item name="is_active" label={label}>
      <Select
        options={[
          { value: true, label: <UserStatus is_active /> },
          { value: false, label: <UserStatus is_active={false} /> },
        ]}
      />
    </Form.Item>
  );
};

export default IsActiveField;

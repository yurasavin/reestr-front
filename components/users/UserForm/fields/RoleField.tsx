import UserRoleIcon from "@components/users/icons/UserRoleIcon";
import { UserRole, UserRoleDispalay } from "@config/constants/userRoles";
import { Form, Select, Tooltip } from "antd";
import FormItemLabel from "./FormItemLabel/FormItemLabel";

const RoleField: React.FC = () => {
  const label = <FormItemLabel text="Роль" icon={<UserRoleIcon />} />;

  return (
    <Tooltip
      title="Роль пользователя в приложении"
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="role"
        label={label}
        rules={[
          {
            required: true,
            message: "Выберите роль",
          },
        ]}
      >
        <Select placeholder="Роль">
          {}
          <Select.Option value={UserRole.Planning}>
            {UserRoleDispalay[UserRole.Planning]}
          </Select.Option>
          <Select.Option value={UserRole.TenderSpecialist}>
            {UserRoleDispalay[UserRole.TenderSpecialist]}
          </Select.Option>
          <Select.Option value={UserRole.TenderSupervisor}>
            {UserRoleDispalay[UserRole.TenderSupervisor]}
          </Select.Option>
        </Select>
      </Form.Item>
    </Tooltip>
  );
};

export default RoleField;

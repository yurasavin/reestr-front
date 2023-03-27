import { Form, Select, Tooltip } from "antd";
import { UserRole, UserRoleDispalay } from "config/constants";

const RoleField: React.FC = () => {
  return (
    <Tooltip
      title="Роль пользователя в приложении"
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="role"
        label="Роль"
        rules={[
          {
            required: true,
            message: "Выберите роль",
          },
        ]}
      >
        <Select>
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

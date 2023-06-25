import { UserRole } from "@config/constants/userRoles";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import usePostForm from "@hooks/apis/resources/usePostForm";
import { Form, message, Modal } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { useContext } from "react";
import EmailField from "./fields/EmailField";
import FirstNameField from "./fields/FirstNameField";
import IsActiveField from "./fields/IsActiveField";
import LastNameField from "./fields/LastNameField";
import RoleField from "./fields/RoleField";
import UsernameField from "./fields/UsernameField";

export interface UserFormData {
  is_active: boolean;
  username: string;
  last_name: string;
  first_name: string;
  role: UserRole;
  email: string;
}

interface UserFormProps {
  close: () => void;
  initialValues?: UserFormData;
  editUserId?: number;
}

const UserForm: React.FC<UserFormProps> = ({
  close,
  initialValues = { is_active: true },
  editUserId,
}) => {
  const [form] = Form.useForm<UserFormData>();
  const { resource: usersResource } = useContext(UsersResourceContext);

  const path = editUserId ? `users/${editUserId}/update/` : "users/create/";
  const onSuccess = () => {
    usersResource?.mutate();
    const msg = editUserId ? "Изменения сохранены" : "Пользователь создан";
    message.success(msg);
    close();
  };
  const { loading, run } = usePostForm<UserFormData>({ path, onSuccess });

  const onOk = async () => {
    let values;

    try {
      values = await form.validateFields();
    } catch (error) {
      const validationError = error as ValidateErrorEntity<UserFormData>;
      if (validationError.errorFields) {
        message.warning("Проверьте правильность заполнения полей");
      } else {
        throw error;
      }
      return;
    }

    run(values);
  };

  return (
    <Modal
      open
      title={(editUserId ? "Редактирование" : "Создание") + " пользователя"}
      width={600}
      okText="Сохранить"
      cancelText="Отменить"
      confirmLoading={loading}
      onCancel={close}
      onOk={onOk}
    >
      <Form form={form} initialValues={initialValues} labelCol={{ span: 10 }}>
        <IsActiveField />
        <UsernameField />
        <LastNameField />
        <FirstNameField />
        <RoleField />
        <EmailField />
      </Form>
    </Modal>
  );
};

export default UserForm;

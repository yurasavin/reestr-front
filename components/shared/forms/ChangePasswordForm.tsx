import usePostForm from "@hooks/apis/resources/usePostForm";
import { Form, message, Modal } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import {
  CurrentPasswordField,
  PasswordConfirmField,
  PasswordField,
} from "./PasswordFields";

export interface ChangePasswordFormData {
  current_password: string;
  password: string;
  password_confirm: string;
}

interface ChangePasswordFormProps {
  close: () => void;
}

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({ close }) => {
  const [form] = Form.useForm<ChangePasswordFormData>();

  const path = "users/change-password/";
  const onSuccess = () => {
    message.success("Пароль изменен!");
    close();
  };

  const { loading, run } = usePostForm<ChangePasswordFormData>({
    path,
    onSuccess,
  });

  const onOk = async () => {
    let values;

    try {
      values = await form.validateFields();
    } catch (error) {
      const validationError =
        error as ValidateErrorEntity<ChangePasswordFormData>;
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
      title="Изменение пароля"
      width={600}
      okText="Сохранить"
      cancelText="Отменить"
      confirmLoading={loading}
      onCancel={close}
      onOk={onOk}
    >
      <Form form={form} name="password-change-form" labelCol={{ span: 8 }}>
        <CurrentPasswordField />
        <PasswordField />
        <PasswordConfirmField />
      </Form>
    </Modal>
  );
};

export default ChangePasswordForm;

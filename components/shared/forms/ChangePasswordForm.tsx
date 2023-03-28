import useHeaders from "@hooks/apis/resources/useHeaders";
import { ErrorResponse } from "@services/api";
import { useRequest } from "ahooks";
import { Form, message, Modal } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { fetcher } from "services/api";
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
  const headers = useHeaders();

  const postForm = async (formValues: ChangePasswordFormData) => {
    const path = "users/change-password/";
    const method = "POST";
    return fetcher({
      path,
      fetchParams: { method, body: JSON.stringify(formValues), headers },
    });
  };

  const { loading, run } = useRequest(postForm, {
    manual: true,
    onSuccess: () => {
      message.success("Пароль изменен!");
      close();
    },
    onError: (error: ErrorResponse | TypeError) => {
      const responseError = error as ErrorResponse;
      if (responseError.data && responseError.status === 400) {
        for (const fieldName in responseError.data) {
          const errorMessage = responseError.data[fieldName];
          message.warning(errorMessage);
        }
      } else {
        message.warning("Что-то пошло не так. Уже работаем над проблемой");
      }
      console.error(error);
    },
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

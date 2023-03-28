import { UserRole } from "@config/constants";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import useHeaders from "@hooks/apis/resources/useHeaders";
import { ErrorResponse } from "@services/api";
import { useRequest } from "ahooks";
import { Form, message, Modal, UploadFile } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { useContext } from "react";
import { fetcher } from "services/api";
import {
  PasswordConfirmField,
  PasswordField,
} from "../shared/forms/PasswordFields";
import AvatarField from "./userFormFields/AvatarField";
import EmailField from "./userFormFields/EmailField";
import FirstNameField from "./userFormFields/FirstNameField";
import IsActiveField from "./userFormFields/IsActiveField";
import LastNameField from "./userFormFields/LastNameField";
import RoleField from "./userFormFields/RoleField";
import UsernameField from "./userFormFields/UsernameField";

export interface UserFormData {
  is_active: boolean;
  username: string;
  last_name: string;
  first_name: string;
  role: UserRole;
  email: string;
  password?: string;
  password_confirm?: string;
  avatar?: [UploadFile];
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
  const headers = useHeaders({});
  const { resource: usersResource } = useContext(UsersResourceContext);

  const postForm = async (formValues: UserFormData) => {
    const formData = new FormData();

    for (const name in formValues) {
      if (name === "avatar") {
        if (formValues.avatar && formValues.avatar[0].originFileObj) {
          const avatarFile = formValues.avatar[0].originFileObj;
          const avatarArray = [new Uint8Array(await avatarFile.arrayBuffer())];
          const avatarBlob = await new Blob(avatarArray, {
            type: avatarFile.type,
          });
          formData.append("avatar", avatarBlob, avatarFile.name);
        } else if (formValues.avatar && formValues.avatar[0].url) {
          // skip adding avatar to the form in this case, because
          // it's url of the current avatar
        } else {
          formData.append(name, "");
        }
      } else {
        const value = formValues[name as keyof UserFormData];
        if (value) {
          formData.append(name, value.toString());
        }
      }
    }

    const path = editUserId ? `users/${editUserId}/` : "users/";
    const method = editUserId ? "PATCH" : "POST";
    return fetcher({
      path,
      fetchParams: { method, body: formData, headers },
    });
  };

  const { loading, run } = useRequest(postForm, {
    manual: true,
    onSuccess: () => {
      usersResource?.mutate();
      message.success("Изменения сохранены!");
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
      <Form
        form={form}
        initialValues={initialValues}
        name="user-form"
        labelCol={{ span: 8 }}
      >
        <AvatarField />
        <IsActiveField />
        <UsernameField />
        <LastNameField />
        <FirstNameField />
        <RoleField />
        <EmailField />
        {!editUserId && (
          <>
            <PasswordField />
            <PasswordConfirmField />
          </>
        )}
      </Form>
    </Modal>
  );
};

export default UserForm;

import { UsersResourceContext } from "@contexts/users/UsersResourceContext";

import usePostForm from "@hooks/apis/resources/usePostForm";
import { Form, Input, message, Modal } from "antd";
import { ValidateErrorEntity } from "rc-field-form/es/interface";
import { useContext } from "react";
import UserPasswordIcon from "../icons/UserPasswordIcon";
import FormItemLabel from "./fields/FormItemLabel/FormItemLabel";

export interface UserChangePasswordFormData {
  password: string;
  password_confirm: string;
}

interface UserChangePasswordFormProps {
  close: () => void;
  userId: number;
}

const UserChangePasswordForm: React.FC<UserChangePasswordFormProps> = ({
  close,
  userId,
}) => {
  const [form] = Form.useForm<UserChangePasswordFormData>();
  const { resource: usersResource } = useContext(UsersResourceContext);
  const path = `users/${userId}/change-password/`;

  const onSuccess = () => {
    usersResource?.mutate();
    message.success("Пароль изменен!");
    close();
  };

  const { loading, run } = usePostForm<UserChangePasswordFormData>({
    path,
    onSuccess,
  });

  const onOk = async () => {
    let values;

    try {
      values = await form.validateFields();
    } catch (error) {
      const validationError =
        error as ValidateErrorEntity<UserChangePasswordFormData>;
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
      title={"Изменение пароля"}
      width={600}
      okText="Сохранить"
      cancelText="Отменить"
      confirmLoading={loading}
      onCancel={close}
      onOk={onOk}
    >
      <Form form={form} labelCol={{ span: 10 }}>
        <Form.Item
          name="password"
          label={
            <FormItemLabel text="Новый пароль" icon={<UserPasswordIcon />} />
          }
          hasFeedback
          rules={[
            {
              required: true,
              message: "Введите пароль",
            },
          ]}
        >
          <Input placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          name="password_confirm"
          label={
            <FormItemLabel
              text="Подтверждение пароля"
              icon={<UserPasswordIcon />}
            />
          }
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Введите пароль",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Пароли не совпадают!"));
              },
            }),
          ]}
        >
          <Input placeholder="Подтверждение пароля" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserChangePasswordForm;

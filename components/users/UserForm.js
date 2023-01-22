import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
} from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Form, Input, message, Modal, Select, Switch, Tooltip } from "antd";
import {
  ROLES,
  ROLE_READER,
  ROLE_SUPER_USER,
  ROLE_WRITER,
} from "config/constants";
import { EditUserContext } from "contexts/EditUserContext";
import { useContext, useEffect } from "react";
import { fetcher } from "services/api";
import { useSWRConfig } from "swr";
import AvatarField from "./userFormFields/AvatarField";

const IsActiveField = () => {
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

const UsernameField = () => {
  return (
    <Tooltip
      title="Имя для входа в приложение"
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="username"
        label="Логин"
        rules={[
          {
            required: true,
            message: "Введите логин пользователя",
          },
        ]}
      >
        <Input placeholder="Логин" autoComplete="off" />
      </Form.Item>
    </Tooltip>
  );
};

const FirstNameField = () => {
  return (
    <Tooltip title="Должность в организации" trigger="focus" placement="right">
      <Form.Item
        name="first_name"
        label="Должность"
        rules={[
          {
            required: true,
            message: "Введите должность",
          },
        ]}
      >
        <Input placeholder="Должность" />
      </Form.Item>
    </Tooltip>
  );
};

const LastNameField = () => {
  return (
    <Tooltip
      title='Фамилия и инициалы пользователя: "Иванов И.И."'
      trigger="focus"
      placement="right"
    >
      <Form.Item
        name="last_name"
        label="Фамилия и инициалы"
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

const EmailField = () => {
  return (
    <Form.Item
      name="email"
      label="Email"
      rules={[
        {
          type: "email",
          message: "Введите корректный email",
        },
      ]}
    >
      <Input autoComplete="off" placeholder="Email" />
    </Form.Item>
  );
};

const RoleField = () => {
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
          <Select.Option value={ROLE_READER}>
            {ROLES[ROLE_READER]}
          </Select.Option>
          <Select.Option value={ROLE_WRITER}>
            {ROLES[ROLE_WRITER]}
          </Select.Option>
          <Select.Option value={ROLE_SUPER_USER}>
            {ROLES[ROLE_SUPER_USER]}
          </Select.Option>
        </Select>
      </Form.Item>
    </Tooltip>
  );
};

const PasswordField = () => {
  return (
    <Form.Item
      name="password"
      label="Пароль"
      hasFeedback
      rules={[
        {
          required: true,
          message: "Введите пароль",
        },
      ]}
    >
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Пароль"
        autoComplete="off"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

const PasswordConfirmField = () => {
  return (
    <Form.Item
      name="password_confirm"
      label="Подтверждение пароля"
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
      <Input.Password
        prefix={<LockOutlined />}
        placeholder="Подтверждение пароля"
        autoComplete="off"
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
      />
    </Form.Item>
  );
};

const UserForm = () => {
  const [form] = Form.useForm();
  const { editUser, setEditUser } = useContext(EditUserContext);
  const [modal, ContextHolder] = Modal.useModal();
  const { mutate } = useSWRConfig();

  useEffect(() => {
    if (editUser) {
      form.setFieldsValue(editUser);
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editUser?.id]);

  const postForm = async (formValues) => {
    const formData = new FormData();

    for (const name in formValues) {
      if (name === "avatar") {
        if (!formValues.avatar || typeof formValues.avatar === "string") {
          continue;
        } else if (!formValues.avatar.fileList[0]) {
          formData.append(name, null);
        } else {
          const avatarFile = formValues.avatar.fileList[0].originFileObj;
          const avatarArray = [new Uint8Array(await avatarFile.arrayBuffer())];
          const avatarBlob = await new Blob(avatarArray, {
            type: avatarFile.type,
          });
          formData.append("avatar", avatarBlob, avatarFile.name);
        }
      } else {
        formData.append(name, formValues[name]);
      }
    }

    const path = editUser.id ? `users/${editUser.id}/` : "users/";
    const method = editUser.id ? "PATCH" : "POST";
    return fetcher(path, {}, { method, body: formData }, true);
  };

  const onSuccess = ({ data }) => {
    mutate(["users/", undefined]);
    message.success("Изменения сохранены!");
    setEditUser(null);
  };

  const onError = (error) => {
    if (error.status === 400 && error.data) {
      for (const fieldName in error.data) {
        const errorMessage = error.data[fieldName];
        message.warning(errorMessage);
      }
    } else {
      message.warning("Что-то пошло не так. Уже работаем над проблемой");
    }
    console.error(error);
  };

  const { loading, run } = useRequest(postForm, {
    manual: true,
    onSuccess,
    onError,
  });

  const onOk = async () => {
    let values;

    try {
      values = await form.validateFields();
    } catch (error) {
      if (error?.errorFields) {
        message.warning("Проверьте правильность заполнения полей");
      } else {
        throw error;
      }
      return;
    }

    run(values);
  };

  return (
    <>
      {ContextHolder}
      <Modal
        open={!!editUser}
        title={(editUser?.id ? "Редактирование" : "Создание") + " пользователя"}
        width={600}
        okText="Сохранить"
        cancelText="Отменить"
        confirmLoading={loading}
        onCancel={() => setEditUser(null)}
        onOk={onOk}
      >
        <Form form={form} name="user-form" labelCol={{ span: 8 }}>
          <AvatarField form={form} />
          <IsActiveField />
          <UsernameField />
          <LastNameField />
          <FirstNameField />
          <RoleField />
          <EmailField />
          {!editUser?.id && (
            <>
              <PasswordField />
              <PasswordConfirmField />
            </>
          )}
        </Form>
      </Modal>
    </>
  );
};

export default UserForm;

import { LoadingOutlined } from "@ant-design/icons";
import { useRequest } from "ahooks";
import { Button, Checkbox, Form, message, Spin } from "antd";
import { useContext } from "react";
import styles from "./Login.module.css";

import { UserContext } from "@contexts/UserContext";
import { UserResponse } from "@hooks/apis/useUser";
import { ErrorResponse, fetcher, Response } from "@services/api";
import FormPassword from "./FormPassword";
import FormUsername from "./FormUsername";

interface LoginFormData {
  username: string;
  password: string;
  remember: boolean;
}

interface LoginResponse {
  token: string;
  user: UserResponse;
}

const Login: React.FC = () => {
  const { user, setUser, isMutating } = useContext(UserContext);

  const onFinish = async (formValues: LoginFormData) => {
    const response: Response<LoginResponse> = await fetcher({
      path: "auth/login/",
      fetchParams: {
        method: "POST",
        body: JSON.stringify(formValues),
      },
      headers: { "Content-Type": "application/json" },
    });
    return response;
  };

  const onSuccess = ({ data }: Response<LoginResponse>) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
      if (setUser) {
        setUser(data.user);
      }
    }
  };

  const onError = (error: Error | ErrorResponse) => {
    if (!(error instanceof Error) && error.status === 400) {
      message.warning("Проверьте правильность логина и пароля");
    } else {
      message.warning("Что-то пошло не так. Уже работаем над проблемой");
      console.error(error);
    }
  };

  const { loading, run } = useRequest(onFinish, {
    manual: true,
    onSuccess,
    onError,
  });

  if (isMutating) {
    return (
      <div className={styles["container-outer"]}>
        <div className={styles["container-inner"]}>
          Загрузка...
          <Spin
            indicator={<LoadingOutlined className={styles.spinner} spin />}
          />
        </div>
      </div>
    );
  } else if (user) {
    return null;
  }

  return (
    <div className={styles["container-outer"]}>
      <div className={styles["container-inner"]}>
        <Form
          name="login-form"
          className={styles.form}
          requiredMark={false}
          initialValues={{
            remember: true,
          }}
          onFinish={run}
          labelCol={{ span: 5 }}
        >
          <FormUsername />
          <FormPassword />
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>

            <a className={styles.forgot} href="">
              Восстановить пароль
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              className={styles["login-button"]}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;

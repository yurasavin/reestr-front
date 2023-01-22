import { useRequest } from "ahooks";
import { Button, Checkbox, Form, message } from "antd";
import { useContext } from "react";
import styles from "styles/Login.module.css";

import { UserContext } from "contexts/UserContext";
import { fetcher } from "services/api";
import FormPassword from "./FormPassword";
import FormUsername from "./FormUsername";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const onFinish = async (formValues) => {
    const response = await fetcher(
      "auth/login/",
      {},
      {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: { "Content-Type": "application/json", Authorization: null },
      }
    );
    return response;
  };

  const onSuccess = ({ data }) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
  };

  const onError = (error) => {
    if (error.status === 400) {
      message.warning(
        "Аккаунт не найден. Проверьте правильность логина и пароля"
      );
    } else {
      message.warning("Что-то пошло не так. Уже работаем над проблемой");
    }
    console.error(error);
  };

  const { loading, run } = useRequest(onFinish, {
    manual: true,
    onSuccess,
    onError,
  });

  if (user) {
    return;
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

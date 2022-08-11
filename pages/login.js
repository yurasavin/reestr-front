import { useRequest } from "ahooks";
import { Button, Checkbox, Form, message } from "antd";
import { useRouter } from "next/router";
import React from "react";
import FormPassword from "../components/login/FormPassword";
import FormUsername from "../components/login/FormUsername";
import styles from "../styles/Login.module.css";

import { fetcher } from "../services/api";

const Login = () => {
  const router = useRouter();

  const onFinish = async (formValues) => {
    const response = await fetcher("auth/login/", {
      method: "POST",
      body: JSON.stringify(formValues),
    });
    return response;
  };

  const onSuccess = ({ data }) => {
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    router.push("/");
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

  return (
    <Form
      name="login-form"
      className={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={run}
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
  );
};

export default Login;

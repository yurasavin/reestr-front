import { Button, Checkbox, Form, Spin } from "antd";
import React from "react";
import FormPassword from "../components/login/FormPassword";
import FormUsername from "../components/login/FormUsername";
import useSubmitLogin from "../hooks/apis/useSubmitLogin";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isFetching, onFinish] = useSubmitLogin();

  return (
    <Form
      name="login-form"
      className={styles.form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
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

      <Spin spinning={isFetching}>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles["login-button"]}
          >
            Войти
          </Button>
        </Form.Item>
      </Spin>
    </Form>
  );
};

export default Login;

import { useRequest } from "ahooks";
import { Button, Form, message } from "antd";
import { useContext } from "react";
import { useSWRConfig } from "swr";
import styles from "./Login.module.css";

import BluredLayout from "@components/shared/BluredLayout/BluredLayout";
import { UserContext } from "@contexts/UserContext";
import useHeaders from "@hooks/apis/resources/useHeaders";
import { ErrorResponse, fetcher, Response } from "@services/api";
import FormPassword from "../FormPassword";
import FormUsername from "../FormUsername";

interface LoginFormData {
  username: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

const Login: React.FC = () => {
  const { setAccessToken, setRefreshToken } = useContext(UserContext);
  const { mutate } = useSWRConfig();
  const headers = useHeaders();

  const onFinish = async (formValues: LoginFormData) => {
    const requestData = {
      client_id: process.env.NEXT_PUBLIC_AUTH_CLIENT_ID,
      grant_type: "password",
      ...formValues,
    };

    const response: Response<LoginResponse> = await fetcher({
      path: "oauth/token/",
      fetchParams: {
        method: "POST",
        body: JSON.stringify(requestData),
        headers,
      },
    });
    return response;
  };

  const onSuccess = ({ data }: Response<LoginResponse>) => {
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);
    mutate(() => true, undefined, { revalidate: false });
  };

  const onError = (error: Error | ErrorResponse) => {
    if (!(error instanceof Error) && error.status === 400) {
      message.warning("Проверьте правильность логина и пароля");
    }
  };

  const { loading, run } = useRequest(onFinish, {
    manual: true,
    onSuccess,
    onError,
  });

  return (
    <BluredLayout>
      <Form
        name="login-form"
        className={styles.form}
        requiredMark={false}
        onFinish={run}
        labelCol={{ span: 5 }}
      >
        <FormUsername />
        <FormPassword />
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
    </BluredLayout>
  );
};

export default Login;

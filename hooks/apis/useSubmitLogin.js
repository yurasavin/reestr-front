import { message } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { fetcher } from "../../services/api";

const useSubmitLogin = () => {
  const [isFetching, setIsFetching] = useState(false);
  const router = useRouter();

  const onFinish = async (formValues) => {
    setIsFetching(true);

    try {
      const response = await fetcher("auth/login/", {
        method: "POST",
        body: JSON.stringify(formValues),
      });

      if (response.status === 400) {
        message.warning(
          "Аккаунт не найден. Проверьте правильность логина и пароля"
        );
      } else if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        router.push("/");
      }
    } catch {
      message.warning("Что-то пошло не так. Уже работаем над проблемой");
    } finally {
      setIsFetching(false);
    }
  };

  return [isFetching, onFinish];
};

export default useSubmitLogin;

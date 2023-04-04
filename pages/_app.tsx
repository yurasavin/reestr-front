import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";

import Login from "@components/login/Login";
import { UserProvider } from "@contexts/UserContext";
import type { AppProps } from "next/app";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      locale={ruRu}
      theme={{
        token: {
          fontFamily: "'Fira Sans', sans-serif",
        },
        components: {
          Menu: {
            colorItemBgSelected: "rgb(4 84 231)",
          },
          FloatButton: {
            colorPrimary: "rgb(4 84 231)",
          },
        },
      }}
    >
      <UserProvider>
        <Login />
        <Component {...pageProps} />
      </UserProvider>
    </ConfigProvider>
  );
}

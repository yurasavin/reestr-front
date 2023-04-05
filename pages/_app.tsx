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
          fontFamily: "var(--font-family)",
        },
        components: {
          Menu: {
            colorItemBgSelected: "var(--primary)",
          },
          FloatButton: {
            colorPrimary: "var(--primary)",
            colorPrimaryHover: "var(--primary-hover)",
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

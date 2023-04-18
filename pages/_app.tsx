import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";

import Login from "@components/login/Login/Login";
import { UserProvider } from "@contexts/UserContext";
import "dayjs/locale/ru";
import type { AppProps } from "next/app";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      // Move this code to dedicated component
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
          Select: {
            controlItemBgActive: "var(--item-hover)",
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

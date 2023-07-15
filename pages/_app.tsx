import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";

import { UserProvider } from "@contexts/UserContext";
import "dayjs/locale/ru";
import type { AppProps } from "next/app";
import "/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      // Refactor this code to dedicated component
      locale={ruRu}
      theme={{
        token: {
          fontFamily: "var(--font-family)",
        },
        components: {
          Menu: {
            itemSelectedBg: "var(--primary)",
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
        <Component {...pageProps} />
      </UserProvider>
    </ConfigProvider>
  );
}

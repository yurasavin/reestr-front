import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import "moment/locale/ru";

import "antd/dist/antd.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={ruRu}>
      <Component {...pageProps} />
    </ConfigProvider>
  );
}

export default MyApp;

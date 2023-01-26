import { ConfigProvider } from "antd";
import ruRu from "antd/locale/ru_RU";
import "moment/locale/ru";

import Login from "components/login/Login";
import { UserProvider } from "contexts/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={ruRu}>
      <UserProvider>
        <Login />
        <Component {...pageProps} />
      </UserProvider>
    </ConfigProvider>
  );
}

export default MyApp;

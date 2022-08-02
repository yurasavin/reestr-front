import "antd/dist/antd.css";
import SiteLayout from "../components/base/SiteLayout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SiteLayout>
      <Component {...pageProps} />
    </SiteLayout>
  );
}

export default MyApp;

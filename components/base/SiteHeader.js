import { Layout } from "antd";

const SiteHeader = () => {
  return (
    <Layout.Header
      className="site-layout-background"
      style={{
        padding: 0,
        color: "white",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        height: "7vh",
        fontSize: 20,
      }}
    >
      Реестр Закупок ГБУ РО &quot;КВД&quot;
    </Layout.Header>
  );
};
export default SiteHeader;

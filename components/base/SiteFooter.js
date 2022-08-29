import { Layout } from "antd";

const SiteFooter = () => {
  return (
    <Layout.Footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "4vh",
        padding: 0,
        backgroundColor: "#001529",
        color: "white",
        fontSize: 12,
      }}
    >
      ГБУ РО КВД ©2022
    </Layout.Footer>
  );
};
export default SiteFooter;

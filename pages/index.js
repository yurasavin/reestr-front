import SiteLayout from "../components/base/SiteLayout";
import getSiderCollapsedCookie from "../helpers/getSiderCollapsedCookie";

function Home({ siderCollapsed }) {
  return (
    <SiteLayout siderCollapsed={siderCollapsed}>
      <div>Some content</div>
    </SiteLayout>
  );
}

export async function getServerSideProps(context) {
  return { props: { siderCollapsed: getSiderCollapsedCookie(context) } };
}

export default Home;

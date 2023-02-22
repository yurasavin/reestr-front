import SiteLayout from "@components/base/SiteLayout";
import { SiderCollapsedProvider } from "@contexts/SiderCollapsedContext";
import {
  getSiderCollapsedServerSideProps,
  SiderCollapsedPageProps,
} from "@helpers/getSiderCollapsedCookie";

const Home: React.FC<SiderCollapsedPageProps> = ({ siderCollapsed }) => {
  return (
    <SiderCollapsedProvider value={siderCollapsed}>
      <SiteLayout>
        <div>Некоторые данные</div>
      </SiteLayout>
    </SiderCollapsedProvider>
  );
};

export default Home;
export { getSiderCollapsedServerSideProps as getServerSideProps };

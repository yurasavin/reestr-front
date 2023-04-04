import TicketAddButton from "@components/tickets/TicketAddButton";
import TicketsList from "@components/tickets/TicketsList";
import { SiderCollapsedProvider } from "@contexts/SiderCollapsedContext";
import {
  getSiderCollapsedServerSideProps,
  SiderCollapsedPageProps,
} from "@helpers/getSiderCollapsedCookie";

import SiteLayout from "../components/base/SiteLayout";

const Tickets: React.FC<SiderCollapsedPageProps> = ({ siderCollapsed }) => {
  return (
    <SiderCollapsedProvider value={siderCollapsed}>
      <SiteLayout>
        <TicketsList />
        <TicketAddButton />
      </SiteLayout>
    </SiderCollapsedProvider>
  );
};

export { getSiderCollapsedServerSideProps as getServerSideProps };
export default Tickets;

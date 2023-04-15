import TicketAddButton from "@components/tickets/TicketAddButton";
import TicketsList from "@components/tickets/TicketsList";
import { SiderCollapsedProvider } from "@contexts/SiderCollapsedContext";
import {
  getSiderCollapsedServerSideProps,
  SiderCollapsedPageProps,
} from "@helpers/getSiderCollapsedCookie";

import SiteLayout from "@components/base/SiteLayout";
import TicketFilters from "@components/tickets/TicketFilters";
import { TicketsResourceProvider } from "@contexts/tickets/TicketsResourceContext";

const Tickets: React.FC<SiderCollapsedPageProps> = ({ siderCollapsed }) => {
  return (
    <SiderCollapsedProvider value={siderCollapsed}>
      <SiteLayout>
        <TicketsResourceProvider>
          <TicketFilters />
          <TicketsList />
        </TicketsResourceProvider>
        <TicketAddButton />
      </SiteLayout>
    </SiderCollapsedProvider>
  );
};

export { getSiderCollapsedServerSideProps as getServerSideProps };
export default Tickets;

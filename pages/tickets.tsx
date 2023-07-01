import TicketAddButton from "@components/tickets/TicketAddButton";
import TicketsList from "@components/tickets/TicketsList/TicketsList";
import { SiderCollapsedProvider } from "@contexts/SiderCollapsedContext";
import {
  getSiderCollapsedServerSideProps,
  SiderCollapsedPageProps,
} from "@helpers/getSiderCollapsedCookie";

import SiteLayout from "@components/base/SiteLayout/SiteLayout";
import TicketFilters from "@components/tickets/TicketFilters/TicketFilters";
import { TicketsResourceProvider } from "@contexts/tickets/TicketsResourceContext";
import { SWRConfig } from "swr";

const Tickets: React.FC<SiderCollapsedPageProps> = ({ siderCollapsed }) => {
  return (
    <SiderCollapsedProvider value={siderCollapsed}>
      <SiteLayout>
        <TicketsResourceProvider>
          <TicketFilters />
          <SWRConfig value={{ provider: () => new Map() }}>
            <TicketsList />
          </SWRConfig>
        </TicketsResourceProvider>
        <TicketAddButton />
      </SiteLayout>
    </SiderCollapsedProvider>
  );
};

export { getSiderCollapsedServerSideProps as getServerSideProps };
export default Tickets;

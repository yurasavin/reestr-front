import ItemsList from "@components/shared/ItemsList/ItemsList";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import React, { useContext } from "react";
import TicketListItem from "./TicketListItem/TicketListItem";
import TicketListItemSkeleton from "./TicketListItemSkeleton/TicketListItemSkeleton";

const TicketsList: React.FC = () => {
  const { resource } = useContext(TicketsResourceContext);

  return (
    <ItemsList
      resource={resource}
      SkeletonItem={TicketListItemSkeleton}
      ListItem={TicketListItem}
    />
  );
};

export default TicketsList;

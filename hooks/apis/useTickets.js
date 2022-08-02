import useResource from "./useResource";

const useTickets = (year = "") => {
  const path = year ? `tickets/?year${year}` : "tickets/";
  return useResource(path);
};

export default useTickets;

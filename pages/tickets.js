import useTickets from "../hooks/apis/useTickets";

const Tickets = () => {
  const resource = useTickets();

  if (resource.error)
    return (
      <div>
        Ошибка...
        <br />
        {resource.error.toString()}
      </div>
    );

  if (!resource.data) return <div>загрузка...</div>;

  return <div>{JSON.stringify(resource.data)}</div>;
};
export default Tickets;

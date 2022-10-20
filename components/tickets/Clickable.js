const Clickable = ({ onClick, children }) => {
  const style = {
    cursor: "pointer",
  };
  return (
    <span onClick={onClick} style={style}>
      {children}
    </span>
  );
};

export default Clickable;

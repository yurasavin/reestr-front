const InputGroup = ({ labelName, children }) => {
  return (
    <div
      style={{
        border: "1px solid white",
        borderRadius: 5,
        padding: 4,
        width: 250,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <label
        style={{
          fontWeight: 400,
        }}
      >
        {labelName}:
      </label>
      {children}
    </div>
  );
};

export default InputGroup;

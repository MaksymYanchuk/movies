import img from "./error.gif";
const ErrorMessage = () => {
  return (
    <img
      style={{
        display: "block",
        margin: "10px auto",
        width: "550px",
        height: "260px",
      }}
      src={img}
      alt="Error"
    />
  );
};

export default ErrorMessage;

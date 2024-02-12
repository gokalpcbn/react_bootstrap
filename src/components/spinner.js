import Spinner from "react-bootstrap/Spinner";

function BasicSpinner(props) {
  return (
    <Spinner
      animation="border"
      varian={props.colo ? "blue" : "warning"}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default BasicSpinner;

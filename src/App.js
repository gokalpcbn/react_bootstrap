import logo from "./logo.svg";
// import './App.css';
// import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import StaticExample from "./components/modal";
import BasicSpinner from "./components/spinner";

function App() {
  return (
    <div class="container" style={{ width: "100%" }}>
      <div className="row">
        <div className="col-lg-3" style={{ backgroundColor: "red" }}>
          1
        </div>
        <div className="col-lg-6" style={{ backgroundColor: "blue" }}>
          2
        </div>
        <div className="col-lg-3" style={{ backgroundColor: "green" }}>
          3
        </div>
        <BasicSpinner />
      </div>
      <StaticExample />
      <StaticExample />
      <StaticExample />
      <BasicSpinner color="blue" />
      <BasicSpinner />
      <BasicSpinner />
    </div>
  );
}

export default App;

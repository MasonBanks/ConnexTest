import React from "react";
import ReactDOM from "react-dom";
import BoxCon from "./container/box-container.js";
import "./index.css";
// import { createStore, applyMiddleware } from "redux";

class App extends React.Component {
  render() {
    return <BoxCon></BoxCon>;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

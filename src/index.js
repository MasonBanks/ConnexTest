import React from "react";
import ReactDOM from "react-dom";
import BoxCon from "./container/box-container.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import { Paper } from "@material-ui/core";
import "./index.css";
import NavBar from "./components/topBar";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return (
      <Paper className="App">
        <NavBar />
        <BoxCon />
      </Paper>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

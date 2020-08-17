import React from "react";
import ReactDOM from "react-dom";
import BoxCon from "./container/box-container.js";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import "./index.css";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return <BoxCon></BoxCon>;
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

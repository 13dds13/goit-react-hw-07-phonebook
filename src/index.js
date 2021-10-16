import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "modern-normalize/modern-normalize.css";
import store from "./redux/store";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

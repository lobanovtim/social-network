import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.js";
import store from "./redux/redux-store.js";
import reportWebVitals from "./reportWebVitals";

ReactDom.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();

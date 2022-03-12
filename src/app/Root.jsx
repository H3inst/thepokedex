import React from "react";
import { Provider } from "react-redux";
import Modal from "../components/common/Modal";
//
import { store } from "../config/store";
import App from "./App";

function Root() {
  return (
    <Provider store={store}>
      <Modal />
      <App />
    </Provider>
  );
}

export default Root;

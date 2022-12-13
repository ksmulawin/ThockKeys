import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ShopReducers from "./reducers/ShopReducers";
import CartReducers from "./reducers/CartReducers";

const store = configureStore({
  reducer: {
    products : ShopReducers,
    cartItems : CartReducers
  },
});


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

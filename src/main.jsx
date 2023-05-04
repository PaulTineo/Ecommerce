import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
//import product provider
import ProductProvider from "./contexts-api/context/ProductContext.jsx";
//import redux
import { Provider } from "react-redux";
//import store
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProductProvider>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ProductProvider>
);

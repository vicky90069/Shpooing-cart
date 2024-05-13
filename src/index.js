import React from "react";
import { createRoot } from "react-dom"; // Correct import statement
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import { Toaster } from "react-hot-toast";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <BrowserRouter>
        <Provider store={store}>
          <App />
          <Toaster/>
        </Provider>
    </BrowserRouter>
  </>
);

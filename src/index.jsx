import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

/** Styles */
import "./index.scss";

import App from "./App";
// import AuthProvider from "./Context/Context";

const app = (
  // <AuthProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </AuthProvider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

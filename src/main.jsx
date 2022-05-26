import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { ContinentProvider } from "./context/ContinentProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContinentProvider>
        <App />
      </ContinentProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { AnimeProvider } from "./context/AnimeProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimeProvider>
        <App />
      </AnimeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

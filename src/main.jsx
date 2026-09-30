import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Route from "./routes/Routes.jsx";
import "./styles/main.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Route />
  
  </StrictMode>
);

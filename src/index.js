import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ModelPopUp from "./ModelPopUp";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ModelPopUp />
  </StrictMode>
);

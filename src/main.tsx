import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IndexPage } from "@/pages/index-page";
import "@/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element #root was not found.");
}

createRoot(root).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>
);

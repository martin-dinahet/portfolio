import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IndexPage } from "@/pages/index-page";
import "@/globals.css";

// biome-ignore lint/style/noNonNullAssertion: <>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IndexPage />
  </StrictMode>,
);

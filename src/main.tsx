import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { IndexPage } from "@/pages/index-page";
import "@/globals.css";

// biome-ignore lint/style/noNonNullAssertion: don't worry bro, it's there for sure
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TooltipProvider>
      <IndexPage />
    </TooltipProvider>
  </StrictMode>
);

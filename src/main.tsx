import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { DefaultLayout } from "./layouts/default.layout";
import { IndexPage } from "./pages/index.page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);

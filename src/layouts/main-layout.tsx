import React from "react";

import { Outlet } from "react-router-dom";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

export const MainLayout: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-screen">
        <ThemeProvider>
          <Header />
          <Outlet />
          <Footer />
        </ThemeProvider>
      </div>
    </>
  );
};

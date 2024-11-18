"use client";

import { useEffect, useState } from "react";
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ThemeSwitcher = (): React.JSX.Element => {
  const [theme, setTheme] = useState(
    typeof window !== "undefined" ? localStorage.getItem("theme") : "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button variant="ghost" onClick={toggleTheme}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

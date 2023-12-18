"use client"
import { createContext, useEffect, useState } from "react";
import { Props } from "@/app/interfaces/IProps";

export type Theme = "light" | "dark";
export type ThemeContextType = {
  theme: Theme|null;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType|null>(null);

function getTheme(): Theme {
  const currentTheme = localStorage.getItem("theme") || "light";
  return currentTheme as Theme;
}

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme|null>(null);

  function initialize() {
    const currentTheme = getTheme();
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }

  useEffect(() => {
    initialize();
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
export { ThemeContext };

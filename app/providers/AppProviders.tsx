"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { ThemeVariables } from "@/components/ThemeVariables";
import { ThemeIndicator } from "@/components/ThemeIndicator";

type DarkModeContextType = {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  isDarkMode: false,
  setIsDarkMode: () => {},
});

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within an AppProvider");
  }
  return [context.isDarkMode, context.setIsDarkMode] as const;
};

export function AppProviders({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("darkMode", "true");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("darkMode", "false");
      }
    }
  }, [isDarkMode, mounted]);

  if (!mounted) return null;

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <ThemeProvider>
        <ThemeVariables />
        <div className="min-h-screen bg-theme-bg-primary text-theme-text-primary transition-colors duration-200">
          <ThemeIndicator />
          {children}
        </div>
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

"use client";

import { Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/app/providers/AppProviders";

export const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full bg-[var(--theme-bg-secondary)] text-theme-text-primary transition-colors duration-200"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

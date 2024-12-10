"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const ThemeIndicator = () => {
  const { activeTheme, theme } = useTheme();

  return (
    <div className="fixed top-4 right-4 p-4 bg-theme-bg-secondary border border-theme-border-primary rounded-lg flex flex-col gap-2 z-50 shadow-lg">
      <div className="font-bold">Active Theme: {activeTheme}</div>
      <ThemeSwitcher />
      <div
        className="h-8 w-8 rounded-full border-2 border-theme-border-primary"
        style={{
          backgroundColor: theme.light.background.primary,
        }}
      />
    </div>
  );
};

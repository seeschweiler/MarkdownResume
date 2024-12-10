"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";

const themes = [
  "default",
  "blue",
  "purple",
  "green",
  "rose",
  "amber",
  "teal",
] as const;

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { activeTheme, setActiveTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex gap-2">
      {themes.map((theme) => (
        <button
          key={theme}
          onClick={() => setActiveTheme(theme)}
          className={`px-3 py-1 rounded-md border border-theme-border-primary
            ${
              activeTheme === theme
                ? "bg-theme-bg-secondary text-theme-text-accent"
                : "hover:bg-theme-bg-secondary"
            }`}
        >
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </button>
      ))}
    </div>
  );
};

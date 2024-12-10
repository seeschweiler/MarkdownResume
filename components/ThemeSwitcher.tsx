"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import defaultTheme from "@/themes/default.json";
import blueTheme from "@/themes/blue.json";
import purpleTheme from "@/themes/purple.json";
import greenTheme from "@/themes/green.json";
import roseTheme from "@/themes/rose.json";
import amberTheme from "@/themes/amber.json";
import tealTheme from "@/themes/teal.json";

const themeMap = {
  default: defaultTheme,
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  rose: roseTheme,
  amber: amberTheme,
  teal: tealTheme,
} as const;

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
    <div className="flex flex-wrap gap-2">
      {themes.map((themeName) => {
        const themeColors = themeMap[themeName];

        return (
          <button
            key={themeName}
            onClick={() => setActiveTheme(themeName)}
            className={`group relative p-3 rounded-md border transition-all duration-200 ${
              activeTheme === themeName
                ? "border-theme-text-accent scale-105"
                : "border-theme-border-primary hover:border-theme-text-accent"
            }`}
            aria-label={`Switch to ${themeName} theme`}
          >
            <div className="flex flex-col gap-2">
              {/* Theme name */}
              <span className="text-sm font-medium mb-1 text-theme-text-primary">
                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
              </span>

              {/* Theme preview squares */}
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{
                      backgroundColor: themeColors.light.background.primary,
                    }}
                  />
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: themeColors.light.text.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: themeColors.light.text.accent }}
                  />
                </div>
                <div className="flex gap-1">
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{
                      backgroundColor: themeColors.dark.background.primary,
                    }}
                  />
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: themeColors.dark.text.primary }}
                  />
                  <div
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: themeColors.dark.text.accent }}
                  />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

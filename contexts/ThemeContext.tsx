"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import defaultTheme from "@/themes/default.json";
import blueTheme from "@/themes/blue.json";
import purpleTheme from "@/themes/purple.json";
import greenTheme from "@/themes/green.json";
import roseTheme from "@/themes/rose.json";
import amberTheme from "@/themes/amber.json";
import tealTheme from "@/themes/teal.json";
import siteConfig from "@/config/site.config";

const themes = {
  default: defaultTheme,
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  rose: roseTheme,
  amber: amberTheme,
  teal: tealTheme,
} as const;

type ThemeType = keyof typeof themes;

type ThemeContextType = {
  theme: typeof defaultTheme;
  activeTheme: ThemeType;
  setActiveTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  activeTheme: siteConfig.activeTheme,
  setActiveTheme: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveThemeState] = useState<ThemeType>(
    siteConfig.activeTheme
  );
  const [updateKey, setUpdateKey] = useState(0);

  const setActiveTheme = useCallback((newTheme: ThemeType) => {
    setActiveThemeState(newTheme);
    siteConfig.activeTheme = newTheme;
    setUpdateKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const theme = themes[activeTheme];
    const root = document.documentElement;
    const isDark = root.classList.contains("dark");
    const currentTheme = isDark ? theme.dark : theme.light;

    Object.entries({
      "--theme-bg-primary": currentTheme.background.primary,
      "--theme-bg-secondary": currentTheme.background.secondary,
      "--theme-text-primary": currentTheme.text.primary,
      "--theme-text-secondary": currentTheme.text.secondary,
      "--theme-text-accent": currentTheme.text.accent,
      "--theme-border-primary": currentTheme.border.primary,
      "--theme-button-background": currentTheme.button.background,
      "--theme-button-text": currentTheme.button.text,
      "--theme-button-hover": currentTheme.button.hover,
    }).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [activeTheme, updateKey]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = themes[activeTheme] || defaultTheme;

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        activeTheme,
        setActiveTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

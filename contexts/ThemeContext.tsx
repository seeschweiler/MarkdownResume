"use client";

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
  useCallback,
} from "react";
import { getThemeColors } from "@/lib/theme";
import siteConfig from "@/config/site.config";

// Get the default theme type once
const defaultTheme = getThemeColors();
type ThemeShape = typeof defaultTheme;

const themes = {
  default: getThemeColors("default"),
  blue: getThemeColors("blue"),
  purple: getThemeColors("purple"),
  green: getThemeColors("green"),
  rose: getThemeColors("rose"),
  amber: getThemeColors("amber"),
  teal: getThemeColors("teal"),
} as const;

type ThemeType = keyof typeof themes;

type ThemeContextType = {
  theme: ThemeShape;
  activeTheme: ThemeType;
  setActiveTheme: (theme: ThemeType) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: defaultTheme,
  activeTheme: siteConfig.activeTheme,
  setActiveTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [activeTheme, setActiveTheme] = useState<ThemeType>(
    siteConfig.activeTheme
  );

  useEffect(() => {
    // On mount, check if this is a fresh page load or navigation
    const navigationEntry = performance?.getEntriesByType?.(
      "navigation"
    )[0] as PerformanceNavigationTiming;
    const isReload = navigationEntry?.type === "reload";

    if (isReload || !navigationEntry) {
      // On reload or initial load, use the config theme
      setActiveTheme(siteConfig.activeTheme);
      localStorage.removeItem("activeTheme");
    } else {
      // On navigation, try to use saved theme
      const savedTheme = localStorage.getItem("activeTheme") as ThemeType;
      if (savedTheme && themes[savedTheme]) {
        setActiveTheme(savedTheme);
      }
    }
    setMounted(true);
  }, []);

  const handleThemeChange = useCallback((newTheme: ThemeType) => {
    setActiveTheme(newTheme);
    // Only save to localStorage if different from config
    if (newTheme !== siteConfig.activeTheme) {
      localStorage.setItem("activeTheme", newTheme);
    } else {
      localStorage.removeItem("activeTheme");
    }
  }, []);

  if (!mounted) return null;

  const theme = themes[activeTheme];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        activeTheme,
        setActiveTheme: handleThemeChange,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

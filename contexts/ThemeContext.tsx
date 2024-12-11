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

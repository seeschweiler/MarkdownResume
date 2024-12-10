"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";
import siteConfig from "@/config/site.config";

export const ThemeIndicator = () => {
  const { activeTheme } = useTheme();

  // Don't render anything if theme selector is disabled
  if (!siteConfig.displayThemeSelector) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 p-4 bg-theme-bg-secondary border border-theme-border-primary rounded-lg flex flex-col gap-4 z-50 shadow-lg">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold text-theme-text-primary">
          Active Theme:{" "}
          <span className="text-theme-text-accent">
            {activeTheme.charAt(0).toUpperCase() + activeTheme.slice(1)}
          </span>
        </h2>
      </div>
      <ThemeSwitcher />
    </div>
  );
};

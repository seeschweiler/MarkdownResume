"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

export const ThemeVariables = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <style jsx global>{`
      :root {
        --theme-page-bg: ${theme.light.page.background};
        --theme-bg-primary: ${theme.light.background.primary} !important;
        --theme-bg-secondary: ${theme.light.background.secondary} !important;
        --theme-footer-primary: ${theme.light.footer.primary} !important;
        --theme-footer-secondary: ${theme.light.footer.secondary} !important;
        --theme-text-primary: ${theme.light.text.primary} !important;
        --theme-text-secondary: ${theme.light.text.secondary} !important;
        --theme-text-accent: ${theme.light.text.accent} !important;
        --theme-border-primary: ${theme.light.border.primary} !important;
        --theme-button-background: ${theme.light.button.background} !important;
        --theme-button-text: ${theme.light.button.text} !important;
        --theme-button-hover: ${theme.light.button.hover} !important;
      }

      .dark {
        --theme-page-bg: ${theme.dark.page.background};
        --theme-bg-primary: ${theme.dark.background.primary} !important;
        --theme-bg-secondary: ${theme.dark.background.secondary} !important;
        --theme-footer-primary: ${theme.dark.footer.primary} !important;
        --theme-footer-secondary: ${theme.dark.footer.secondary} !important;
        --theme-text-primary: ${theme.dark.text.primary} !important;
        --theme-text-secondary: ${theme.dark.text.secondary} !important;
        --theme-text-accent: ${theme.dark.text.accent} !important;
        --theme-border-primary: ${theme.dark.border.primary} !important;
        --theme-button-background: ${theme.dark.button.background} !important;
        --theme-button-text: ${theme.dark.button.text} !important;
        --theme-button-hover: ${theme.dark.button.hover} !important;
      }
    `}</style>
  );
};

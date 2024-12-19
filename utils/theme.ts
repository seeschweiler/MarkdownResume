import defaultTheme from "@/themes/default.json";
import blueTheme from "@/themes/blue.json";
import purpleTheme from "@/themes/purple.json";
import greenTheme from "@/themes/green.json";
import roseTheme from "@/themes/rose.json";
import amberTheme from "@/themes/amber.json";
import tealTheme from "@/themes/teal.json";
import siteConfig from "@/config/site.config";

export type ThemeColors = typeof defaultTheme;

const themes = {
  default: defaultTheme,
  blue: blueTheme,
  purple: purpleTheme,
  green: greenTheme,
  rose: roseTheme,
  amber: amberTheme,
  teal: tealTheme,
} as const;

export function getThemeColors(): ThemeColors {
  return themes[siteConfig.activeTheme] || defaultTheme;
}

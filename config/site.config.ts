interface SiteConfig {
  activeTheme:
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "rose"
    | "amber"
    | "teal";
  displayThemeSelector: boolean;
}

const siteConfig: SiteConfig = {
  activeTheme: "default",
  displayThemeSelector: false,
};

export default siteConfig;

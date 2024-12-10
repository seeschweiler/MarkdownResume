interface SiteConfig {
  activeTheme:
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "rose"
    | "amber"
    | "teal";
}

const siteConfig: SiteConfig = {
  activeTheme: "purple",
};

export default siteConfig;

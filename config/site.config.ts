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
  texts: {
    summarySectionHeadlineText: string;
    experienceSectionHeadlineText: string;
    skillsSectionHeadlineText: string;
    educationSectionHeadlineText: string;
    downloadLinkText: string;
    legalNoticeLinkText: string;
    dataPrivacyPolicyLinkText: string;
  };
}

const siteConfig: SiteConfig = {
  activeTheme: "default",
  displayThemeSelector: false,
  texts: {
    summarySectionHeadlineText: "Summary",
    experienceSectionHeadlineText: "Experience",
    skillsSectionHeadlineText: "Skills",
    educationSectionHeadlineText: "Education",
    downloadLinkText: "Download Full Resume",
    legalNoticeLinkText: "Legal Notice",
    dataPrivacyPolicyLinkText: "Data Privacy Policy",
  },
};

export default siteConfig;

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
    statementText: string;
    legalNoticeLinkText: string;
    dataPrivacyPolicyLinkText: string;
    backLinkText: string;
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
    statementText:
      "Bridging the gap between technology and business to drive meaningful impact.",
    legalNoticeLinkText: "Legal Notice",
    dataPrivacyPolicyLinkText: "Data Privacy Policy",
    backLinkText: "Back to Resume",
  },
};

export default siteConfig;

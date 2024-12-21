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
    metadataFallbackName: string;
    metadataFallbackRole: string;
    metadataDescriptionPrefix: string;
    metadataDescriptionSuffix: string;
    metadataKeywords: string[];
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
    metadataFallbackName: "Professional Resume",
    metadataFallbackRole: "Professional Profile",
    metadataDescriptionPrefix: "Professional resume",
    metadataDescriptionSuffix:
      "View professional experience, skills, and education",
    metadataKeywords: [
      "resume",
      "curriculum vitae",
      "cv",
      "professional experience",
      "skills",
    ],
  },
};

export default siteConfig;

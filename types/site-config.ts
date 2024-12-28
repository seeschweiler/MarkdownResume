interface Contact {
  email?: string;
  phone?: string;
}

export interface SiteConfig {
  activeTheme:
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "rose"
    | "amber"
    | "teal";
  displayThemeSelector: boolean;
  displayShareDialog: boolean;
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
    shareDialogHeadlineText: string;
    shareDialogEmailSubject: string;
    shareDialogEmailBody: string;
  };
  personalDetails?: PersonalDetails;
}

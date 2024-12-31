export interface SiteConfig {
  activeTheme:
    | "default"
    | "blue"
    | "purple"
    | "green"
    | "rose"
    | "amber"
    | "teal";
  displaySkillCategories: boolean;
  displayThemeSelector: boolean;
  displayShareDialog: boolean;
  displayShareDialogTabLink: boolean;
  displayShareDialogEmailLink: boolean;
  displayShareDialogQRCodeLink: boolean;
  displayShareDialogDownloadLink: boolean;
  displayStatement: boolean;
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
    shareDialogLinkTabText: string;
    shareDialogQRCodeTabText: string;
    shareDialogEmailTabText: string;
    shareDialogVCardTabText: string;
  };
}

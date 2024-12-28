import { SiteConfig } from "@/types/site-config";

const siteConfig: SiteConfig = {
  activeTheme: "default",
  displayStatement: true,
  displayThemeSelector: false,
  displayShareDialog: true,
  displayShareDialogTabLink: true,
  displayShareDialogEmailLink: true,
  displayShareDialogQRCodeLink: true,
  displayShareDialogDownloadLink: true,
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
    shareDialogHeadlineText: "Share Resume",
    shareDialogEmailSubject: "Check out this resume",
    shareDialogEmailBody: "I thought you might be interested in this resume:",
    shareDialogLinkTabText:
      "Copy the direct link to share this resume with others",
    shareDialogQRCodeTabText:
      "Scan or copy the QR code to open this resume on a mobile device",
    shareDialogEmailTabText: "Send this resume directly via email",
    shareDialogVCardTabText:
      "Download contact information as a virtual business card (vCard)",
  },
};

export default siteConfig;

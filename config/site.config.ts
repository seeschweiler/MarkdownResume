/**
 * Site Configuration File
 *
 * This file contains the main configuration settings for the resume website.
 * You can customize various aspects of the site's functionality and appearance:
 *
 * Theme Settings:
 * - activeTheme: Choose from multiple color themes (default, blue, purple, green, rose, amber, teal)
 * - displayThemeSelector: Toggle the theme selector visibility in the UI
 *
 * Share Dialog Settings:
 * - displayShareDialog: Toggle the main share dialog functionality
 * - Individual sharing options can be enabled/disabled (link, email, QR code, download)
 * - vCard downloads include contact details and profile avatar for contact applications
 *
 * Content Display:
 * - displayStatement: Toggle visibility of the personal statement/motto
 *
 * Text Customization:
 * - All user-facing texts can be customized under the 'texts' object:
 *   - Section headlines
 *   - Statement text
 *   - Navigation and link texts
 *   - SEO metadata (descriptions, keywords)
 *   - Share dialog texts and messages
 *
 * vCard Features:
 * - Downloads include: name, email, phone, location, website
 * - Profile avatar is automatically included if available
 * - Compatible with most contact management applications
 *
 * To modify any setting, simply update the corresponding value in the configuration
 * object below while maintaining the TypeScript interface structure defined in
 * @/types/site-config.
 */

import { SiteConfig } from "@/types/site-config";

const siteConfig: SiteConfig = {
  activeTheme: "default",
  displaySkillCategories: false,
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

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
  displayShareDialogTabEmail: boolean;
  displayShareDialogTabQRCode: boolean;
  displayShareDialogTabContact: boolean;
  displayStatement: boolean;

  texts: {
    headlines: {
      summary: string;
      experience: string;
      publications: string;
      skills: string;
      education: string;
    };

    statement: {
      text: string;
    };

    links: {
      legalNotice: string;
      dataPrivacyPolicy: string;
      backToResume: string;
    };

    metadata: {
      fallbackName: string;
      fallbackRole: string;
      descriptionPrefix: string;
      descriptionSuffix: string;
      keywords: string[];
    };

    shareDialog: {
      headline: string;
      email: {
        subject: string;
        body: string;
      };
      tabs: {
        link: string;
        qrCode: string;
        email: string;
        contact: string;
      };
    };
  };
}

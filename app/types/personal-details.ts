export interface PersonalDetails {
  name?: string;
  role?: string;
  contact?: {
    email?: string;
    phone?: string;
  };
  location?: string;
  social?: {
    github?: string;
    linkedin?: string;
  };
  avatar?: string;
}

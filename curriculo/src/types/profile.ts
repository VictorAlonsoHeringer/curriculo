export interface ProfessionalProfile {
  fullName: string;
  displayName: string;
  role: string;
  email: string;
  location: {
    city: string;
    region: string;
    countryCode: string;
  };
  links: {
    linkedin: string;
    portfolio: string;
  };
}

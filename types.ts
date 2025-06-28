
export type Language = 'EN' | 'RU';

export interface Project {
  id: number;
  name: {
    [key in Language]: string;
  };
  shortDescription: {
    [key in Language]: string;
  };
  fullDescription: {
    [key in Language]: string;
  };
  keyFeatures: {
    [key in Language]: string[];
  };
  techStack: {
    [key in Language]: string[];
  };
  team: {
    [key in Language]: string[];
  };
  additionalInfo: {
    [key in Language]: string[];
  };
  githubUrl?: string;
  downloadUrl?: string;
  websiteUrl?: string;
  imageUrls?: string[]; 
  logoUrl?: string;
}
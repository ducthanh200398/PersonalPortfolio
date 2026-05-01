export interface UserProfile {
  FullName: string;
  JobTitle: string;
  TechTags: string[] | null;
  Location: string;
  Email: string;
  LinkedIn: string;
  GitHub: string;
  Facebook: string;
}

export interface SkillGroup {
  Title: string;
  Skills: string[];
  Icon: string;
}

export interface SkillProfile {
  Description: string;
  SkillGroups: SkillGroup[];
}

export interface Experience {
  Role: string;
  Company: string;
  Description: string;
  Period: string;
  Highlights: string[];
}

export interface ExperienceProfile {
  Description: string;
  Experiences: Experience[];
}

export interface Education {
  Organization: string;
  Major: string;
  Description: string;
}

export interface EducationProfile {
  Educations: Education[];
}

export interface Project {
  Title: string;
  Subtitle: string;
  Client: string;
  Icon: string;
  Description: string;
  Technologies: string[];
  Highlights: string[];
}

export interface ProjectsProfile {
  Description: string;
  Projects: Project[];
}

export interface PortfolioProfile {
  UserProfile: UserProfile;
  SkillProfile: SkillProfile;
  ExperienceProfile: ExperienceProfile;
  EducationProfile: EducationProfile;
  ProjectsProfile: ProjectsProfile;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";

export async function fetchPortfolio(): Promise<PortfolioProfile> {
  const response = await fetch(`${API_BASE_URL}/api/v1/portfolio`);
  if (!response.ok) {
    throw new Error("Failed to fetch portfolio data");
  }
  return response.json();
}

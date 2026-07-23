export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  resume: string;
  bio: string;
  mission: string;
  yearsExperience: number;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  startDate: string;
  endDate: string;
  location: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'contract';
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  logo?: string;
}

export interface Skill {
  name: string;
  category: string;
  level: number; // 0-100
  icon?: string;
  yearsExp?: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  status: 'completed' | 'in-progress' | 'maintained';
  category: ('frontend' | 'backend' | 'fullstack' | 'mobile' | 'ai' | 'management' | 'open-source')[];
  role: string;
  duration?: string;
  highlights?: string[];
}

export interface SoftwareProject {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  features: string[];
  techStack: string[];
  architecture: string;
  challenges: string[];
  future: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
  color: string;
  icon: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  startYear: string;
  endYear: string;
  location: string;
  achievements?: string[];
  grade?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  logo?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  created_at: string;
  homepage: string | null;
  size: number;
  open_issues_count: number;
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  blog: string | null;
  location: string | null;
  created_at: string;
}

export type Theme = 'dark' | 'light';

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

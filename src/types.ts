export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  url: string;
  displayUrl: string;
  tagline: string;
  description: string;
  techStack: string[];
  metrics: string;
  image: string;
}

export interface UsefulTool {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  actionText: string;
  tag: string;
  tips: string;
}

export type ThemeMode = 'light' | 'dark';

export type ActiveTab = 'home' | 'portfolio' | 'pricing' | 'about' | 'tools' | 'contact';

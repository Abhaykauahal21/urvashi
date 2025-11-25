export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string; // Emoji or Lucide icon name mapping
  category: 'frontend' | 'design' | 'tools';
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
}
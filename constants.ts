import { Project, Skill, Experience, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  { name: 'React.js', level: 95, icon: '⚛️', category: 'frontend' },
  { name: 'Next.js', level: 90, icon: '📘', category: 'frontend' },
  { name: 'Tailwind CSS', level: 98, icon: '🎨', category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 92, icon: '📜', category: 'frontend' },
  { name: 'Framer Motion', level: 85, icon: '✨', category: 'design' },
  { name: 'UI/UX Design', level: 80, icon: '🖌️', category: 'design' },
  { name: 'Git & GitHub', level: 88, icon: '🐙', category: 'tools' },
  { name: 'Vite', level: 90, icon: '⚡', category: 'tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Ayush Portal',
    description: 'Developed a responsive AYUSH Portal frontend using HTML, CSS, JavaScript, and modern UI practices to showcase government healthcare information and services.',
    tags: ['React', 'Tailwind', 'Zustand'],
    image: './assets/project1.png',
    link: 'https://ayush-startup-sih.vercel.app/',
  },
  {
    id: 2,
    title: 'Rejoice Showcase Website',
    description: 'Developed the Rejoice Showcase Website with a modern, responsive frontend and smooth UI components.',
    tags: ['TypeScript', 'React DnD', 'Firebase'],
    image: './assets/project2rejoice.png',
    link: 'https://rejoice-neon.vercel.app/',
  },
  {
    id: 3,
    title: 'D2C Brand Website ',
    description: 'Designed an interactive and customer-centric frontend for a D2C brand, optimized for product visibility, mobile responsiveness, and high user engagement.',
    tags: ['React', 'OpenWeatherMap', 'Chart.js'],
    image: '/assets/jobaaj.png',
    link: 'https://jobaaj-task.vercel.app/',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: 1,
    role: 'B.Tech Computer Science',
    company: 'GLA University, Mathura',
    period: '2021 - Present',
    description: 'Pre-final year student maintaining a strong GPA. Active member of the university coding club and organizing tech events.',
  },
  {
    id: 2,
    role: 'Frontend Developer & AWS Intern',
    company: 'JOVAC',
    period: 'Summer 2025',
    description: 'Developed responsive UI components using React and Tailwind CSS. Collaborated with the design team to improve UX. Gained hands-on experience with AWS services for deployment and hosting.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Emily Watson',
    role: 'Product Manager',
    text: 'She has an incredible eye for design and the technical skills to back it up. A true frontend magician!',
    avatar: 'https://picsum.photos/id/64/100/100',
  },
  {
    id: 2,
    name: 'James Carter',
    role: 'Lead Designer',
    text: 'Working with her is a dream. She translates my designs into code perfectly, often improving them.',
    avatar: 'https://picsum.photos/id/91/100/100',
  },
];
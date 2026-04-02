export interface Project {
  id: string;
  index: string;
  year: string;
  type: string;
  name: string;
  description: string;
}

export interface SkillBar {
  name: string;
  pct: number;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  body: string;
}

export interface Reference {
  name: string;
  role: string;
  org: string;
  contact: string;
}

export const projects: Project[] = [
  {
    id: 'modelle',
    index: '01',
    year: '2025 — 2026',
    type: '3D Marketplace Platform',
    name: 'Modelle',
    description:
      'A full-stack 3D asset marketplace — Python microservice backend, real-time MongoDB sync, and a fluid React storefront bridging designers and buyers.',
  },
  {
    id: 'synchrome',
    index: '02',
    year: '2026',
    type: 'Emotional State Game',
    name: 'Synchrome',
    description:
      'A mood-adaptive browser game that reads the player\'s emotional state and morphs gameplay dynamically — built with Phaser 4 and TypeScript.',
  },
  {
    id: 'alnora',
    index: '03',
    year: '2024',
    type: 'Digital Art Gallery',
    name: 'Alnora',
    description:
      'An online art gallery where artists showcase and sell work. Clean React UI backed by Node.js, designed for maximum visual impact.',
  },
  {
    id: 'poppys',
    index: '04',
    year: '2024',
    type: 'Pet Care Mobile App',
    name: 'Poppys',
    description:
      'A Flutter app for pet owners to manage care schedules, appointments, and health records — crafted with delightful, accessible UX in mind.',
  },
  {
    id: 'estate',
    index: '05',
    year: '2025',
    type: 'Real Estate Platform',
    name: 'Estate Agent App',
    description:
      'A JavaScript & React-powered property listing platform for real estate agents to manage, showcase, and close deals efficiently.',
  },
];

export const skillBars: SkillBar[] = [
  { name: 'React', pct: 88 },
  { name: 'HTML / CSS', pct: 92 },
  { name: 'Figma', pct: 85 },
  { name: 'JavaScript', pct: 80 },
  { name: 'Python', pct: 72 },
  { name: 'TypeScript', pct: 68 },
  { name: 'Flutter', pct: 65 },
  { name: 'Node.js', pct: 70 },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Figma', 'Phaser 4'],
  },
  {
    label: 'Backend & Data',
    skills: ['Node.js', 'FastAPI', 'Python', 'MongoDB', 'Java'],
  },
  {
    label: 'Mobile & Other',
    skills: ['Flutter', 'UI/UX Design', 'Responsive Design', 'Git'],
  },
];

export const marqueeItems = [
  { text: 'React', lit: false },
  { text: '·', lit: true },
  { text: 'Figma', lit: false },
  { text: '·', lit: true },
  { text: 'Node.js', lit: false },
  { text: '·', lit: true },
  { text: 'Python', lit: false },
  { text: '·', lit: true },
  { text: 'TypeScript', lit: false },
  { text: '·', lit: true },
  { text: 'MongoDB', lit: false },
  { text: '·', lit: true },
  { text: 'Flutter', lit: false },
  { text: '·', lit: true },
  { text: 'UI/UX Design', lit: false },
  { text: '·', lit: true },
];

export const timeline: TimelineItem[] = [
  {
    period: '2023 — Present',
    title: 'Bachelor of Computer Science',
    subtitle: 'University of Westminster',
    body: 'Pursuing a BSc focused on software engineering, UI/UX, and full-stack development — building a foundation for a product-focused career.',
  },
  {
    period: '2023 — 2024',
    title: 'Foundation Certificate in Higher Education',
    subtitle: 'Informatics Institute of Technology (IIT)',
    body: 'Completed an intensive foundation programme in computing and engineering principles at IIT, Colombo.',
  },
  {
    period: '2012 — 2024',
    title: 'Secondary Education',
    subtitle: 'Kottawa Dharmapala MV',
    body: 'Twelve years of foundational academic education, graduating with distinction.',
  },
];

export const references: Reference[] = [
  {
    name: 'Sankeetha Elancheliyan',
    role: 'Assistant Lecturer',
    org: 'Informatics Institute of Technology\n435, Galle Road, Colombo 03, Sri Lanka',
    contact: 'sankeetha.e@iit.ac.lk · 0772276419',
  },
  {
    name: 'Kushan Bhareti',
    role: 'Visiting Lecturer · Co-Founder, Inforwaves (Pvt) Ltd.',
    org: 'Informatics Institute of Technology',
    contact: 'kushan@iit.ac.lk · +94 76 781 4281',
  },
];

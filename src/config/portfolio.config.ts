import type {
  PersonalInfo,
  SocialLinks,
  Experience,
  Skill,
  Project,
  SoftwareProject,
  Education,
  Certification,
  NavItem,
} from '../types';

// ============================================================
// PERSONAL INFORMATION — Edit this to update your portfolio
// ============================================================
export const personalInfo: PersonalInfo = {
  name: 'Ashfeer K A',
  title: 'Administrative Professional & Software Developer',
  subtitle: 'Building smart solutions from a foundation of real-world business experience',
  email: 'ashfeerka@gmail.com',
  phone: '+91 9567476983',
  location: 'Kalpetta, Wayanad, Kerala – 673121, India',
  avatar: 'https://avatars.githubusercontent.com/u/246238974?v=4',
  resume: '/resume.pdf',
  bio: `With over 9 years of hands-on experience in administrative operations, financial documentation, and records management at a government cooperative society, I bring a rare combination of deep domain expertise and practical software development skills. I build real-world management software that solves genuine business problems — because I understand those problems firsthand.`,
  mission: `My goal is to bridge the gap between business operations and technology — creating software solutions that are not just technically sound, but operationally effective. I leverage AI tools and modern development frameworks to rapidly deliver impactful applications.`,
  yearsExperience: 9,
};

// ============================================================
// SOCIAL LINKS
// ============================================================
export const socialLinks: SocialLinks = {
  github: 'https://github.com/ashfeerka007-netizen',
  linkedin: 'https://linkedin.com/in/ashfeerka',
  email: 'mailto:ashfeerka@gmail.com',
  phone: 'tel:+919567476983',
};

// ============================================================
// SEO
// ============================================================
export const seoConfig = {
  title: 'Ashfeer K A — Administrative Professional & Software Developer',
  description:
    'Portfolio of Ashfeer K A — 9+ years administrative expert and independent software developer from Wayanad, Kerala. Building management systems for real-world business problems.',
  keywords: [
    'Ashfeer K A',
    'Software Developer Kerala',
    'Administrative Professional',
    'BarberQ',
    'Gym Management System',
    'React Developer',
    'Management Software',
    'Wayanad Developer',
    'Portfolio',
  ],
  author: 'Ashfeer K A',
  url: 'https://ashfeerka.dev',
  image: 'https://avatars.githubusercontent.com/u/246238974?v=4',
  twitterHandle: '@ashfeerka',
};

// ============================================================
// NAVIGATION
// ============================================================
export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Portfolio', href: '#software-portfolio', id: 'software-portfolio' },
  { label: 'GitHub', href: '#github', id: 'github' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Resume', href: '#resume', id: 'resume' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

// ============================================================
// HERO TYPING ANIMATION PHRASES
// ============================================================
export const typingPhrases = [
  'Administrative Professional',
  'Software Developer',
  'Problem Solver',
  'AI Enthusiast',
  'Business Software Builder',
  'Management Systems Expert',
];

// ============================================================
// PROFESSIONAL EXPERIENCE — From Resume
// ============================================================
export const experiences: Experience[] = [
  {
    id: 'wayanad-police-coop',
    company: 'Wayanad District Police Co-operative Society Ltd',
    role: 'Accounting Clerk',
    duration: '2015 – Present',
    startDate: '2015',
    endDate: 'Present',
    location: 'Kalpetta North, Wayanad, Kerala',
    type: 'full-time',
    responsibilities: [
      'Perform day-to-day administrative and accounting functions, including filing, scanning, photocopying, and managing office records',
      'Handle accounts payable/receivable, ledger reconciliation, and financial reporting',
      'Prepare official letters, invoices, and delivery notes with accuracy and timeliness',
      'Coordinate with vendors, members, and external agencies for smooth operations',
      'Support management in scheduling, planning, and implementing operational processes',
      'Maintain compliance with cooperative society regulations and financial standards',
    ],
    achievements: [
      '9+ years of consistent, reliable service in administrative and financial operations',
      'Developed in-house software solutions to streamline daily office operations',
      'Maintained zero-error financial records across multiple fiscal years',
      'Implemented digital record management reducing document retrieval time significantly',
    ],
    technologies: [
      'Microsoft Office Suite',
      'Google Workspace',
      'Financial Software',
      'Windows',
      'Linux',
    ],
    logo: '',
  },
];

// ============================================================
// SKILLS — Categorized from Resume + GitHub
// ============================================================
export const skills: Skill[] = [
  // Professional / Administrative
  { name: 'Office Administration', category: 'Professional', level: 95, yearsExp: 9 },
  { name: 'Records & File Management', category: 'Professional', level: 95, yearsExp: 9 },
  { name: 'Bookkeeping & Ledger Reconciliation', category: 'Professional', level: 90, yearsExp: 9 },
  { name: 'Financial Reporting & Analysis', category: 'Professional', level: 88, yearsExp: 9 },
  { name: 'Vendor & Client Coordination', category: 'Professional', level: 90, yearsExp: 9 },
  { name: 'Data Entry & Document Preparation', category: 'Professional', level: 95, yearsExp: 9 },
  { name: 'Scheduling & Logistics Support', category: 'Professional', level: 85, yearsExp: 9 },

  // Office Software
  { name: 'Microsoft Excel', category: 'Office Software', level: 90, yearsExp: 9 },
  { name: 'Microsoft Word', category: 'Office Software', level: 92, yearsExp: 9 },
  { name: 'Microsoft Outlook', category: 'Office Software', level: 85, yearsExp: 9 },
  { name: 'Google Sheets', category: 'Office Software', level: 82, yearsExp: 5 },
  { name: 'Google Docs', category: 'Office Software', level: 82, yearsExp: 5 },

  // Software Development (from GitHub projects)
  { name: 'React', category: 'Software Development', level: 72, yearsExp: 2 },
  { name: 'JavaScript', category: 'Software Development', level: 70, yearsExp: 2 },
  { name: 'TypeScript', category: 'Software Development', level: 60, yearsExp: 1 },
  { name: 'HTML & CSS', category: 'Software Development', level: 75, yearsExp: 2 },
  { name: 'Tailwind CSS', category: 'Software Development', level: 70, yearsExp: 1 },
  { name: 'Node.js', category: 'Software Development', level: 55, yearsExp: 1 },

  // Operating Systems
  { name: 'Windows', category: 'Operating Systems', level: 95, yearsExp: 9 },
  { name: 'Linux', category: 'Operating Systems', level: 65, yearsExp: 3 },
  { name: 'macOS', category: 'Operating Systems', level: 60, yearsExp: 2 },

  // AI Tools
  { name: 'AI Prompting', category: 'AI Tools', level: 90, yearsExp: 2 },
  { name: 'ChatGPT', category: 'AI Tools', level: 88, yearsExp: 2 },
  { name: 'Gemini / Antigravity', category: 'AI Tools', level: 85, yearsExp: 1 },
  { name: 'Copilot', category: 'AI Tools', level: 75, yearsExp: 1 },

  // Soft Skills
  { name: 'Communication', category: 'Soft Skills', level: 92, yearsExp: 9 },
  { name: 'Team Collaboration', category: 'Soft Skills', level: 90, yearsExp: 9 },
  { name: 'Time Management', category: 'Soft Skills', level: 90, yearsExp: 9 },
  { name: 'Multitasking', category: 'Soft Skills', level: 88, yearsExp: 9 },
  { name: 'Problem Solving', category: 'Soft Skills', level: 85, yearsExp: 9 },
];

export const skillCategories = [
  'Professional',
  'Office Software',
  'Software Development',
  'Operating Systems',
  'AI Tools',
  'Soft Skills',
];

// ============================================================
// PROJECTS — GitHub + Software Projects
// ============================================================
export const projects: Project[] = [
  {
    id: 'barberq',
    title: 'BarberQ — Smart Barbershop Queue Manager',
    description:
      'A real-time queue management system for barbershops with live queue tracking, estimated wait times, and customer notifications.',
    longDescription:
      'BarberQ is a full-featured queue management application built for barbershops. It digitizes and streamlines the customer check-in and waiting process, giving both shop owners and customers real-time visibility into queue status.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js'],
    features: [
      'Real-time queue management',
      'Estimated waiting time calculation',
      'Customer check-in system',
      'Service management & pricing',
      'Barber assignment',
      'Live notifications',
      'Mobile responsive',
    ],
    githubUrl: 'https://github.com/ashfeerka007-netizen/barberQ',
    status: 'in-progress',
    category: ['fullstack', 'management'],
    role: 'Solo Developer',
    duration: '2024 – Present',
  },
  {
    id: 'gym-management',
    title: 'Gym Membership Management System',
    description:
      'Comprehensive gym management software with membership tracking, subscription management, fee reminders, and WhatsApp notifications.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Member registration & profiles',
      'Subscription & plan management',
      'Automated fee reminders',
      'WhatsApp notification integration',
      'Expense management',
      'Reports & analytics dashboard',
      'Attendance tracking',
    ],
    status: 'completed',
    category: ['fullstack', 'management'],
    role: 'Solo Developer',
    duration: '2024',
  },
  {
    id: 'rental-stock',
    title: 'Rental Stock Management System',
    description:
      'A comprehensive system for managing rental inventory, tracking stock availability, due dates, and payments.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Rental inventory management',
      'Real-time stock tracking',
      'Due date monitoring & alerts',
      'Payment management',
      'Customer records',
      'Reports & dashboard',
    ],
    status: 'completed',
    category: ['fullstack', 'management'],
    role: 'Solo Developer',
    duration: '2024',
  },
  {
    id: 'cpim-member',
    title: 'CPI(M) Member Management System',
    description:
      'A multi-level organizational management system for political party branch management with hierarchical member records.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Multi-level organization hierarchy',
      'Member records management',
      'Branch & local committee management',
      'Membership history tracking',
      'Comprehensive reports',
      'Role-based access',
    ],
    status: 'completed',
    category: ['fullstack', 'management'],
    role: 'Solo Developer',
    duration: '2024',
  },
  {
    id: 'cash-book',
    title: 'Cash Book Register',
    description:
      'A digital cash book application for tracking income and expenses with full ledger capabilities and financial reports.',
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    features: [
      'Income & expense tracking',
      'Digital ledger',
      'Transaction categorization',
      'Financial reports',
      'Dashboard with charts',
      'Data export',
    ],
    status: 'completed',
    category: ['fullstack', 'management'],
    role: 'Solo Developer',
    duration: '2024',
  },
];

// ============================================================
// SOFTWARE PORTFOLIO — Detailed showcase
// ============================================================
export const softwarePortfolio: SoftwareProject[] = [
  {
    id: 'barberq',
    title: 'BarberQ Pro',
    tagline: 'Smart Barbershop Queue Management',
    overview:
      'BarberQ Pro is a real-time digital queue management system purpose-built for barbershops and salons. It eliminates the chaos of walk-in queues by providing a live, transparent system for customers and staff alike.',
    features: [
      'Real-time queue status with auto-refresh',
      'Estimated wait time calculation based on service type',
      'Multiple barber/staff slot management',
      'Customer self check-in via display screen',
      'Service catalogue with pricing',
      'Push notifications for queue updates',
      'Daily statistics and revenue tracking',
      'Mobile-first responsive design',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Framer Motion', 'LocalStorage API'],
    architecture:
      'Single-page React application with real-time state management. Queue data is managed via React Context with optimistic UI updates. Designed to run locally on a tablet or smart TV at the barbershop.',
    challenges: [
      'Designing a UI readable from across the room on a display screen',
      'Accurate wait time estimation considering variable service durations',
      'Smooth animations that work on low-end Android tablets',
    ],
    future: [
      'WhatsApp/SMS notifications when turn is approaching',
      'Online booking integration',
      'Multi-branch support',
      'Analytics dashboard for business insights',
    ],
    githubUrl: 'https://github.com/ashfeerka007-netizen/barberQ',
    category: 'Queue Management',
    color: 'from-blue-600 to-cyan-500',
    icon: '✂️',
  },
  {
    id: 'gym-management',
    title: 'FitTrack — Gym Management System',
    tagline: 'Complete Gym Membership & Operations Manager',
    overview:
      'A full-featured gym management application that handles the entire lifecycle of gym memberships — from registration to renewal reminders, fee collection, expense tracking, and business analytics.',
    features: [
      'Member registration with photo upload',
      'Flexible subscription plan management',
      'Automated WhatsApp fee reminder integration',
      'Attendance tracking with check-in/out',
      'Expense and income management',
      'Monthly/yearly revenue reports',
      'Member health profile tracking',
      'Dashboard with key business metrics',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Recharts', 'WhatsApp API'],
    architecture:
      'React frontend with component-driven architecture. Uses localStorage for data persistence with planned migration to a backend database. WhatsApp integration via Web WhatsApp API for automated notifications.',
    challenges: [
      'WhatsApp Business API integration for automated reminders',
      'Complex subscription logic (monthly, quarterly, yearly, trial)',
      'Report generation with multiple date range filters',
    ],
    future: [
      'Mobile app (React Native)',
      'Biometric attendance integration',
      'Payment gateway for online fee collection',
      'Diet and workout plan tracking',
    ],
    category: 'Membership Management',
    color: 'from-green-600 to-emerald-500',
    icon: '🏋️',
  },
  {
    id: 'rental-stock',
    title: 'RentTrack — Rental Stock Manager',
    tagline: 'Inventory & Rental Lifecycle Management',
    overview:
      'RentTrack is a complete rental business management system that tracks every item in your inventory from when it goes out to when it comes back — with due date alerts, payment tracking, and availability management.',
    features: [
      'Complete rental inventory catalogue',
      'Item checkout and return tracking',
      'Due date alerts and overdue notifications',
      'Payment and deposit management',
      'Customer records and history',
      'Stock availability real-time view',
      'Damage and loss reporting',
      'Monthly revenue and utilization reports',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Recharts'],
    architecture:
      'React-based SPA with centralized state management. All rental records, customer data, and inventory tracked via structured JSON with localStorage persistence. Designed for offline-first operation in low-connectivity areas.',
    challenges: [
      'Complex due date and overdue calculation logic',
      'Multi-item rental orders with partial returns',
      'Availability conflict detection for same-day bookings',
    ],
    future: [
      'Barcode/QR code scanning for item tracking',
      'Online customer portal for self-booking',
      'Cloud sync for multi-location support',
      'Automated WhatsApp/SMS due date reminders',
    ],
    category: 'Inventory Management',
    color: 'from-orange-600 to-amber-500',
    icon: '📦',
  },
  {
    id: 'cpim-member',
    title: 'OrgTrack — Member Management System',
    tagline: 'Multi-Level Organizational Hierarchy Manager',
    overview:
      'OrgTrack is a specialized organizational member management system designed for managing hierarchical political or civic organizations. It handles multi-level structures from district committees down to local branches with complete member lifecycle management.',
    features: [
      'Multi-level organizational hierarchy management',
      'Individual member profile management',
      'Branch and unit management',
      'Local committee and district committee structure',
      'Membership status and renewal tracking',
      'Historical record preservation',
      'Comprehensive reporting at each level',
      'Member search and filtering',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS'],
    architecture:
      'Hierarchical data model implemented in React with tree-structure state management. The system uses a top-down organizational model where each level has its own management interface and data scope.',
    challenges: [
      'Designing an intuitive UI for complex hierarchical data',
      'Cross-level reporting and aggregation',
      'Member transfer between branches with history preservation',
    ],
    future: [
      'Digital membership card generation',
      'Meeting minutes and resolutions tracking',
      'Election and voting management module',
      'Mobile app for field workers',
    ],
    category: 'Organization Management',
    color: 'from-red-600 to-rose-500',
    icon: '🏛️',
  },
  {
    id: 'cash-book',
    title: 'LedgerPro — Cash Book Register',
    tagline: 'Digital Ledger & Financial Tracker',
    overview:
      'LedgerPro is a clean, modern digital cash book application that replaces traditional paper ledgers. It provides a complete income/expense management solution with categorized transactions, running balances, and financial reports.',
    features: [
      'Income and expense transaction entry',
      'Category-based transaction classification',
      'Running balance calculation',
      'Date-range filtering',
      'Monthly and yearly summary reports',
      'Transaction search and export',
      'Visual dashboard with charts',
      'Print-ready report generation',
    ],
    techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Recharts'],
    architecture:
      'Lightweight React application optimized for daily financial data entry. Transaction data stored in structured localStorage with JSON export capability. Recharts for financial visualizations.',
    challenges: [
      'Accurate running balance maintenance with edit/delete operations',
      'Print-optimized CSS layout for physical ledger output',
      'Date filtering with timezone-correct calculations',
    ],
    future: [
      'Multi-account/multi-currency support',
      'Bank reconciliation feature',
      'GST/tax calculation integration',
      'Cloud backup and sync',
    ],
    category: 'Financial Management',
    color: 'from-violet-600 to-purple-500',
    icon: '📒',
  },
];

// ============================================================
// EDUCATION — From Resume
// ============================================================
export const education: Education[] = [
  {
    id: 'bcom',
    institution: 'University of Calicut',
    degree: 'Bachelor of Commerce (B.Com)',
    field: 'Specialisation in Co-operation',
    duration: 'School of Distant Education',
    startYear: '',
    endYear: '',
    location: 'Calicut, Kerala',
    achievements: ['Specialisation in Co-operative Management and Finance'],
  },
  {
    id: 'jdc',
    institution: 'Co-operative Examination Board, State Co-operative Union',
    degree: 'Junior Diploma in Co-operation (JDC)',
    field: 'Co-operation',
    duration: '',
    startYear: '',
    endYear: '',
    location: 'Kerala',
    achievements: ['Specialized diploma in co-operative society administration'],
  },
  {
    id: 'sslc',
    institution: 'SKMJ HSS, Kalpetta',
    degree: 'SSLC & Plus Two (Higher Secondary)',
    field: 'General',
    duration: '',
    startYear: '',
    endYear: '',
    location: 'Kalpetta, Wayanad, Kerala',
    achievements: ['Completed Secondary and Higher Secondary Education'],
  },
];

// ============================================================
// CERTIFICATIONS — Add yours here
// ============================================================
export const certifications: Certification[] = [
  // Add your certifications here
  // Example:
  // {
  //   id: 'google-analytics',
  //   title: 'Google Analytics Certified',
  //   organization: 'Google',
  //   issueDate: '2024-01',
  //   credentialUrl: 'https://...',
  // },
];

// ============================================================
// GITHUB CONFIG
// ============================================================
export const githubConfig = {
  username: 'ashfeerka007-netizen',
  apiBase: 'https://api.github.com',
};

// ============================================================
// CONTACT FORM CONFIG (Formspree endpoint — optional)
// ============================================================
export const contactConfig = {
  formspreeEndpoint: '', // Add your Formspree endpoint here: https://formspree.io
  calendlyUrl: '', // Add your Calendly URL here
};

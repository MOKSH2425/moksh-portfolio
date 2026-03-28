export const NAV_LINKS = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
];

export const SKILLS = [
  {
    category: 'Frontend',
    icon: 'fa-layer-group',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5 / CSS3', 'Redux'],
    highlight: true,
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'REST APIs', 'JWT Auth'],
    highlight: true,
  },
  {
    category: 'Database',
    icon: 'fa-database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Mongoose', 'Redis'],
    highlight: false,
  },
  {
    category: 'AI / ML',
    icon: 'fa-brain',
    items: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    highlight: false,
  },
  {
    category: 'Tools & DevOps',
    icon: 'fa-screwdriver-wrench',
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code', 'Linux', 'Figma'],
    highlight: false,
  },
  {
    category: 'Cloud & More',
    icon: 'fa-cloud',
    items: ['AWS Basics', 'Cloudinary', 'Socket.io', 'GraphQL', 'Vite', 'Netlify'],
    highlight: false,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'Medicine Recommendation System',
    description: 'An intelligent ML system that recommends medicines based on symptoms. Trained with scikit-learn, served through a Flask REST API with disease prediction and confidence scoring.',
    tags: ['Python', 'scikit-learn', 'Flask', 'pandas', 'HTML/CSS'],
    badge: 'AI / ML',
    github: 'https://github.com/mokshshah',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Coaching Institute Dashboard',
    description: 'Full-stack management platform for coaching institutes — student records, batch management, attendance tracking, and performance analytics with role-based access control.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    badge: 'Full Stack',
    github: 'https://github.com/mokshshah',
    live: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'Event Registration System',
    description: 'Dynamic event platform with registration, ticket generation, email confirmations and an admin panel for organiser-side management with export capabilities.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
    badge: 'Full Stack',
    github: 'https://github.com/mokshshah',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Coffee Cafe Website',
    description: 'Immersive café website with animated menu showcase, smooth GSAP scroll transitions, gallery section and an online ordering flow — focused on brand experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    badge: 'Frontend',
    github: 'https://github.com/mokshshah',
    live: '#',
    featured: false,
  },
];

export const EDUCATION = [
  {
    period: '2023 — 2027',
    degree: 'B.Tech in Computer Science & Engineering',
    school: 'Surat, Gujarat',
    status: 'ongoing',
    description: 'Pursuing BTech CSE with a focus on full-stack development, data structures & algorithms, artificial intelligence, and modern software engineering practices.',
    subjects: ['DSA', 'Web Dev', 'AI / ML', 'DBMS', 'OS', 'Networks'],
  },
  {
    period: 'Completed 2023',
    degree: 'Higher Secondary — Science Stream',
    school: 'Surat, Gujarat',
    status: 'done',
    description: 'Completed 12th with Physics, Chemistry, Mathematics and Computer Science — building a strong mathematical foundation for engineering.',
    subjects: ['Physics', 'Chemistry', 'Maths', 'Computer Science'],
  },
];

export const SOCIALS = [
  { icon: 'fab fa-github',   href: 'https://github.com/mokshshah',      label: 'GitHub'   },
  { icon: 'fab fa-linkedin', href: 'https://linkedin.com/in/mokshshah', label: 'LinkedIn' },
  { icon: 'fas fa-envelope', href: 'mailto:shahmoksh7@gmail.com',        label: 'Email'    },
];

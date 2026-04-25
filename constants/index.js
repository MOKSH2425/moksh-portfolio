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
    title: 'TurfBooking Platform',
    description: 'Architected a full-stack turf marketplace with three role layers and 15+ pages. Engineered slot picker with double-booking prevention, automated refund calculation, and live card UI. Deployed via Vercel with GitHub-integrated CI/CD pipeline.',
    tags: ['MERN', 'JWT', 'RBAC', 'Vercel CI/CD'],
    badge: 'Full Stack',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Coaching Dashboard',
    description: 'Built an institute management platform covering student records, batch scheduling, attendance tracking, and real-time analytics dashboards. Implemented RBAC for admin and student portals with Chart.js-powered visual reporting.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    badge: 'Full Stack',
    live: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'SmartMed — Disease Predictor',
    description: 'Trained ML models for 40-60 diseases, achieving 70-80% accuracy, and exposed predictions via a Flask REST API. Implemented Agile sprint cycles to deliver features bi-weekly, improving time-to-market by 20%.',
    tags: ['Python', 'scikit-learn', 'Flask', 'pandas'],
    badge: 'AI / ML',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Developer Group',
    description: 'Designed and delivered a client-facing showcase website for a real-estate developer group — responsive, brand-focused frontend presenting residential project portfolios.',
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    badge: 'Frontend',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'Coffee Café Website',
    description: 'Crafted an immersive brand experience with GSAP-powered scroll animations and an animated menu showcase, demonstrating high-quality UI and motion design.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    badge: 'Frontend',
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
  { icon: 'fab fa-github',   href: 'https://github.com/MOKSH2425',      label: 'GitHub'   },
  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/moksh-shah-7aa9ba3a9', label: 'LinkedIn' },
  { icon: 'fas fa-envelope', href: 'mailto:shahmoksh7@gmail.com',        label: 'Email'    },
];

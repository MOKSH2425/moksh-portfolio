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
    proficiency: 90,
    highlight: true,
  },
  {
    category: 'Backend',
    icon: 'fa-server',
    items: ['Node.js', 'Express.js', 'Python', 'Django', 'Flask', 'REST APIs', 'JWT Auth'],
    proficiency: 82,
    highlight: true,
  },
  {
    category: 'Database',
    icon: 'fa-database',
    items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase', 'Mongoose', 'Redis'],
    proficiency: 76,
    highlight: false,
  },
  {
    category: 'AI / ML',
    icon: 'fa-brain',
    items: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    proficiency: 70,
    highlight: false,
  },
  {
    category: 'Tools & DevOps',
    icon: 'fa-screwdriver-wrench',
    items: ['Git & GitHub', 'Docker', 'Vercel', 'Postman', 'VS Code', 'Linux', 'Figma'],
    proficiency: 78,
    highlight: false,
  },
  {
    category: 'Cloud & More',
    icon: 'fa-cloud',
    items: ['AWS Basics', 'Cloudinary', 'Socket.io', 'GraphQL', 'Vite', 'Netlify'],
    proficiency: 68,
    highlight: false,
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: 'TurfBooking Platform',
    description: 'Architected a full-stack turf marketplace with three role layers and 15+ pages. Engineered slot picker with double-booking prevention, automated refund calculation, and live card UI. Deployed via Vercel with GitHub-integrated CI/CD pipeline.',
    details: 'Built modular services for bookings, payments, and admin analytics. Implemented robust validation to prevent overlapping bookings and added role-based access for owners, managers, and users. Designed reusable UI components and implemented end-to-end testing for the booking flow.',
    tags: ['MERN', 'JWT', 'RBAC', 'Vercel CI/CD'],
    badge: 'Full Stack',
    live: 'https://turf-booking-tan.vercel.app',
    featured: true,
  },
  {
    id: 2,
    title: 'Coaching Dashboard',
    description: 'Built an institute management platform covering student records, batch scheduling, attendance tracking, and real-time analytics dashboards. Implemented RBAC for admin and student portals with Chart.js-powered visual reporting.',
    details: 'Developed reusable dashboard widgets, exportable attendance reports, and notification channels for students. Focused on performance by lazy-loading heavy charts and optimizing MongoDB queries for large cohorts.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Chart.js'],
    badge: 'Full Stack',
    live: 'https://coaching-web-ten.vercel.app/',
    featured: false,
  },
  {
    id: 3,
    title: 'SmartMed — Disease Predictor',
    description: 'Trained ML models for 40-60 diseases, achieving 70-80% accuracy, and exposed predictions via a Flask REST API. Implemented Agile sprint cycles to deliver features bi-weekly, improving time-to-market by 20%.',
    details: 'Performed feature engineering on clinical symptom datasets, experimented with multiple classifiers, and selected models balancing precision and recall. Containerized model endpoints and added simple explainability via feature importance charts.',
    tags: ['Python', 'scikit-learn', 'Flask', 'pandas'],
    badge: 'AI / ML',
    live: 'https://smartmed-fullstack.vercel.app/',
    featured: false,
  },
  {
    id: 4,
    title: 'Building Developer Group',
    description: 'Designed and delivered a client-facing showcase website for a real-estate developer group — responsive, brand-focused frontend presenting residential project portfolios.',
    details: 'Collaborated with designers to translate brand guidelines into accessible UI and implemented an image-heavy gallery with lazy loading for optimal performance. Added contact lead forms with validation and email notifications.',
    tags: ['React.js', 'Tailwind CSS', 'Responsive'],
    badge: 'Frontend',
    live: 'https://pixelforgex-developer.vercel.app/',
    featured: false,
  },
  {
    id: 5,
    title: 'Coffee Café Website',
    description: 'Crafted an immersive brand experience with GSAP-powered scroll animations and an animated menu showcase, demonstrating high-quality UI and motion design.',
    details: 'Built animated menu interactions and local storage-based cart for demo ordering flows. Focused on micro-interactions and accessibility improvements for keyboard users.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    badge: 'Frontend',
    live: 'https://aura-coffee-theta.vercel.app/',
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

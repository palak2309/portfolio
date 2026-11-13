export interface Project {
  id: string;
  title: string;
  subtitle: string;
  type: string;
  badgeColor: 'purple' | 'blue' | 'amber';
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  description: string;
  teamDisclaimer?: string;
  legalDisclaimer?: string;
  features: string[];
  imagePlaceholder?: {
    title: string;
    description: string;
    schemaImage?: string;
    recommendedAction: string;
  };
  metrics?: { label: string; value: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  validity?: string;
  creditHours?: string;
  verificationUrl?: string;
  badgeId?: string;
  iconType: 'redhat' | 'ibm' | 'google';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; icon?: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: 'PALAK PATHAN',
    tagline: 'Software Developer | AI & Data Enthusiast',
    quote: 'Building practical technology solutions through software development, AI, data analytics and blockchain.',
    about: [
      "I am a final-year Computer Science student at Christ College, Pune (affiliated with Savitribai Phule Pune University), graduating in 2027 with a strong academic foundation (CGPA: 7.98).",
      "My passion lies at the intersection of modern software engineering, artificial intelligence applications, data analytics, and emerging web technologies. Rather than remaining in theory, I focus on building tangible, working prototypes and full-stack solutions.",
      "My hands-on experience includes developing AI-assisted financial auditing platforms to spot invoice discrepancies, designing prototype smart contracts for ERC-1155 real-estate tokenisation, and engineering end-to-end Power BI dashboards using dimensional Star Schema data models."
    ],
    rolesTargeted: [
      'Software Developer / Trainee',
      'Python Developer',
      'AI Application Developer',
      'Web Developer',
      'Data Analyst / Power BI Developer',
      'Blockchain Developer Trainee',
    ],
    education: {
      degree: 'B.Sc. Computer Science',
      college: 'Christ College, Pune',
      university: 'Savitribai Phule Pune University',
      timeline: '2024 – 2027 (Expected)',
      cgpa: '7.98',
      status: 'Final-Year Student',
      location: 'Pune, Maharashtra, India',
    },
    location: 'Pune, Maharashtra, India',
    email: 'palakpathan23@gmail.com',
    phone: '+91 9763333321',
    github: 'https://github.com/palak2309',
    linkedinPlaceholderText: 'LinkedIn Profile being finalized — connect via GitHub or Email',
    resumeFileName: 'resume.pdf',
    resumeDownloadPath: '/resume.pdf',
    // Contact form backend config: Set Web3Forms access key or Formspree endpoint here if available
    contactFormConfig: {
      web3FormsAccessKey: '', // Set your Web3Forms access key here to enable direct form submissions
      fallbackToMailto: true,
    }
  },

  skills: [
    {
      category: 'Programming',
      description: 'Core languages for backend services, algorithms, and data logic',
      skills: [
        { name: 'Python', highlight: true },
        { name: 'C', highlight: false },
      ],
    },
    {
      category: 'Databases',
      description: 'Relational data modeling, SQL queries, and NoSQL stores',
      skills: [
        { name: 'SQL', highlight: true },
        { name: 'PL/SQL', highlight: false },
        { name: 'PostgreSQL', highlight: true },
        { name: 'MongoDB', highlight: false },
      ],
    },
    {
      category: 'Web Development',
      description: 'Full-stack web applications, component architecture, and modern APIs',
      skills: [
        { name: 'React', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'JavaScript', highlight: false },
        { name: 'Node.js', highlight: true },
        { name: 'Express', highlight: false },
        { name: 'HTML5', highlight: false },
        { name: 'CSS3 / Tailwind', highlight: true },
      ],
    },
    {
      category: 'Data Analytics',
      description: 'Business intelligence, dimensional warehousing, and visual reporting',
      skills: [
        { name: 'Power BI', highlight: true },
        { name: 'Data Visualisation', highlight: true },
      ],
    },
    {
      category: 'Blockchain',
      description: 'Smart contracts, token standards, and EVM testing environments',
      skills: [
        { name: 'Solidity', highlight: true },
        { name: 'Smart Contracts', highlight: true },
        { name: 'OpenZeppelin', highlight: false },
        { name: 'Hardhat', highlight: false },
      ],
    },
    {
      category: 'Tools & Cloud',
      description: 'Version control, collaborative workflows, and BaaS platforms',
      skills: [
        { name: 'Git', highlight: true },
        { name: 'GitHub', highlight: true },
        { name: 'Supabase', highlight: true },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: 'auto-audit',
      title: 'AutoAudit – AI-Assisted Financial Leakage Detection',
      subtitle: 'Full-Stack Financial Audit Platform with AI Discrepancy Detection',
      type: 'Team Project',
      badgeColor: 'purple',
      githubUrl: 'https://github.com/palak2309/Auto_audit',
      liveUrl: 'https://auto-audit-nu.vercel.app/',
      technologies: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Vercel AI SDK'],
      description:
        'A comprehensive financial auditing web platform designed to ingest vendor invoice and transaction datasets to identify costly discrepancies, compliance breaches, and financial leakage.',
      teamDisclaimer:
        'Collaborative team project. Engineered with shared contributions across frontend UI, AI prompt pipelines, and database schemas without claiming individual authorship over every module.',
      features: [
        'Financial dataset ingestion and automated data cleansing',
        'Duplicate invoice identification and redundant payment detection',
        'Overpayment alerts and overdue liability reconciliation',
        'AI-generated discrepancy summaries using Vercel AI SDK',
        'Secure user authentication and role-based access control (RBAC)',
        'Interactive financial dashboard visualisations and drill-downs',
        'One-click CSV audit report generation for accounting teams',
      ],
    },
    {
      id: 'token-estate',
      title: 'TokenEstate – MST Blockchain Real-Estate Tokenisation',
      subtitle: 'ERC-1155 Multi-Token Architecture & Cryptographic Verification Prototype',
      type: 'Team Prototype / MVP',
      badgeColor: 'blue',
      githubUrl: 'https://github.com/palak2309/MST-Tokenisation-',
      liveUrl: 'https://palak2309-mst-tokenisation.tokenestate-palak2309.workers.dev',
      technologies: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Ethers.js', 'React', 'Cloudflare Workers'],
      description:
        'A decentralized prototype demonstrating the fractional representation and lifecycle governance of real-estate units utilizing the ERC-1155 multi-token standard on Ethereum-compatible networks.',
      teamDisclaimer:
        'Collaborative team prototype exploring EVM smart contracts, document fingerprinting, and Cloudflare Worker endpoints.',
      legalDisclaimer:
        'Prototype/MVP for demonstration purposes only. It does not represent actual property ownership or a licensed investment offering.',
      features: [
        'ERC-1155 multi-token structure for fractional property representation',
        'SHA-256 cryptographic document fingerprinting for deed verification',
        'Role-based access control (RBAC) via OpenZeppelin AccessControl',
        'Investor KYC & regulatory eligibility status verification hooks',
        'Configurable token staking and reward workflow simulations',
        'Comprehensive automated smart contract test suite via Hardhat',
      ],
    },
    {
      id: 'smart-metro-analytics',
      title: 'Smart Metro Analytics – Power BI Dashboard',
      subtitle: 'Enterprise Transit Business Intelligence & Kimball Star Schema Data Warehouse',
      type: 'Data Analytics Project',
      badgeColor: 'amber',
      githubUrl: 'https://github.com/palak2309',
      technologies: ['Power BI', 'CSV Datasets', 'Star Schema', 'DAX', 'Data Modeling'],
      description:
        'An end-to-end transit analytics dashboard built from raw automated fare collection (AFC) and train operation CSV datasets. Features a production-grade Kimball Star Schema modeling ridership throughput, corridor demand splits, and revenue yields.',
      metrics: [
        { label: 'Network Stations', value: '18 Stations' },
        { label: 'Passenger Throughput', value: '54,882+ Riders' },
        { label: 'Fare Revenue Modeled', value: '$1.77M+' },
        { label: 'Operational Corridors', value: 'Blue & Aqua Lines' },
      ],
      features: [
        'Optimized Kimball Star Schema: Fact_Metro_Operations linked to 5 Dim tables',
        'Interactive spatial-temporal passenger density heatmaps (Stations vs. Hours 7–22)',
        'Corridor volume comparison (Blue Line 59.4% vs. Aqua Line 40.6%)',
        'Distance-based fare yield analysis across journey lengths (1–18 km)',
        'Passenger demographic segmentation (Working Professionals, Students, Seniors)',
        'Peak commute surge tracking (8–9 AM & 6–7 PM carrying 54.9% of traffic)',
      ],
      imagePlaceholder: {
        title: 'Power BI Dashboard Preview & Data Architecture',
        description: 'Star Schema Architecture deployed. Public Power BI report preview placeholder.',
        schemaImage: '/images/smart_metro_star_schema.jpg',
        recommendedAction: 'To showcase live Power BI embeds or visual report screenshots, place your screenshot file as /public/images/metro-dashboard.png or provide the Power BI Service publish URL.',
      },
    },
  ] as Project[],

  certifications: [
    {
      id: 'redhat-python',
      title: 'Python Programming with Red Hat (AD141 – RHA)',
      issuer: 'Red Hat',
      date: 'January 2026',
      creditHours: '32 Credit Hours',
      verificationUrl: 'https://www.credly.com/badges/ac1f78f5-eca3-41d7-9cda-dcecfcaab979',
      badgeId: 'ac1f78f5-eca3-41d7-9cda-dcecfcaab979',
      iconType: 'redhat',
    },
    {
      id: 'ibm-genai',
      title: 'Generative AI in Action',
      issuer: 'IBM SkillsBuild',
      date: 'November 2026',
      verificationUrl: 'https://www.credly.com/badges/ee848386-246a-4ed8-86ec-baa06dd3eff0',
      badgeId: 'ee848386-246a-4ed8-86ec-baa06dd3eff0',
      iconType: 'ibm',
    },
    {
      id: 'google-educator',
      title: 'Google Certified Educator',
      issuer: 'Google for Education',
      date: 'July 2026',
      validity: 'Valid until July 2029',
      iconType: 'google',
    },
  ] as Certification[],
};

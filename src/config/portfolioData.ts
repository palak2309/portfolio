export interface PatentDocument {
  id: string;
  title: string;
  subtitle: string;
  docNumber: string;
  date: string;
  thumbnailUrl: string;
  pdfUrl: string;
  fileName: string;
  badge: string;
  details: string;
  alternativeViews?: { name: string; url: string }[];
}

export interface DesignPatent {
  achievementTitle: string;
  patentName: string;
  designRegistrationNumber: string;
  serialNumber: string;
  registrationDate: string;
  dateOfIssue: string;
  classNumber: string;
  classDescription: string;
  authority: string;
  journalPublication: string;
  journalDate: string;
  journalPage: string;
  applicants: { name: string; role?: string; isPrimaryStudent?: boolean }[];
  applicantNote: string;
  patentAgent: { name: string; registrationNumber: string };
  noveltyStatement: string;
  description: string;
  documents: PatentDocument[];
}

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
  screenshotUrl: string;
  screenshotCaption: string;
  additionalScreenshots?: { title: string; url: string }[];
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
    email: import.meta.env.VITE_CONTACT_EMAIL || 'palakpathan23@gmail.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+91 9763333321',
    github: import.meta.env.VITE_GITHUB_URL || 'https://github.com/palak2309',
    linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/palak-pathan-390277427/',
    linkedinPlaceholderText: 'LinkedIn Profile: palak-pathan-390277427',
    resumeFileName: 'Palak_Pathan_Resume.pdf',
    resumeDownloadPath: import.meta.env.VITE_RESUME_URL || '/Palak_Pathan_Resume.pdf',
    resumeAvailable: true,
    // Contact form backend config: Loaded dynamically from VITE_WEB3FORMS_ACCESS_KEY env variable
    contactFormConfig: {
      web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'd7ff9a0a-5272-4a76-96e4-c3695d72be39',
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
      screenshotUrl: '/images/autoaudit-dashboard.png',
      screenshotCaption: 'Actual Working AutoAudit Dashboard — Financial Control Center & AI Findings (auto-audit-nu.vercel.app)',
      additionalScreenshots: [
        { title: 'Financial Leaks Register', url: '/images/autoaudit-leaks.png' },
        { title: 'Live Landing Page', url: '/images/autoaudit-live.png' },
      ],
      technologies: ['React', 'TypeScript', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'Vercel AI SDK', 'Recharts'],
      description:
        'A team-built financial auditing web platform that imports vendor invoice and payment data from Xero, QuickBooks Online, and Zoho Books to detect financial leakage, compliance anomalies, and overdue liabilities.',
      teamDisclaimer:
        'Collaborative team project. Includes LLM-generated findings via the Vercel AI SDK and rule-based checks. AI coding tools were used for parts of development.',
      features: [
        'Vendor invoice and payment data import from Xero, QuickBooks Online, and Zoho Books',
        'Rule-based detection engine for duplicate invoices, duplicate payments, and overpayments',
        'Overdue liability reconciliation and anomaly alerts',
        'LLM-generated audit summaries and discrepancy findings via Vercel AI SDK',
        'Supabase authentication and role-based access control (RBAC)',
        'Interactive financial metrics and trend analysis using Recharts dashboards',
        'Clean CSV report export for auditing workflows',
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
      screenshotUrl: '/images/tokenestate-app.png',
      screenshotCaption: 'Actual Working TokenEstate Web App on Cloudflare Workers — Network Selector & BridgeKey Interface',
      additionalScreenshots: [
        { title: 'Technical Architecture & Approach', url: '/images/tokenestate-architecture.png' },
      ],
      technologies: ['Solidity', 'OpenZeppelin', 'Hardhat', 'Vitest', 'Ethers.js', 'React', 'Cloudflare Workers'],
      description:
        'A team-built demo MVP for the MST Blockchain Buildathon representing real-estate units as ERC-1155 tokens. Deployed on MST testnet and mainnet (demo units only).',
      teamDisclaimer:
        'Collaborative team prototype for the MST Blockchain Buildathon. AI coding tools were used for parts of development.',
      legalDisclaimer:
        'Prototype only. It does not represent actual property ownership or a licensed investment offering.',
      features: [
        'ERC-1155 multi-token representation for fractional property units',
        'Client-side SHA-256 document fingerprinting for deed hash validation',
        'Role-based access control and investor eligibility compliance checks',
        'Transfers disabled by default for regulatory simulation safeguards',
        'Staking contract with configurable pools and emergency pause safeguards',
        'Smart contracts covered by automated tests (Hardhat, Vitest) and deployed on MST testnet/mainnet',
      ],
    },
    {
      id: 'smart-metro-analytics',
      title: 'Smart Metro Analytics – Power BI Dashboard',
      subtitle: 'Enterprise Transit Business Intelligence & Kimball Star Schema Data Warehouse',
      type: 'Data Analytics Project',
      badgeColor: 'amber',
      githubUrl: 'https://github.com/palak2309',
      screenshotUrl: '/images/smart-metro-dashboard.png',
      screenshotCaption: 'Actual Power BI Dashboard — 9 Interactive Visuals, 54,882 Passengers, $1.77M Modeled Revenue',
      additionalScreenshots: [
        { title: 'Kimball Star Schema Architecture', url: '/images/smart_metro_star_schema.jpg' },
      ],
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

  patent: {
    achievementTitle: 'Design Patent – Non-Invasive Blood Glucose Monitoring Patch',
    patentName: 'NON-INVASIVE BLOOD GLUCOSE MONITORING PATCH',
    designRegistrationNumber: '476212-001',
    serialNumber: '259040',
    registrationDate: '8 October 2025',
    dateOfIssue: '28 October 2026',
    classNumber: '24-01',
    classDescription: 'Class 24-01: Medical and Laboratory Apparatus & Devices',
    authority: 'The Patent Office, Government of India',
    journalPublication: 'The Patent Office Journal No. 44/2026',
    journalDate: '30 October 2026',
    journalPage: '142399',
    applicants: [
      { name: 'Palak Ajit Pathan', role: 'Student, Christ College, Pune', isPrimaryStudent: true },
      { name: 'Suvarna Mohanrao Nade', role: 'Co-Applicant / Collaborator' },
      { name: 'Dr. Renu Praveen Pathak', role: 'Professor, Sandip University / Collaborator' },
      { name: 'Nilima Gaikwad', role: 'Assistant Professor, Christ College / Collaborator' },
      { name: 'Vandana R. Bias', role: 'Co-Applicant / Collaborator' },
      { name: 'Navale Madhuri Damodar', role: 'Co-Applicant / Collaborator' },
      { name: 'Mayuri Pravin Parab', role: 'Co-Applicant / Collaborator' },
    ],
    applicantNote: 'Palak Ajit Pathan is one of the seven named applicants (Co-Applicant).',
    patentAgent: {
      name: 'Varsha Sinha',
      registrationNumber: 'IN/PA-6035',
    },
    noveltyStatement:
      'The novelty resides in the shape and configuration of the NON-INVASIVE BLOOD GLUCOSE MONITORING PATCH as illustrated across 7 technical engineering views.',
    description:
      'A registered design patent granted by the Controller General of Patents, Designs and Trade Marks, Government of India, under the Designs Act 2000 and Designs Rules 2001. The registration protects the novel ergonomic shape, contoured skin-contact curve, integrated digital read-out display, and bottom optical sensor array for non-invasive glucose monitoring.',
    documents: [
      {
        id: 'registration-certificate',
        title: 'Certificate of Registration of Design',
        subtitle: 'Official Registration Certificate issued by The Patent Office, Government of India',
        docNumber: 'Design No. 476212-001 | Serial No. 259040',
        date: 'Registered: 08 Oct 2025 | Issued: 28 Oct 2026',
        thumbnailUrl: '/images/patent-certificate.png',
        pdfUrl: '/documents/Patent_Registration_Certificate_476212-001.pdf',
        fileName: 'Patent_Registration_Certificate_476212-001.pdf',
        badge: 'Official Certificate',
        details:
          'Official sealed certificate issued under the Designs Act 2000 and Designs Rules 2001 certifying that the design has been registered in Class 24-01 in respect of its application to the Non-Invasive Blood Glucose Monitoring Patch.',
      },
      {
        id: 'gazette-journal',
        title: 'The Patent Office Journal Publication',
        subtitle: 'Official Gazette Entry (The Patent Office Journal No. 44/2026, Page 142399)',
        docNumber: 'Issue No. 44/2026 | Date: 30/10/2026 | Class 24-01',
        date: 'Published: 30 October 2026',
        thumbnailUrl: '/images/patent-journal-page2.png',
        pdfUrl: '/documents/Patent_Office_Journal_Publication_44-2026.pdf',
        fileName: 'Patent_Office_Journal_Publication_44-2026.pdf',
        badge: 'Official Gazette Record',
        details:
          'Official statutory publication in the Gazette of the Indian Patent Office displaying all seven applicant names, institutional affiliation at Christ College (Pune), registration date, and official colored design rendering.',
        alternativeViews: [
          { name: 'Gazette Entry (Page 2)', url: '/images/patent-journal-page2.png' },
          { name: 'Journal Cover (Page 1)', url: '/images/patent-journal-cover.png' },
        ],
      },
      {
        id: 'representation-sheets',
        title: 'Design Representation & Novelty Specifications',
        subtitle: '7 Multi-Angle Technical Engineering Views Signed by Patent Agent',
        docNumber: '7 Engineering Sheets (Perspective, Front, Rear, Top, Bottom, Left, Right)',
        date: 'Novelty Filing: 07–08 Oct 2025',
        thumbnailUrl: '/images/patent-perspective-view.png',
        pdfUrl: '/documents/Design_Patent_Representation_Sheets.pdf',
        fileName: 'Design_Patent_Representation_Sheets.pdf',
        badge: 'Engineering Drawings',
        details:
          'Comprehensive 7-view technical novelty drawing suite formally signed by Registered Patent Agent Varsha Sinha (IN/PA-6035). Illustrates the ergonomic curved profile, display bezel, and back-side non-invasive sensor array.',
        alternativeViews: [
          { name: 'Perspective View', url: '/images/patent-perspective-view.png' },
          { name: 'Front View (Display)', url: '/images/patent-front-view.png' },
          { name: 'Rear View (Sensor Grid)', url: '/images/patent-rear-view.png' },
        ],
      },
    ],
  } as DesignPatent,

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

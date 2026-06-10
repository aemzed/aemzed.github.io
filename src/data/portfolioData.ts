export const personalInfo = {
  name: "Aditya Maulana Zunaidi",
  firstName: "Aditya",
  role: "FullStack Web and Mobile Developer",
  subRole: "Software Engineer • Web • Mobile • Backend • Enterprise Integration",
  location: "Surabaya, Indonesia",
  email: "adityazunaidi115@gmail.com",
  phone: "+62 85931504125",
  github: "https://github.com/adityazunaidi",
  linkedin: "https://linkedin.com/in/adityazunaidi",
  bio: "I'm a FullStack Web and Mobile Developer based in Surabaya, Indonesia. I have experience building HR systems, POS applications, CRM tools, logistics platforms, port operation systems, and enterprise integration services.",
};

export interface Skill {
  name: string;
  iconKey: string;
}

export const skills: Skill[] = [
  { name: "JavaScript", iconKey: "js" },
  { name: "TypeScript", iconKey: "ts" },
  { name: "PHP", iconKey: "php" },
  { name: "Dart", iconKey: "dart" },
  { name: "Java", iconKey: "java" },
  { name: "C#", iconKey: "csharp" },
  { name: "SQL", iconKey: "sql" },
  { name: ".NET", iconKey: "dotnet" },
  { name: "React", iconKey: "react" },
  { name: "Flutter", iconKey: "flutter" },
  { name: "Node.js", iconKey: "node" },
  { name: "Docker", iconKey: "docker" },
  { name: "Git", iconKey: "git" },
  { name: "REST API", iconKey: "api" },
  { name: "Agile", iconKey: "agile" },
];

export interface ToolCategory {
  title: string;
  tools: string[];
}

export const toolCategories: ToolCategory[] = [
  {
    title: "Frontend",
    tools: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Flutter Web"],
  },
  {
    title: "Backend",
    tools: ["Node.js", "Express.js", "Laravel", "CodeIgniter", "ASP.NET Core", ".NET Framework"],
  },
  {
    title: "Mobile",
    tools: ["Flutter", "Dart", "Java Android Native"],
  },
  {
    title: "Database",
    tools: ["MySQL", "PostgreSQL", "Oracle"],
  },
  {
    title: "DevOps & Tools",
    tools: ["Docker", "AWS", "GitHub CI/CD", "Git", "Ubuntu Linux", "CentOS"],
  },
];

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "APBS Reborn System",
    category: "Integration",
    description:
      "Rebuilt legacy APBS system using ASP.NET Core 8 for vessel permit requests, integrated with multiple external systems (TPS, PTOS-M, PTOS-PK, PKK, TTL).",
    techStack: ["ASP.NET Core 8", "C#", "Oracle", "SAP", "TPS", "PTOS"],
  },
  {
    id: 2,
    title: "FUEL Mobile App",
    category: "Mobile",
    description:
      "Flutter mobile app for mobile access to the FUEL system, enabling port staff to manage fuel operations and workflows remotely.",
    techStack: ["Flutter", "Dart", "REST API"],
  },
  {
    id: 3,
    title: "IHUB Integration Platform",
    category: "Backend",
    description:
      "Built with ASP.NET Core 3, acts as a JSON-to-JSON integration gateway between internal port systems and SAP.",
    techStack: ["ASP.NET Core", "C#", "SAP", "JSON Gateway"],
  },
  {
    id: 4,
    title: "Super Depo System",
    category: "Backend",
    description:
      ".NET Framework system to manage container flow in and out of port depots, improving operational visibility and tracking.",
    techStack: [".NET Framework", "C#", "Oracle", "PostgreSQL"],
  },
  {
    id: 5,
    title: "Integrator System",
    category: "Integration",
    description:
      "Developed with .NET Framework to convert XML messages to JSON format for legacy-to-modern system communication.",
    techStack: [".NET Framework", "C#", "XML", "JSON"],
  },
  {
    id: 6,
    title: "FUEL System",
    category: "Web",
    description:
      "Web application using CodeIgniter 2 to handle fuel (BBM) request workflows and reporting, integrated into port operations.",
    techStack: ["CodeIgniter 2", "PHP", "MySQL", "REST API"],
  },
  {
    id: 7,
    title: "Pelra System",
    category: "Backend",
    description:
      "Port system for documenting small vessel movements, cargo handling, and logging using .NET Framework.",
    techStack: [".NET Framework", "C#", "Oracle"],
  },
  {
    id: 8,
    title: "POS App — Bali Travel Startup",
    category: "Fullstack",
    description:
      "Java Android POS app with Node.js backend for managing travel agent transactions, bookings, and reports.",
    techStack: ["Java", "Node.js", "MySQL", "Android"],
  },
  {
    id: 9,
    title: "POS System — Quipster",
    category: "Fullstack",
    description:
      "Java Android POS app with CodeIgniter 3 and Node.js backend to handle sales, stock management, and reporting.",
    techStack: ["Java", "CodeIgniter 3", "Node.js", "MySQL"],
  },
  {
    id: 10,
    title: "Customer Loyalty Website",
    category: "Web",
    description:
      "Flutter web platform for rewarding points and vouchers to customers for loyalty management.",
    techStack: ["Flutter Web", "Dart", "REST API"],
  },
  {
    id: 11,
    title: "Looyal App",
    category: "Mobile",
    description:
      "Flutter mobile app to collect and analyze purchase receipts for customer loyalty tracking.",
    techStack: ["Flutter", "Dart", "REST API"],
  },
  {
    id: 12,
    title: "Wooblazz CRM App",
    category: "Mobile",
    description:
      "Flutter-based CRM app to track sales team performance, attendance, and activity management.",
    techStack: ["Flutter", "Dart", "Node.js", "PostgreSQL"],
  },
  {
    id: 13,
    title: "Leave & Overtime System",
    category: "Web",
    description:
      "Web-based interface to handle employee time-off requests and approvals, fully integrated with PayBiz and SAP HR modules.",
    techStack: ["PHP Native", "PostgreSQL", "SAP HR", "PayBiz"],
  },
  {
    id: 14,
    title: "Container Monitoring System",
    category: "Web",
    description:
      "Real-time container monitoring for depot operations, synchronized with SAP data for accuracy and visibility.",
    techStack: ["PHP", "PostgreSQL", "SAP"],
  },
  {
    id: 15,
    title: "Gate In/Out Reporting System",
    category: "Web",
    description:
      "Integrated system with Hikvision access control devices to monitor employee and visitor movement and generate security reports.",
    techStack: ["Laravel", "PHP", "PostgreSQL", "Hikvision"],
  },
  {
    id: 16,
    title: "Quipster Mini PO",
    category: "Web",
    description:
      "Mini purchase order system for Quipster to manage inventory items and streamline purchase order creation and approval workflows.",
    techStack: ["CodeIgniter 3", "Node.js", "TypeScript", "MySQL", "REST API"],
  },
  {
    id: 17,
    title: "Quipster Backoffice",
    category: "Web",
    description:
      "Backoffice system to support Quipster POS operations, including centralized product, transaction, and operational management.",
    techStack: ["CodeIgniter 3", "PHP", "Node.js", "TypeScript", "MySQL"],
  },
  {
    id: 18,
    title: "Income Financial Application",
    category: "Fullstack",
    description:
      "Financial application for Pelindo to manage corporate lending workflows for both Pelindo Group and non-Pelindo companies.",
    techStack: ["React.js", "ASP.NET Core 8", "Oracle"],
  },
];

export interface Experience {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  techStack: string[];
}

export const experiences: Experience[] = [
  {
    role: "Developer",
    company: "PT Integrasi Logistik Cipta Solusi",
    period: "Jul 2024 – Present",
    bullets: [
      "Worked on mission-critical port logistics and enterprise systems, with a focus on scalable backend development and enterprise integration.",
      "Developed systems to support fuel logistics, port traffic, container tracking, and internal-external system communication (SAP, PTOS, PKK, TPS, TTL).",
      "Ensured application stability by implementing robust error handling, reducing bugs, and optimizing system responsiveness.",
      "Designed system architecture and folder structure for maintainability and scalability, with clear documentation for future developers.",
      "Built multiple systems with focus on production-readiness and fast user interaction to support operational efficiency.",
    ],
    techStack: ["C#", ".NET Framework", "ASP.NET Core", "Flutter", "CodeIgniter", "Oracle", "PostgreSQL", "TypeScript"],
  },
  {
    role: "FullStack Engineer",
    company: "PT Tunas Kreasi Digital",
    period: "Dec 2022 – Apr 2024",
    bullets: [
      "Contributed to several startup-focused applications, including POS systems, loyalty platforms, and CRM tools across web and mobile platforms.",
      "Developed and maintained backend systems using Node.js, TypeScript, PHP Native, and CodeIgniter 3, and built mobile apps with Java (Android Native) and Flutter.",
      "Deployed and configured CI/CD pipelines on AWS using CentOS servers to ensure smooth delivery and updates across environments.",
      "Improved app stability by optimizing memory usage and error handling to reduce frequent force closes, especially on Android.",
      "Implemented unit testing on the POS system to ensure that application logic produced accurate and reliable output.",
    ],
    techStack: ["Java", "JavaScript", "TypeScript", "PHP", "Dart", "CodeIgniter", "Node.js", "React", "Flutter", "AWS", "GitHub CI/CD", "MySQL", "PostgreSQL"],
  },
  {
    role: "Programmer & App Analyst",
    company: "PT Indra Jaya Swastika",
    period: "Sep 2021 – Nov 2022",
    bullets: [
      "Designed and developed multiple in-house web systems from scratch, including leave/overtime management, container monitoring, and gate in/out reporting.",
      "Built stable applications using PHP Native, optimizing for low-maintenance structure and clear documentation in a legacy tech environment.",
      "Deployed all systems on an on-premises Ubuntu Linux server, handling full-cycle configuration and deployment.",
      "Integrated systems with SAP and third-party devices (Hikvision) to synchronize operational data and provide real-time access reports.",
      "Designed intuitive UI and ensured all systems were aligned with existing employee workflows for easier adoption.",
    ],
    techStack: ["Laravel", "PHP Native", "PostgreSQL", "Node.js", "Express.js", "JavaScript", "Ubuntu Linux"],
  },
  {
    role: "Intern",
    company: "PT Jayamas Medica Industri",
    period: "Jan 2021 – Apr 2021",
    bullets: [
      "Developed a web-based HR application using CodeIgniter and MySQL to automate employee attendance tracking.",
      "Integrated the system with fingerprint attendance machines to collect and process raw attendance data.",
      "Implemented modules for detecting incomplete or missing attendance records and generating detailed reports.",
      "Built features for employees to submit leave and overtime requests directly through the platform.",
      "Improved HR operational efficiency by minimizing manual data handling and reporting tasks.",
    ],
    techStack: ["JavaScript", "CodeIgniter", "PHP", "MySQL"],
  },
];

export interface Education {
  degree: string;
  school: string;
  year: string;
  description: string;
}

export const educations: Education[] = [
  {
    degree: "Bachelor's Degree in Information Systems",
    school: "Institut Teknologi Adhi Tama Surabaya",
    year: "2025",
    description:
      "Built a comprehensive HR system with attendance processing, off-site attendance, leave, overtime, and payroll modules.",
  },
  {
    degree: "Diploma in Information Systems",
    school: "Universitas Airlangga",
    year: "2021",
    description:
      "Developed a web-based attendance and leave management system using PHP, CodeIgniter, and MySQL.",
  },
];

export const coursework: string[] = [
  "Data Structures",
  "Database Systems",
  "Web Development",
  "Software Engineering",
  "System Integration",
  "Mobile Development",
];

export interface CertFocus {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
}

export const certFocus: CertFocus[] = [
  {
    icon: "</> ",
    title: "FullStack Developer",
    subtitle: "Professional Focus",
    description:
      "Building end-to-end web and mobile applications with clean architecture and modern frameworks.",
  },
  {
    icon: "{ }",
    title: "Backend Engineer",
    subtitle: "Professional Focus",
    description:
      "Designing scalable APIs, microservices, and server-side systems that power enterprise applications.",
  },
  {
    icon: "[ ]",
    title: "Mobile Developer",
    subtitle: "Professional Focus",
    description:
      "Crafting cross-platform mobile apps with Flutter and native Android for seamless user experiences.",
  },
  {
    icon: "~~",
    title: "Enterprise Integration",
    subtitle: "Professional Focus",
    description:
      "Connecting disparate systems via JSON gateways, SAP integrations, and robust middleware solutions.",
  },
];

export const stats = [
  { number: "3+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "Multi", label: "Platform Developer" },
  { number: "EI", label: "Enterprise Integration" },
];

export const services = [
  { icon: "🌐", label: "Web Development" },
  { icon: "📱", label: "Mobile Development" },
  { icon: "⚙️", label: "Backend Engineering" },
  { icon: "🔗", label: "Enterprise Integration" },
  { icon: "🗄️", label: "Database Design" },
  { icon: "🚀", label: "DevOps & Deployment" },
];

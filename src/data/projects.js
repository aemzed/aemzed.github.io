import leavePermissionOvertimeCover from "../Assets/Projects/covers/cover-leave.png";
import containerMonitoringCover from "../Assets/Projects/covers/cover-container.png";
import gateInOutReportingCover from "../Assets/Projects/covers/cover-gate.png";
import posBaliTravelCover from "../Assets/Projects/covers/cover-pos-bali.png";
import posQuipsterCover from "../Assets/Projects/covers/cover-pos-quipster.png";
import posQuispterMiniPoCover from "../Assets/Projects/covers/cover-quipster-mini-po.png";
import customerLoyaltyWebCover from "../Assets/Projects/covers/cover-loyalty-web.png";
import looyalAppCover from "../Assets/Projects/covers/cover-looyal.png";
import wooblazzCrmCover from "../Assets/Projects/covers/cover-wooblazz.png";
import superDepoCover from "../Assets/Projects/covers/cover-super-depo.png";
import pelraSystemCover from "../Assets/Projects/covers/cover-pelra.png";
import fuelSystemCover from "../Assets/Projects/covers/cover-fuel-system.png";
import apbsRebornCover from "../Assets/Projects/covers/cover-apbs.png";
import fuelMobileCover from "../Assets/Projects/covers/cover-fuel-mobile.png";
import ihubPlatformCover from "../Assets/Projects/covers/cover-ihub.png";
import integratorSystemCover from "../Assets/Projects/covers/cover-integrator.png";
import incomeSystemCover from "../Assets/Projects/covers/cover-income.png";

const projects = [
  {
    title: "Leave, Permission, and Overtime System",
    company: "PT Indra Jaya Swastika",
    role: "Programmer & App Analyst",
    period: "Sep 2021 - Nov 2022",
    domain: "HR Tech",
    description:
      "Web-based platform to handle employee leave, permission, and overtime workflows with a clean approval process.",
    highlights: [
      "Integrated with PayBiz and SAP HR modules",
      "Reduced manual HR coordination for approval flows",
      "Aligned workflow with existing company policies",
    ],
    stack: [
      "PHP Native",
      "Laravel",
      "PostgreSQL",
      "JavaScript",
      "SAP Integration",
    ],
    imgPath: leavePermissionOvertimeCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Container Monitoring System",
    company: "PT Indra Jaya Swastika",
    role: "Programmer & App Analyst",
    period: "Sep 2021 - Nov 2022",
    domain: "Logistics",
    description:
      "Real-time monitoring dashboard for depot container status with synchronized operational data from SAP.",
    highlights: [
      "Improved container visibility for operations team",
      "Provided near real-time status updates",
      "Kept depot data consistent with SAP records",
    ],
    stack: [
      "PHP Native",
      "Laravel",
      "PostgreSQL",
      "JavaScript",
      "SAP Integration",
    ],
    imgPath: containerMonitoringCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Gate In/Out Reporting System",
    company: "PT Indra Jaya Swastika",
    role: "Programmer & App Analyst",
    period: "Sep 2021 - Nov 2022",
    domain: "Security Reporting",
    description:
      "Integrated reporting system to track employee and visitor movement through gate access control devices.",
    highlights: [
      "Connected with Hikvision access control devices",
      "Generated comprehensive entry/exit reports",
      "Improved audit and security monitoring process",
    ],
    stack: [
      "PHP Native",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Hikvision Integration",
    ],
    imgPath: gateInOutReportingCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "POS App for Bali Travel Startup",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "POS",
    description:
      "Android POS application for travel transactions with backend services designed for startup-scale operations.",
    highlights: [
      "Delivered Java Android app for field usage",
      "Built Node.js backend for transaction handling",
      "Improved reliability through better error handling",
    ],
    stack: ["Java Android", "Node.js", "TypeScript", "MySQL", "AWS"],
    imgPath: posBaliTravelCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "POS System for Quipster",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "POS",
    description:
      "POS system covering sales, stock, and reporting modules with hybrid backend architecture.",
    highlights: [
      "Combined CI3 and Node.js service layer",
      "Supported operational reporting and stock flow",
      "Added unit testing for key business logic",
    ],
    stack: [
      "Java Android",
      "CodeIgniter 3",
      "Node.js",
      "MySQL",
      "GitHub CI/CD",
    ],
    imgPath: posQuipsterCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Quipster Mini PO",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "Inventory & Procurement",
    description:
      "Mini purchase order system for Quipster to manage inventory items and streamline purchase order workflows.",
    highlights: [
      "Managed product catalog and stock movement in one module",
      "Digitized purchase order creation and approval flow",
      "Improved visibility of inventory and procurement status",
    ],
    stack: ["CodeIgniter 3", "Node.js (TypeScript)", "MySQL", "REST API"],
    imgPath: posQuispterMiniPoCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Quipster Backoffice",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "POS Backoffice",
    description:
      "Backoffice system to support Quipster POS operations, including product, transaction, and operational management.",
    highlights: [
      "Centralized backoffice support for Quipster POS workflows",
      "Improved operational control for product and transaction data",
      "Maintained integration between web backoffice and POS services",
    ],
    stack: [
      "CodeIgniter 3",
      "PHP",
      "Node.js (TypeScript)",
      "MySQL",
      "REST API",
    ],
    imgPath: posQuipsterCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Customer Loyalty Website",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "Loyalty Platform",
    description:
      "Flutter web platform for loyalty points and voucher management to increase customer retention.",
    highlights: [
      "Implemented points and voucher workflows",
      "Created reusable modular UI architecture",
      "Designed for startup iteration speed",
    ],
    stack: ["Flutter Web", "Dart", "Node.js", "TypeScript", "AWS"],
    imgPath: customerLoyaltyWebCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Looyal App",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "Mobile Loyalty",
    description:
      "Mobile loyalty app to collect purchase receipts and transform them into actionable reward data.",
    highlights: [
      "Built cross-platform app with Flutter",
      "Designed receipt collection and validation flow",
      "Enabled purchase behavior analysis support",
    ],
    stack: ["Flutter", "Dart", "Node.js", "MySQL", "AWS"],
    imgPath: looyalAppCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Wooblazz CRM App",
    company: "PT Tunas Kreasi Digital",
    role: "FullStack Engineer",
    period: "Dec 2022 - Apr 2024",
    domain: "CRM",
    description:
      "Flutter-based CRM application for managing sales activity, attendance, and team performance tracking.",
    highlights: [
      "Improved visibility of sales team activity",
      "Supported attendance and KPI-oriented workflows",
      "Focused on responsive mobile-first UX",
    ],
    stack: ["Flutter", "Dart", "Node.js", "TypeScript", "PostgreSQL"],
    imgPath: wooblazzCrmCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Super Depo System",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Port Logistics",
    description:
      "Container depot management system to monitor in/out flows and improve operational visibility.",
    highlights: [
      "Tracked container movement in depot operations",
      "Improved operational visibility for supervisors",
      "Built with enterprise deployment considerations",
    ],
    stack: [".NET Framework", "C#", "SQL Server", "Enterprise Integration"],
    imgPath: superDepoCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Pelra System",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Port Operations",
    description:
      "Operational system for documenting small vessel movement, cargo handling, and activity logs.",
    highlights: [
      "Standardized small-vessel activity records",
      "Improved logging consistency across workflows",
      "Supported operational and compliance reporting",
    ],
    stack: [".NET Framework", "C#", "SQL Server", "Port Operation Workflow"],
    imgPath: pelraSystemCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "FUEL System",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Fuel Workflow",
    description:
      "Web application to process BBM request workflows and reporting for operational fuel management.",
    highlights: [
      "Digitized request and approval fuel process",
      "Improved reporting turnaround time",
      "Integrated into existing port operation flow",
    ],
    stack: ["CodeIgniter 2", "PHP", "MySQL", "Workflow Automation"],
    imgPath: fuelSystemCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "APBS Reborn System",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Enterprise Integration",
    description:
      "Rebuilt legacy APBS into ASP.NET Core 8 for vessel permit requests integrated with multiple external systems.",
    highlights: [
      "Modernized core APBS workflow architecture",
      "Integrated with TPS, PTOS-M, PTOS-PK, PKK, and TTL",
      "Improved response time and maintainability",
    ],
    stack: ["ASP.NET Core 8", "C#", "REST API", "System Integration"],
    imgPath: apbsRebornCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "FUEL Mobile App",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Mobile Operations",
    description:
      "Flutter mobile application to enable remote fuel operation management for port staff in the field.",
    highlights: [
      "Enabled remote access for operational teams",
      "Reduced dependency on desktop-only workflows",
      "Maintained consistency with existing fuel system",
    ],
    stack: ["Flutter", "Dart", "REST API", "Operational Mobility"],
    imgPath: fuelMobileCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "IHUB Integration Platform",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Integration Gateway",
    description:
      "JSON-to-JSON integration gateway connecting internal systems with SAP for consistent data exchange.",
    highlights: [
      "Centralized integration routing and transformation",
      "Improved reliability of cross-system communication",
      "Reduced integration complexity per application",
    ],
    stack: ["ASP.NET Core 3", "C#", "JSON", "SAP Integration"],
    imgPath: ihubPlatformCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Integrator System",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Legacy Modernization",
    description:
      "Middleware service to convert XML messages into JSON format for legacy-to-modern system interoperability.",
    highlights: [
      "Bridged legacy XML with modern JSON services",
      "Enabled smoother migration path for legacy modules",
      "Improved data interoperability across platforms",
    ],
    stack: [".NET Framework", "C#", "XML", "JSON", "System Integration"],
    imgPath: integratorSystemCover,
    ghLink: "",
    demoLink: "",
  },
  {
    title: "Income Financial Application",
    company: "PT Integrasi Logistik Cipta Solusi",
    role: "Developer",
    period: "Jul 2024 - Present",
    domain: "Financial Services",
    description:
      "Financial application for Pelindo to manage corporate lending workflows for both Pelindo Group and non-Pelindo companies.",
    highlights: [
      "Handled corporate loan submission and approval workflows",
      "Supported financing for Pelindo Group and external companies",
      "Improved visibility of lending process and loan status",
    ],
    stack: ["React.js", "ASP.NET 8", "Oracle"],
    imgPath: incomeSystemCover,
    ghLink: "",
    demoLink: "",
  },
];

export default projects;

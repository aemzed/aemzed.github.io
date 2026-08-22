import type { Copy } from './copy';

// Untranslated content (names, stacks, dates). `blurb` points at a copy key
// so the prose stays in copy.ts with its Indonesian counterpart.
export const PROJECTS: { org: string; title: string; blurb: keyof Copy; stack: string }[] = [
  { org: 'PELINDO SOLUSI DIGITAL', title: 'Portal APBS', blurb: 'p1', stack: 'ASP.NET CORE 8 · ORACLE · SAP' },
  { org: 'PELINDO SOLUSI DIGITAL', title: 'IHUB Integration Platform', blurb: 'p2', stack: 'ASP.NET CORE 3 · REST · SAP' },
  { org: 'PELINDO SOLUSI DIGITAL', title: 'FUEL System & Mobile App', blurb: 'p3', stack: 'CODEIGNITER 2 · FLUTTER' },
  { org: 'PELINDO SOLUSI DIGITAL', title: 'Super Depo System', blurb: 'p4', stack: '.NET FRAMEWORK · ORACLE' },
  { org: 'PELINDO SOLUSI DIGITAL', title: 'Income Financial Application', blurb: 'p5', stack: 'FULLSTACK · REPORTING' },
  { org: 'PT TUNAS KREASI DIGITAL', title: 'POS, Loyalty & CRM Products', blurb: 'p6', stack: 'JAVA ANDROID · FLUTTER · NODE.JS' },
];

export const STEPS: { title: keyof Copy; body: keyof Copy }[] = [
  { title: 'pr1t', body: 'pr1b' },
  { title: 'pr2t', body: 'pr2b' },
  { title: 'pr3t', body: 'pr3b' },
  { title: 'pr4t', body: 'pr4b' },
];

export const TIMELINE = [
  { from: '2024', to: null, what: 'Developer · Pelindo Solusi Digital' },
  { from: '2022', to: '2024', what: 'Fullstack Engineer · PT Tunas Kreasi Digital' },
  { from: '2021', to: '2022', what: 'Programmer & App Analyst · PT Indra Jaya Swastika' },
  { from: '2021', to: '', what: 'Intern · PT Jayamas Medica Industri' },
];

export const SKILLS: { label: keyof Copy; items: string }[] = [
  { label: 'skLang', items: 'JavaScript, TypeScript, PHP, Java, Dart, C#, SQL' },
  { label: 'skBackend', items: 'Node.js, Express.js, Laravel, CodeIgniter, ASP.NET Core, .NET Framework' },
  { label: 'skFront', items: 'React, Flutter, Java Android Native' },
  { label: 'skData', items: 'PostgreSQL, MySQL, Oracle · Docker, AWS, GitHub CI/CD, Ubuntu' },
  { label: 'skIntegration', items: 'SAP, REST API, XML/JSON conversion, Hikvision, PTOS, TPS, TTL' },
];

export const CERTS = [
  { name: 'Frontend Developer (React)', by: 'HACKERRANK · APR 2026' },
  { name: 'Node.js (Intermediate)', by: 'HACKERRANK · APR 2026' },
  { name: 'Problem Solving (Intermediate)', by: 'HACKERRANK · APR 2026' },
  { name: 'Software Engineer Certificate', by: 'HACKERRANK · JUL 2025' },
  { name: 'SQL (Advanced)', by: 'HACKERRANK · JUL 2025' },
  { name: 'Rest API (Intermediate)', by: 'HACKERRANK · JUL 2025' },
  { name: 'JavaScript (Intermediate)', by: 'HACKERRANK · JUL 2025' },
  { name: 'C# (Basic)', by: 'HACKERRANK · AUG 2025' },
];

export const STACK_MARQUEE = [
  'C# / .NET Framework', 'ASP.NET Core 8', 'Flutter', 'Node.js',
  'Laravel', 'SAP Integration', 'Oracle / PostgreSQL', 'Docker · AWS',
];

export const RESUME = 'Aditya_Maulana_Zunaidi_Resume.pdf';
export const EMAIL = 'adityazunaidi115@gmail.com';
export const PHONE = '+62 859 3150 4125';

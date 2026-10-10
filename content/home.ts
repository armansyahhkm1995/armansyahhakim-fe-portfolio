export type PortfolioProject = {
  slug: string;
  index: string;
  title: string;
  description: string;
  partner: string;
  discipline: string;
  domainTag: string;
  outcomeMetric: string;
  image: string;
};

export type BuyerSituation = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  relatedProjects: string[];
};

export const buyerSituations: BuyerSituation[] = [
  {
    index: "01",
    title: "Complex Data & Telemetry",
    subtitle: "Decision-Support Environments",
    description:
      "Transforming high-density telemetry, sensor feeds, and scientific datasets into intuitive operational interfaces without cognitive overload.",
    relatedProjects: ["Corteva", "EMS"],
  },
  {
    index: "02",
    title: "High-Constraint Workflows",
    subtitle: "Regulated & Public Sector Systems",
    description:
      "Navigating stringent regulatory boundaries, privacy protocols, and multi-stakeholder operational dependencies with empathy and clarity.",
    relatedProjects: ["AMASE"],
  },
  {
    index: "03",
    title: "Authoring Tools & Systems",
    subtitle: "Design Architecture & Enablement",
    description:
      "Simplifying specialized technical pipelines (e.g., Unity 3D workflows) into accessible authoring platforms and scaling multi-product design systems.",
    relatedProjects: ["VTS", "Falah One"],
  },
];

export const featuredProjects: PortfolioProject[] = [
  {
    slug: "corteva",
    index: "01",
    title: "Corteva",
    description:
      "Designing an agricultural intelligence platform that transforms multi-layered crop telemetry, weather, and field data into high-confidence advisory decisions.",
    partner: "Corteva Agriscience",
    discipline: "Experience Design",
    domainTag: "Enterprise AgTech • Telemetry Data",
    outcomeMetric: "Turned dense agronomical data into actionable field advisory workflows.",
    image:
      "/images/corteva/SectionHero - Corteva and farmer photo session.webp",
  },
  {
    slug: "amase",
    index: "02",
    title: "AMASE",
    description:
      "Redesigning a case management and aftercare social support platform to coordinate offender rehabilitation progress across inter-agency caseworkers.",
    partner: "Social Support System",
    discipline: "Product Design",
    domainTag: "Public Sector • Case Management",
    outcomeMetric: "Structured sensitive case monitoring under strict regulatory constraints.",
    image:
      "/images/amase/Assoc Prof Muhammad Faishal Ibrahim chatting with inmates from the Integrated Criminogenic Programme.webp",
  },
  {
    slug: "ems",
    index: "03",
    title: "EMS",
    description:
      "A mission-critical energy management system built to monitor, control, and optimize distributed high-voltage energy grids in real-time.",
    partner: "Energy Management System",
    discipline: "Product Design",
    domainTag: "Industrial IoT • Power Grid Operations",
    outcomeMetric: "Mitigated operator fatigue during high-stakes grid telemetry fluctuations.",
    image: "/images/ems/Rancangan skema EMS.webp",
  },
  {
    slug: "falahOne",
    index: "04",
    title: "Falah One",
    description:
      "An enterprise internal design system establishing cross-team design language, accessible token architecture, and reusable component libraries.",
    partner: "Falah Inovasi Teknologi",
    discipline: "Design Architecture",
    domainTag: "Design Systems • Governance",
    outcomeMetric: "Unified cross-squad front-end delivery and eliminated design fragmentation.",
    image: "/images/falahOne/falah_hero.webp",
  },
  {
    slug: "vts",
    index: "05",
    title: "VTS Workbench & Training",
    description:
      "An interactive 3D training authoring platform that turns steep Unity engineering pipelines into an approachable scenario builder for maintenance instructors.",
    partner: "Virtual Training System",
    discipline: "Product Design",
    domainTag: "Simulation • 3D Authoring Suite",
    outcomeMetric: "Democratized 3D training module creation without requiring coding skills.",
    image: "/images/vts/Hero.webp",
  },
];

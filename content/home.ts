export type PortfolioProject = {
  slug: string;
  index: string;
  title: string;
  description: string;
  partner: string;
  discipline: string;
  image: string;
};

export const featuredProjects: PortfolioProject[] = [
  {
    slug: "corteva",
    index: "01",
    title: "Corteva",
    description:
      "Designing a product experience that transforms complex agricultural data into actionable decisions.",
    partner: "Corteva",
    discipline: "Experience Design",
    image:
      "./images/corteva/SectionHero - Corteva and farmer photo session.webp",
  },
  {
    slug: "amase",
    index: "02",
    title: "AMASE",
    description: "Redesigning an existing social support platform.",
    partner: "Amase",
    discipline: "Product Design",
    image:
      "./images/amase/Assoc Prof Muhammad Faishal Ibrahim chatting with inmates from the Integrated Criminogenic Programme.webp",
  },
  {
    slug: "ems",
    index: "03",
    title: "EMS",
    description:
      "A product experience designed to turn distributed energy data into clearer monitoring, control, and operational decisions.",
    partner: "Energy Management System",
    discipline: "Product Design",
    image: "./images/ems/Rancangan skema EMS.webp",
  },
  {
    slug: "falahOne",
    index: "04",
    title: "Falah One",
    description:
      "An internal design system designed to organize cross-team design language.",
    partner: "Falah Inovasi Teknologi",
    discipline: "Product Design",
    image: "./images/falahone/falah_hero.webp",
  },
  {
    slug: "vts",
    index: "05",
    title: "VTS Workbench & Maintenance Training",
    description:
      "A product experience designed to simplify 3D training content creation by turning complex Unity workflows into a more approachable authoring and training experience.",
    partner: "VTS",
    discipline: "Product Design",
    image: "./images/vts/Hero.webp",
  },
];

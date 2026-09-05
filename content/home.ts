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
    discipline: "Product Design",
    image: "https://images.unsplash.com/...",
  },
  {
    slug: "amase",
    index: "02",
    title: "AMASE",
    description: "Redesigning an existing social support platform.",
    partner: "AMASE",
    discipline: "Product Design",
    image: "https://images.unsplash.com/...",
  },
];

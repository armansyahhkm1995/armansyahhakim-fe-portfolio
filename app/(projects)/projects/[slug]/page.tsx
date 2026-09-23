import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjects } from "@/content/projects";
import CortevaCaseStudy from "@/components/projects/corteva/components/CortevaCaseStudy";
import AmaseCaseStudy from "@/components/projects/amase/components/AmaseCaseStudy";
import EMSCaseStudy from "@/components/projects/ems/components/EMSCaseStudy";
import FalahOneCaseStudy from "@/components/projects/falahOne/components/FalahOneCaseStudy";
import VTSCaseStudy from "@/components/projects/vts/components/VTSCaseStudy";

// CODE-002: Registry pattern for case study selection
// Maps slug to case study component — adding new projects only requires updating this object
const caseStudyRegistry = {
  corteva: CortevaCaseStudy,
  amase: AmaseCaseStudy,
  ems: EMSCaseStudy,
  falahOne: FalahOneCaseStudy,
  vts: VTSCaseStudy,
} as const;

type CaseStudySlug = keyof typeof caseStudyRegistry;

export async function generateStaticParams() {
  return getProjects().map((project) => ({
    slug: project.slug,
  }));
}

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const title = `${project.title} — Armansyah Hakim`;
  const description = project.seoDescription ?? project.description;

  // Use project.ogImage from content config (SEO-001 fix)
  const ogImage = project.ogImage;

  return {
    title,
    description,

    openGraph: {
      title,
      description,
      type: "article",
      ...(ogImage && {
        images: [
          {
            url: encodeURI(ogImage),
            alt: `${project.title} case study — Armansyah Hakim`,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage && {
        images: [encodeURI(ogImage)],
      }),
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // CODE-002: Use registry instead of if/else chain
  const CaseStudy = caseStudyRegistry[slug as CaseStudySlug];

  if (!CaseStudy) {
    notFound();
  }

  return <CaseStudy />;
}

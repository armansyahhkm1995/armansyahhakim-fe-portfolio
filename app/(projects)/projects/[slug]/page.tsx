import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug, getProjects } from "@/content/projects";
import CortevaCaseStudy from "@/components/projects/corteva/components/CortevaCaseStudy";
import AmaseCaseStudy from "@/components/projects/amase/components/AmaseCaseStudy";
import EMSCaseStudy from "@/components/projects/ems/components/EMSCaseStudy";
import FalahOneCaseStudy from "@/components/projects/falahOne/components/FalahOneCaseStudy";
import VTSCaseStudy from "@/components/projects/vts/components/VTSCaseStudy";

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

  if (project.slug === "corteva") {
    return <CortevaCaseStudy />;
  }

  if (project.slug === "amase") {
    return <AmaseCaseStudy />;
  }

  if (project.slug === "ems") {
    return <EMSCaseStudy />;
  }

  if (project.slug === "falahOne") {
    return <FalahOneCaseStudy />;
  }

  if (project.slug === "vts") {
    return <VTSCaseStudy />;
  }

  notFound();
}

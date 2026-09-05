import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/content/projects";
import CortevaCaseStudy from "@/components/projects/corteva/components/CortevaCaseStudy";
import AmaseCaseStudy from "@/components/projects/amase/components/AmaseCaseStudy";

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

  const ogImage =
    project.slug === "corteva"
      ? "/projects/corteva/Farmer harvest rice in the field.webp"
      : undefined;

  return {
    title,

    openGraph: {
      title,
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

  notFound();
}

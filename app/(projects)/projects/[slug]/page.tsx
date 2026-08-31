import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProjectBySlug } from "@/content/projects";
import { CortevaCaseStudy } from "@/components/projects/corteva/CortevaCaseStudy";

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

  const ogImage =
    project.slug === "corteva"
      ? "/projects/corteva/Farmer harvest rice in the field.webp"
      : undefined;

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

  return (
    <main>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.year}</p>
      <p>{project.role}</p>
      <p>{project.discipline}</p>
    </main>
  );
}

import type { MetadataRoute } from "next";

import { getProjects } from "@/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();

  const projectUrls = projects.map((project) => ({
    url: `/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    ...projectUrls,
  ];
}

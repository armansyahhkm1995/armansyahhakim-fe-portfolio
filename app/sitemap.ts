import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";

import { getProjects } from "@/content/projects";

function getGitLastModified(filePath: string): Date {
  try {
    const output = execSync(`git log -1 --format=%ci -- "${filePath}"`, {
      encoding: "utf-8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return output ? new Date(output) : new Date();
  } catch {
    return new Date();
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getProjects();

  const projectUrls = projects.map((project) => {
    const contentFile = `content/projects/${project.slug}.ts`;
    return {
      url: `/projects/${project.slug}`,
      lastModified: getGitLastModified(contentFile),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  const homeLastModified = getGitLastModified("app/(home)/page.tsx");

  return [
    {
      url: "/",
      lastModified: homeLastModified,
      changeFrequency: "monthly",
      priority: 1,
    },

    ...projectUrls,
  ];
}

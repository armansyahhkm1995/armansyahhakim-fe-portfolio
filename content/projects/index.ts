import { amaseProject } from "./amase";
import { cortevaProject } from "./corteva";

export const projects = {
  amase: amaseProject,
  corteva: cortevaProject,
} as const;

export type ProjectSlug = keyof typeof projects;

export function getProjectBySlug(slug: string) {
  return projects[slug as ProjectSlug] ?? null;
}

export function getProjects() {
  return Object.values(projects);
}

import { amaseProject } from "./amase";
import { cortevaProject } from "./corteva";
import { emsProject } from "./ems";
import { falahOneProject } from "./falahOne";
import { vtsProject } from "./vts";

export const projects = {
  amase: amaseProject,
  corteva: cortevaProject,
  ems: emsProject,
  vts: vtsProject,
  falahOne: falahOneProject,
} as const;

export type ProjectSlug = keyof typeof projects;

export function getProjectBySlug(slug: string) {
  return projects[slug as ProjectSlug] ?? null;
}

export function getProjects() {
  return Object.values(projects);
}

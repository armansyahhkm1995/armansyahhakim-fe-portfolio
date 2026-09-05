import { getProjects } from "@/content/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main>
      <h1>Projects</h1>

      {projects.map((project) => (
        <ProjectCard
          key={project.slug}
          slug={project.slug}
          title={project.title}
          description={project.description}
          year={project.year}
          role={project.role}
          discipline={project.discipline}
        />
      ))}
    </main>
  );
}

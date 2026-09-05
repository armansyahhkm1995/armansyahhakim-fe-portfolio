import Link from "next/link";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  year: string;
  role: string;
  discipline: string;
};

export function ProjectCard({
  slug,
  title,
  description,
  year,
  role,
  discipline,
}: ProjectCardProps) {
  return (
    <article>
      <Link href={`/projects/${slug}`}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{year}</p>
        <p>{role}</p>
        <p>{discipline}</p>
      </Link>
    </article>
  );
}

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
    <article className="group">
      <Link
        href={`/projects/${slug}`}
        aria-label={`${title} — ${description}`}
        className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent transition-colors"
      >
        <header>
          <h2 className="font-display text-xl leading-snug group-hover:text-accent transition-colors">
            {title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </header>
        <footer className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <time dateTime={year}>{year}</time>
          <span aria-hidden="true">·</span>
          <span>{role}</span>
          <span aria-hidden="true">·</span>
          <span>{discipline}</span>
        </footer>
      </Link>
    </article>
  );
}

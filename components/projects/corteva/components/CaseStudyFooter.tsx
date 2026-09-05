export default function CaseStudyFooter() {
  return (
    <footer className="pb-20 pt-12 md:pb-[120px] md:pt-16">
      <div className="mx-auto max-w-[var(--cs-content-max-width)] px-[var(--cs-content-padding)]">
        <div className="mb-8 h-px w-full bg-[var(--cs-color-text-primary)]" />

        <div className="flex items-center justify-between gap-6">
          <span
            className="
              font-[var(--cs-font-mono)]
              text-[12px]
              tracking-[0.04em]
              text-[var(--cs-color-text-muted)]
            "
          >
            CORTEVA / 2019
          </span>

          <a
            href="#"
            className="
              font-[var(--cs-font-mono)]
              text-[12px]
              font-semibold
              tracking-[0.04em]
              text-[var(--cs-color-text-primary)]
              no-underline
              transition-colors
              duration-200
              hover:text-[var(--cs-color-accent)]
            "
          >
            NEXT CASE STUDY →
          </a>
        </div>
      </div>
    </footer>
  );
}

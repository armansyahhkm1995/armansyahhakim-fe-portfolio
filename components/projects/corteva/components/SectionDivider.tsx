interface SectionDividerProps {
  number: string;
  title: string;
  subtitle?: string;
}

export default function SectionDivider({
  number,
  title,
  subtitle,
}: SectionDividerProps) {
  return (
    <div
      className="
        mb-12
        flex
        flex-col
        items-start
        gap-2
        border-b
        border-[var(--cs-color-border)]
        pb-6
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:gap-0
      "
    >
      <div className="flex items-center gap-3">
        <span
          className="
            font-[var(--cs-font-mono)]
            text-[12px]
            font-medium
            text-[var(--cs-color-accent)]
          "
        >
          {number}
        </span>

        <span
          className="
            font-[var(--cs-font-sans)]
            text-[12px]
            font-semibold
            text-[var(--cs-color-accent)]
          "
        >
          {title}
        </span>
      </div>

      {subtitle && (
        <span
          className="
            font-[var(--cs-font-mono)]
            text-[11px]
            uppercase
            text-[var(--cs-color-text-muted)]
          "
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}

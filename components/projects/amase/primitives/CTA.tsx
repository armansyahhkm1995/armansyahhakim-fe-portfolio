import type { AnchorHTMLAttributes } from "react";

interface AnimatedCTAProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
}

export function AnimatedCTA({ label, className, ...props }: AnimatedCTAProps) {
  return (
    <a
      {...props}
      className={[
        "group inline-flex items-center gap-4 rounded-full",
        "border border-hairline-strong px-7 py-3.5",
        "text-sm tracking-wide",
        "transition-colors duration-500",
        "hover:border-ember",
        "focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-ember",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-background",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span>{label}</span>

      <span
        aria-hidden="true"
        className="relative block h-px w-8 overflow-hidden bg-current opacity-50"
      >
        <span className="absolute inset-0 -translate-x-full bg-ember transition-transform duration-700 ease-out group-hover:translate-x-0" />
      </span>
    </a>
  );
}

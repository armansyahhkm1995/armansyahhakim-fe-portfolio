import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type EditorialSectionProps = {
  id?: string;
  label?: string;
  children: ReactNode;
  className?: string;
};

export function EditorialSection({
  id,
  label,
  children,
  className = "",
}: EditorialSectionProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-32 md:px-12 md:py-48 ${className}`}
    >
      <div className="mx-auto w-full max-w-350">
        {label && (
          <Reveal>
            <div className="mb-16 flex items-center gap-6">
              <span className="text-[0.7rem] font-medium tracking-[0.28em] text-muted-foreground uppercase">
                {label}
              </span>

              <span className="h-px flex-1 bg-border" />
            </div>
          </Reveal>
        )}

        {children}
      </div>
    </section>
  );
}

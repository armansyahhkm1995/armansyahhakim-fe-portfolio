import Link from "next/link";
import { EditorialSection } from "@/components/primitives/EditorialSection";
import { Reveal } from "@/components/primitives/Reveal";
import { buyerSituations } from "@/content/home";

export function ValueBridge() {
  return (
    <EditorialSection
      id="specializations"
      label="Core Specializations"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            Where I deliver the highest value:
            <br />
            Solving systems where standard UI templates fail.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Recruiters and product leaders hire me when products involve dense data models,
            critical human decisions, or technical authoring bottlenecks.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-3">
        {buyerSituations.map((item, index) => (
          <Reveal key={item.index} delay={index * 0.08}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-[var(--home-paper)] p-8 transition-all hover:border-foreground/30 hover:shadow-sm">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                  {item.index}
                </span>

                <h3 className="font-display mt-4 text-2xl leading-snug sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-1 font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {item.subtitle}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 border-t border-border/80 pt-5">
                <span className="block text-[0.7rem] font-mono tracking-wider text-muted-foreground uppercase">
                  Proven in:
                </span>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.relatedProjects.map((proj) => (
                    <span
                      key={proj}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-foreground/80 bg-muted/20"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
}

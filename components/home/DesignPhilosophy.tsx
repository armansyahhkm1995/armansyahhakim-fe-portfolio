import { EditorialSection } from "@/components/primitives/EditorialSection";
import { Reveal } from "@/components/primitives/Reveal";

const principles = [
  {
    number: "01",
    title: "Question First",
    body: "Start with understanding the true operational problem before proposing solutions. Challenge assumptions until root constraints are exposed.",
  },
  {
    number: "02",
    title: "Evidence Always",
    body: "Every strategic product decision should be anchored in research, field observation, or validated telemetry—never subjective decoration.",
  },
  {
    number: "03",
    title: "Systems Thinking",
    body: "Design beyond isolated interfaces. Model relationships, technical constraints, data dependencies, and long-term organizational impact.",
  },
  {
    number: "04",
    title: "Design for Outcomes",
    body: "Measure design success through human behavioral change and concrete business metrics, not aesthetic polish alone.",
  },
];

export function DesignPhilosophy() {
  return (
    <EditorialSection id="philosophy" label="Design Philosophy">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
            Four principles that survive
            <br className="hidden sm:block" />
            every industry, brief, and deadline.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A battle-tested decision filter for navigating ambiguity in complex product environments.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-2">
        {principles.map((principle, index) => (
          <Reveal key={principle.number} delay={index * 0.06}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-[var(--home-paper)] p-8 transition-colors hover:border-foreground/30">
              <div>
                <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">
                  {principle.number}
                </span>

                <h3 className="font-display mt-4 text-2xl sm:text-3xl">
                  {principle.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {principle.body}
                </p>
              </div>

              <div className="mt-6 border-t border-border/60 pt-4">
                <span className="font-mono text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
                  Operating Standard
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
}

import { EditorialSection } from "@/components/primitives/EditorialSection";
import { Reveal } from "@/components/primitives/Reveal";

const principles = [
  {
    number: "01",
    title: "Question First",
    body: "Start with understanding the real problem before proposing solutions.",
  },
  {
    number: "02",
    title: "Evidence Always",
    body: "Every important decision should be supported by research or observation.",
  },
  {
    number: "03",
    title: "Systems Thinking",
    body: "Design beyond interfaces by understanding relationships, constraints, and long-term impact.",
  },
  {
    number: "04",
    title: "Design for Outcomes",
    body: "Measure success through human and business outcomes, not visual polish.",
  },
];

export function DesignPhilosophy() {
  return (
    <EditorialSection id="philosophy" label="Design Philosophy">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <h2 className="font-display text-[2.5rem] leading-[1.05] sm:text-6xl">
            Four principles that survive
            <br className="hidden sm:block" />
            every industry, brief, and deadline.
          </h2>
        </Reveal>
      </div>

      <div className="mx-auto mt-28 max-w-3xl">
        {principles.map((principle, index) => (
          <Reveal key={principle.number} delay={index * 0.05}>
            <div className="relative pb-20 text-center">
              <div className="text-[0.7rem] tracking-[0.28em] text-muted-foreground">
                {principle.number}
              </div>

              <h3 className="font-display mt-5 text-3xl sm:text-[2.75rem]">
                {principle.title}
              </h3>

              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
                {principle.body}
              </p>

              {index < principles.length - 1 && (
                <span className="mx-auto mt-14 block h-14 w-px bg-border" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </EditorialSection>
  );
}

"use client";

import { motion } from "motion/react";

interface DivisionInfo {
  division: string;
  technologies: string;
  primaryOutput: string;
  divergencePattern: string;
}

interface FragmentationSymptom {
  index: string;
  title: string;
  symptom: string;
  impact: string;
}

const DIVISIONS: DivisionInfo[] = [
  {
    division: "Web Developer Squad",
    technologies: "Next.js · React · Tailwind CSS · TypeScript · Responsive HTML5 DOM",
    primaryOutput: "Industrial IoT dashboards, cloud SaaS platforms, and mobile apps.",
    divergencePattern: "Relied on web flexbox, Tailwind utility classes, and browser DOM layout engines.",
  },
  {
    division: "Unity Developer Squad",
    technologies: "Unity 3D Engine · C# · World Space Canvas · OpenXR · VR/AR SDKs",
    primaryOutput: "Military maintenance simulators, virtual reality training, and spatial 3D environments.",
    divergencePattern: "Rendered UI as 3D textures in stereoscopic space with strict 90 FPS draw-call budgets.",
  },
  {
    division: "Content Developer Squad",
    technologies: "Figma · Modern Web CMS · Vector SVG · Motion Graphics · Brand Design",
    primaryOutput: "Public landing pages, company profiles (compro), and social media digital collateral.",
    divergencePattern: "Exported ad-hoc vector and rasterized assets without synchronized token governance.",
  },
];

const FRAGMENTATION_SYMPTOMS: FragmentationSymptom[] = [
  {
    index: "01",
    title: "14+ Divergent Button Variations",
    symptom: "Every squad re-engineered buttons from scratch with different padding, radius, and active states.",
    impact: "Brand dilution across client demos and wasted developer sprints reinventing base primitives.",
  },
  {
    index: "02",
    title: "Hardcoded Hex Values Across 80+ Repos",
    symptom: "Colors like '#1E3A8A' were hardcoded across CSS stylesheets, React TSX, and Unity C# scripts.",
    impact: "Updating brand accents or theming required manual codebase audits and risky multi-repo commits.",
  },
  {
    index: "03",
    title: "Severe Accessibility & Contrast Failures",
    symptom: "Low-contrast gray-on-dark text combinations failed WCAG standards and caused severe VR eye fatigue.",
    impact: "Enterprise defense and government procurement contracts risked compliance rejections.",
  },
  {
    index: "04",
    title: "Zero Cross-Platform Token Synchronization",
    symptom: "A Figma component update by designers never propagated automatically to Unity or Web front-ends.",
    impact: "Design-developer drift widened with every release, turning design reviews into tedious bug-hunting.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionFriction() {
  return (
    <section id="friction" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider & label */}
        <div className="flex flex-col items-start gap-2 border-b border-[var(--cs-color-border)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              02
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Cross-Platform Fragmentation
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Three engineering squads, diverse technical runtimes, zero shared source of truth.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            When teams scale independently across web/mobile applications, Unity 3D/VR simulators, and marketing content, UI patterns fragment rapidly. Each team solved layout, color, and interaction problems in complete isolation.
          </p>
        </div>

        {/* The 3 Squads Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DIVISIONS.map((item) => (
            <motion.div
              key={item.division}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                  {item.division}
                </span>
                <h3 className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                  {item.primaryOutput}
                </h3>
                <p className="font-mono text-[11px] text-[var(--cs-color-text-secondary)]">
                  Stack: {item.technologies}
                </p>
              </div>

              <div className="border-t border-[var(--cs-color-border)] pt-3">
                <span className="font-mono text-[10px] font-bold uppercase text-[var(--cs-color-text-muted)]">
                  Divergence Factor:
                </span>
                <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-primary)] font-medium">
                  {item.divergencePattern}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Symptoms of Fragmentation */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              The Four Costly Symptoms of Systemic Fragmentation
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
              Audit findings across internal repositories revealed massive duplicate engineering hours and customer-facing inconsistency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {FRAGMENTATION_SYMPTOMS.map((symptom) => (
              <div
                key={symptom.index}
                className="flex flex-col justify-between gap-3 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-5 sm:p-6"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold text-[var(--cs-color-text-muted)]">
                    {symptom.index} / AUDIT FINDING
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-[var(--cs-color-text-primary)]">
                    {symptom.title}
                  </h4>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {symptom.symptom}
                  </p>
                </div>

                <div className="border-t border-[var(--cs-color-border)] pt-3">
                  <span className="font-mono text-[10px] font-semibold uppercase text-red-600">
                    Business Cost
                  </span>
                  <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-primary)] font-medium">
                    {symptom.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

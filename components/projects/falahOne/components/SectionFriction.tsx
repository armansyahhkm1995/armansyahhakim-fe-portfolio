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
    division: "Software & Web Division",
    technologies: "Next.js · React · Tailwind CSS · TypeScript · HTML5 DOM",
    primaryOutput: "Industrial IoT dashboards, administrative cockpits, analytics portals.",
    divergencePattern: "Relied on web flexbox, Tailwind classes, and browser layout engines.",
  },
  {
    division: "Simulation & 3D Division",
    technologies: "Unity 3D Engine · C# · World Space Canvas · High-poly 3D models",
    primaryOutput: "Interactive military maintenance trainers and physical equipment simulators.",
    divergencePattern: "Rendered UI as 3D textures in camera space with fixed pixel dimensions.",
  },
  {
    division: "VR/AR Immersive Division",
    technologies: "OpenXR · HTC Vive / Quest 3 SDKs · Spatial Controller Handshakes",
    primaryOutput: "Virtual Reality technical procedure training and immersive language labs.",
    divergencePattern: "UI placed in stereoscopic 3D space requiring 90 FPS strict draw-call budgets.",
  },
  {
    division: "Brand & Marketing Division",
    technologies: "Figma · Adobe Suite · Vector SVG · Motion Graphics",
    primaryOutput: "Corporate identity, exhibition collateral, and marketing landing pages.",
    divergencePattern: "Exported static rasterized assets without systematic tokens.",
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
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              02
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Cross-Platform Fragmentation
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Multi-Runtime Technical Debt
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            Four engineering squads, four different tech stacks, zero shared source of truth.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            When teams scale independently across web applications, Unity 3D simulators, and VR head-mounted displays, UI patterns fragment rapidly. Each team solved the same layout, color, and interaction problems in complete isolation.
          </p>
        </div>

        {/* The 4 Divisions Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {DIVISIONS.map((item) => (
            <motion.div
              key={item.division}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={REVEAL_VARIANTS}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-between gap-4 rounded-sm border border-stone-300 bg-stone-50 p-6"
            >
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                  {item.division}
                </span>
                <h3 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                  {item.primaryOutput}
                </h3>
                <p className="font-mono text-[11px] text-stone-600">
                  Stack: {item.technologies}
                </p>
              </div>

              <div className="border-t border-stone-200 pt-3">
                <span className="font-mono text-[10px] font-bold uppercase text-stone-500">
                  Divergence Factor:
                </span>
                <p className="mt-1 font-[var(--cs-font-sans)] text-xs text-stone-800">
                  {item.divergencePattern}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4 Symptoms of Fragmentation */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              The Four Costly Symptoms of Systemic Fragmentation
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Audit findings across 12 internal repositories revealed massive duplicate engineering hours and customer-facing inconsistency.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {FRAGMENTATION_SYMPTOMS.map((symptom) => (
              <div
                key={symptom.index}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-stone-50 p-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    {symptom.index} / AUDIT FINDING
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {symptom.title}
                  </h4>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {symptom.symptom}
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-3">
                  <span className="font-mono text-[10px] font-semibold uppercase text-red-600">
                    Business Cost
                  </span>
                  <p className="font-[var(--cs-font-sans)] text-xs text-stone-900">
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

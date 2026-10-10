"use client";

import { motion } from "motion/react";

interface TokenTier {
  tier: string;
  name: string;
  role: string;
  example: string;
  scope: string;
}

interface CompilerTarget {
  platform: string;
  compiler: string;
  outputFormat: string;
  runtimeBenefit: string;
}

interface GovernanceStep {
  step: string;
  title: string;
  owner: string;
  description: string;
}

const TOKEN_TIERS: TokenTier[] = [
  {
    tier: "TIER 01",
    name: "Global Primitives",
    role: "Raw, context-agnostic design atoms. Defined once as mathematical scales.",
    example: "blue-900: #1E3A8A · space-4: 16px · radius-sm: 4px · font-display: Futura",
    scope: "Universal Foundation",
  },
  {
    tier: "TIER 02",
    name: "Semantic Intent Tokens",
    role: "Context-aware tokens mapping primitives to meaningful UI roles and themes.",
    example: "surface-base: var(--neutral-50) · action-primary: var(--blue-900) · status-danger: var(--red-500)",
    scope: "Dark/Light & Cockpit Themes",
  },
  {
    tier: "TIER 03",
    name: "Component Scoped Tokens",
    role: "Component-specific parameters binding semantic roles to concrete UI states.",
    example: "btn-primary-bg: var(--action-primary) · vr-hud-laser-width: 2.5mm · card-border: var(--border-subtle)",
    scope: "Component Implementations",
  },
];

const COMPILER_TARGETS: CompilerTarget[] = [
  {
    platform: "Web & Enterprise Dashboards",
    compiler: "Style Dictionary → PostCSS & Tailwind",
    outputFormat: "CSS Variables + tailwind.preset.js",
    runtimeBenefit: "Zero runtime overhead; instantaneous hot module reload in Next.js/React.",
  },
  {
    platform: "Unity 3D Simulation Engines",
    compiler: "Style Dictionary C# Exporter → ScriptableObjects",
    outputFormat: "FalahThemeConfig.cs + Unity USS",
    runtimeBenefit: "Inspectable in Unity Editor inspector; hot-updates 3D world space text without recompilation.",
  },
  {
    platform: "VR Head-Mounted Displays",
    compiler: "Spatial Contrast Validator → Shaders",
    outputFormat: "High-contrast stereoscopic UI materials",
    runtimeBenefit: "Guaranteed minimum 7:1 contrast on dark VR cockpits; zero text glare on Fresnel lenses.",
  },
  {
    platform: "Design Tooling (Figma)",
    compiler: "GitHub Action → Tokens Studio Sync",
    outputFormat: "Shared Figma Variable Collections",
    runtimeBenefit: "Designers design with the exact same token names used by software and Unity engineers.",
  },
];

const GOVERNANCE_STEPS: GovernanceStep[] = [
  {
    step: "01",
    title: "Request for Change (RFC)",
    owner: "Any Squad Engineer or Designer",
    description: "Submit a lightweight GitHub issue detailing the new component need, usage context, and fallback states.",
  },
  {
    step: "02",
    title: "System Review & Accessibility Audit",
    owner: "Design Systems Core Team",
    description: "Verify contrast ratios, keyboard navigation (web), laser pointer raycasts (VR), and token naming integrity.",
  },
  {
    step: "03",
    title: "Automated Multi-Target Build",
    owner: "GitHub Actions CI Pipeline",
    description: "Tokens JSON is compiled, validated against schema rules, and published under semantic versioning (SemVer).",
  },
  {
    step: "04",
    title: "Downstream Squad Adoption",
    owner: "Web & Simulation Repos",
    description: "Automated Dependabot / npm update alerts squads to non-breaking token updates with zero code migration.",
  },
];

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              03
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Multi-Platform Token Architecture
            </span>
          </div>
          <span className="hidden font-mono text-xs text-stone-500 sm:block">
            Token Compilation & Governance
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            A single mathematical source of truth compiling to both HTML DOM and Unity 3D World Space.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-stone-600 sm:text-lg">
            Instead of maintaining separate style guides that drifted apart immediately, we structured tokens into a three-tier hierarchy that compiles automatically into platform-native code for both web and game engines.
          </p>
        </div>

        {/* 3-Tier Token Hierarchy */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              The 3-Tier Design Token Hierarchy
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Decoupling visual attributes into distinct abstraction layers enabled multi-theme support and multi-platform compilation without cascading breaking changes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {TOKEN_TIERS.map((tier) => (
              <motion.div
                key={tier.tier}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={REVEAL_VARIANTS}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-between gap-4 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">
                      {tier.tier}
                    </span>
                    <span className="font-mono text-[10px] text-stone-400">
                      {tier.scope}
                    </span>
                  </div>
                  <h3 className="font-[var(--cs-font-sans)] text-base font-bold text-stone-900">
                    {tier.name}
                  </h3>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {tier.role}
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-stone-500">
                    Token Pattern:
                  </span>
                  <p className="mt-1 font-mono text-[11px] text-stone-800">
                    {tier.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Multi-Platform Compilation Pipeline */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-white p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Cross-Platform Compilation Matrix
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              How the single token pipeline feeds distinct engineering runtimes without manual translation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
            {COMPILER_TARGETS.map((target) => (
              <div
                key={target.platform}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-stone-50 p-5"
              >
                <div className="flex flex-col gap-1">
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {target.platform}
                  </h4>
                  <p className="font-mono text-[10px] text-[var(--cs-color-accent)]">
                    {target.compiler}
                  </p>
                  <p className="mt-2 font-mono text-[11px] font-semibold text-stone-700">
                    Output: {target.outputFormat}
                  </p>
                </div>

                <div className="border-t border-stone-200 pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-stone-500">
                    Runtime Advantage
                  </span>
                  <p className="font-[var(--cs-font-sans)] text-xs text-stone-800">
                    {target.runtimeBenefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance & Contribution Cycle */}
        <div className="flex flex-col gap-6 rounded-sm border border-stone-300 bg-stone-50 p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-900">
              Lightweight Governance & Contribution Lifecycle
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-stone-600">
              Empowering federated team contributions without risking brand drift or breaking changes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {GOVERNANCE_STEPS.map((gov) => (
              <div
                key={gov.step}
                className="flex flex-col justify-between gap-3 rounded-sm border border-stone-200 bg-white p-5"
              >
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs font-bold text-stone-400">
                    PHASE {gov.step}
                  </span>
                  <h4 className="font-[var(--cs-font-sans)] text-sm font-bold text-stone-900">
                    {gov.title}
                  </h4>
                  <p className="font-mono text-[10px] text-[var(--cs-color-accent)]">
                    Owner: {gov.owner}
                  </p>
                  <p className="mt-2 font-[var(--cs-font-sans)] text-xs leading-relaxed text-stone-600">
                    {gov.description}
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

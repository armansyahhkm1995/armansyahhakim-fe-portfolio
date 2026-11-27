"use client";

import { motion } from "motion/react";

interface TokenTier {
  tier: string;
  name: string;
  role: string;
  example: string;
  scope: string;
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

const REVEAL_VARIANTS = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

export default function SectionMechanism() {
  return (
    <section id="mechanism" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section divider & label */}
        <div className="flex flex-col items-start gap-2 border-b border-[var(--cs-color-border)] pb-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              03
            </span>
            <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              Multi-Platform Token Architecture
            </span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            A single mathematical source of truth compiling to both HTML DOM and Unity 3D World Space.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Instead of maintaining separate style guides that drifted apart immediately, we structured tokens into a three-tier hierarchy that compiles automatically into platform-native code for both web and game engines.
          </p>
        </div>

        {/* 3-Tier Token Hierarchy */}
        <div className="flex flex-col gap-6 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 sm:p-8">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
              The 3-Tier Design Token Hierarchy
            </span>
            <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)]">
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
                className="flex flex-col justify-between gap-4 rounded-xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg)] p-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--cs-color-accent)]">
                    {tier.tier}
                  </span>
                  <h3 className="font-[var(--cs-font-sans)] text-lg font-bold text-[var(--cs-color-text-primary)]">
                    {tier.name}
                  </h3>
                  <p className="font-[var(--cs-font-sans)] text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                    {tier.role}
                  </p>
                </div>

                <div className="flex flex-col gap-2 border-t border-[var(--cs-color-border)] pt-3">
                  <span className="font-mono text-[10px] font-bold uppercase text-[var(--cs-color-text-muted)]">
                    Example Signature:
                  </span>
                  <code className="rounded bg-[var(--cs-color-bg-secondary)] p-2 font-mono text-[11px] text-[var(--cs-color-text-primary)] break-all">
                    {tier.example}
                  </code>
                  <span className="font-mono text-[10px] text-[var(--cs-color-text-muted)]">
                    Scope: {tier.scope}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

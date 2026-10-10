"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "Experience & Systems Designer"],
  ["Client", "Corteva Agriscience™"],
  ["Location", "Karawang, West Java, Indonesia"],
  ["Timeline", "Field Study & Implementation (2019)"],
] as const;

const STATS = [
  { value: "13.7M ha", label: "National rice harvested area" },
  { value: "<1%", label: "Hybrid rice seed adoption rate" },
  {
    value: "$52M",
    label: "Estimated economic opportunity at 5% hybridization",
  },
];

const lines = ["What if the field", "became the experience?"];

export default function SectionHero() {
  return (
    <section id="overview" className="pt-12 md:pt-20 lg:pt-24">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Header & Title */}
          <header className="flex flex-col gap-4">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
              <a
                href="https://www.corteva.com/id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60 underline"
              >
                Corteva Agriscience™
              </a>{" "}
              · Karawang, Indonesia · Case Study
            </p>

            <h1 className="font-display text-[2.75rem] leading-[0.95] sm:text-[4.25rem] lg:text-[5.75rem] xl:text-[6.75rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1,
                      delay: 0.15 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </header>

          {/* Description + metadata */}
          <div className="flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start lg:gap-16">
            <p className="max-w-[760px] flex-1 font-[var(--cs-font-sans)] text-[clamp(1rem,1.5vw,1.375rem)] leading-[1.65] text-[var(--cs-color-text-secondary)]">
              Corteva came to Karawang to introduce high-yield hybrid rice variants and crop
              protection to local farmers. What began as a standard event-design brief evolved into a
              strategic experiential system: turning the active rice field into an evidence-based
              learning and verification environment.
            </p>

            <dl className="grid shrink-0 grid-cols-2 gap-x-8 gap-y-6 lg:flex lg:gap-8">
              {METADATA.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[10px] uppercase tracking-wide text-[var(--cs-color-text-muted)]">
                    {label}
                  </dt>
                  <dd className="font-sans text-xs font-medium text-[var(--cs-color-text-primary)]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Hero image */}
        <figure className="mt-8 md:mt-12 lg:mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[var(--cs-color-border)]">
            <Image
              src="/images/corteva/SectionHero - Corteva and farmer photo session.webp"
              alt="Corteva team and farmers during the agricultural field experience in Karawang"
              width={1440}
              height={810}
              priority
              sizes="(max-width: 768px) 100vw, 1440px"
              className="h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
            Live field verification: Corteva leadership, agronomists, and rice farmers in Karawang.
          </figcaption>
        </figure>

        {/* Executive Summary Card (At-a-Glance) */}
        <div className="mt-12 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 md:p-8">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-[var(--cs-color-accent)]">
              EXECUTIVE SUMMARY
            </span>
            <span className="font-mono text-xs text-[var(--cs-color-text-muted)]">/ AT A GLANCE</span>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                The Core Challenge
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Deep-rooted farmer skepticism toward hybrid seeds. Seminar slides failed to build trust
                where a single crop failure risks bankruptcy.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                The Strategic Shift
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Moved education from hotel ballrooms to side-by-side test plots. Enabled farmers to
                examine crops and calculate yields themselves.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                System Artifacts
              </span>
              <p className="font-sans text-xs leading-relaxed text-[var(--cs-color-text-secondary)]">
                Comparative route architecture, demonstration tents, educational signage, and on-site
                traditional threshing stations.
              </p>
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Verified Outcome
              </span>
              <p className="font-sans text-xs leading-relaxed font-medium text-[var(--cs-color-text-primary)]">
                Transformed promotional marketing into tactile proof, securing high-confidence
                adoption and dealer commitments.
              </p>
            </div>
          </div>
        </div>

        {/* Macro Statistics Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 border-y border-[var(--cs-color-border)] py-8 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <span className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-none text-[var(--cs-color-text-primary)]">
                {stat.value}
              </span>
              <span className="font-sans text-xs font-semibold text-[var(--cs-color-text-secondary)]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

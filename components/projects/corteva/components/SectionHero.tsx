"use client";

import Image from "next/image";
import { motion } from "motion/react";

const METADATA = [
  ["Role", "Experience / Event Designer"],
  ["Client", "Corteva Agriscience"],
  ["Location", "Karawang, Indonesia"],
  ["Year", "2019"],
] as const;

const lines = ["What if the field", "became the experience?"];

export default function SectionHero() {
  return (
    <section className="pt-16 md:pt-24 lg:pt-28">
      {/* Hero content */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-16">
          {/* Heading */}
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
              · Karawang / Indonesia · 2019
            </p>

            <h1 className="font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]">
              {lines.map((line, index) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 1.1,
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
              {" "}
              <a
                href="https://www.corteva.com/id"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity duration-200 hover:opacity-60 underline"
              >
                {" "}
                Corteva{" "}
              </a>{" "}
              came to Karawang to bring farmers closer to its rice seeds and
              crop protection solutions. What started as an event-design brief
              became an opportunity to turn the agricultural field itself into a
              medium for learning, comparison and engagement.{" "}
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
      </div>

      {/* Hero image */}
      <figure className="mx-auto mt-8 max-w-[1440px] px-6 md:mt-12 md:px-8 lg:mt-16 lg:px-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src="/images/corteva/SectionHero - Corteva and farmer photo session.webp"
            alt="Corteva team and farmer during the agricultural field experience in Karawang"
            width={1440}
            height={810}
            priority
            sizes="(max-width: 768px) 100vw, 1440px"
            className="h-full w-full object-cover"
          />
        </div>
      </figure>
    </section>
  );
}

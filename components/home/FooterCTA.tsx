"use client";

import { motion } from "motion/react";

export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="flex min-h-svh flex-col justify-between bg-primary px-6 py-16 text-primary-foreground md:px-12"
    >
      <div className="text-[0.7rem] tracking-[0.28em] uppercase opacity-60">
        Contact
      </div>

      <motion.div
        initial={{
          opacity: 0,
          y: 24,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          margin: "-20% 0px",
        }}
        transition={{
          duration: 1.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-5xl"
      >
        <h2 className="font-display text-[2.75rem] leading-none sm:text-7xl lg:text-[6rem]">
          The next transformation
          <br />
          starts with one conversation.
        </h2>

        <a
          href="mailto:hello@studio.design"
          className="group mt-14 inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          Let&apos;s Build Together
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </motion.div>

      <div className="flex flex-wrap items-center justify-between gap-6 text-sm opacity-70">
        <div className="flex gap-8">
          <a
            href="mailto:hello@studio.design"
            className="transition-opacity hover:opacity-100"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            LinkedIn
          </a>

          <a
            href="https://read.cv"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-100"
          >
            CV
          </a>
        </div>

        <span className="text-[0.7rem] tracking-[0.28em] uppercase">
          © 2026
        </span>
      </div>
    </footer>
  );
}

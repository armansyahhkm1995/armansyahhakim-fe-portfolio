"use client";

import { motion } from "motion/react";

const lines = ["The next transformation", "starts with one conversation."];

export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="flex min-h-svh flex-col justify-between bg-primary px-6 py-16 text-primary-foreground md:px-12"
    >
      <div className="text-[0.7rem] tracking-[0.28em] uppercase opacity-60">
        Contact
      </div>

      <div className="max-w-5xl">
        <h2 className="font-display text-[3rem] leading-[0.95] sm:text-[4.5rem] lg:text-[6rem] xl:text-[7rem]">
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
        </h2>

        <a
          href="https://wa.me/6285974785490?text=Hello%2C%20let%20us%20connect%21"
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 inline-flex items-center gap-3 rounded-full border border-primary-foreground/30 px-8 py-4 text-sm transition-colors hover:bg-primary-foreground hover:text-primary"
        >
          Let&apos;s Build Together
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 text-sm opacity-70">
        <div className="flex gap-8">
          <a
            href="mailto:armansyahhakim263@gmail.com"
            className="transition-opacity hover:opacity-100"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/armansyah-hakim-7422bab5/"
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

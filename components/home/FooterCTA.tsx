"use client";

import { motion } from "motion/react";

const lines = ["The next transformation", "starts with one conversation."];

const cvUrl =
  "https://drive.google.com/file/d/1ta5En5luBRhmiVAf0zeGCIJxGY9VGrSr/view?usp=sharing";
const email = "armansyahhakim263@gmail.com";
const linkedinUrl = "https://www.linkedin.com/in/armansyah-hakim-7422bab5/";
const whatsappUrl =
  "https://wa.me/6285974785490?text=Hello%20Arman%2C%20I%20would%20like%20to%20discuss%20a%20design%20opportunity.";

export function FooterCTA() {
  return (
    <footer
      id="contact"
      className="flex flex-col justify-between bg-primary px-6 py-16 text-primary-foreground md:px-12 md:py-24"
    >
      <div className="max-w-5xl">
        <div className="mb-6 font-mono text-[0.7rem] tracking-[0.28em] uppercase opacity-70">
          <span>Get in Touch</span>
        </div>

        <h2 className="font-display text-[2.75rem] leading-[1.02] sm:text-[4.5rem] lg:text-[5.75rem] xl:text-[6.5rem]">
          {lines.map((line, index) => (
            <span
              key={line}
              className="block overflow-hidden pb-[0.15em] -mb-[0.15em]"
            >
              <motion.span
                className="block"
                initial={{ y: "115%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
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
        </h2>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
          Available for Senior Product Designer, Systems Lead positions, and high-impact
          product strategy contracts. Open to international remote &amp; hybrid teams.
        </p>

        {/* Dual-Track Conversion Actions */}
        <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-primary-foreground px-8 py-4 text-sm font-medium text-primary transition-opacity hover:opacity-90"
            aria-label={`Send email to ${email}`}
          >
            <span>Send Email</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            >
              →
            </span>
          </a>

          <a
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-7 py-4 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            <span>View Resume / CV</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-4 text-sm font-medium text-primary-foreground transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10"
          >
            <span>LinkedIn</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-5 py-4 text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground hover:border-primary-foreground/40"
          >
            <span>Quick Chat (WhatsApp)</span>
            <span
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8 text-sm opacity-80 md:mt-24">
        <a
          href={`mailto:${email}`}
          className="transition-opacity hover:opacity-100 underline-offset-4 hover:underline"
        >
          {email}
        </a>

        <span className="font-mono text-[0.7rem] tracking-[0.28em] uppercase">
          © 2026 Armansyah Hakim
        </span>
      </div>
    </footer>
  );
}
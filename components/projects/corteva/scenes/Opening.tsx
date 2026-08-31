"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Frame } from "../primitives/Frame";

const HERO_IMAGE = "/projects/corteva/Farmer harvest rice in the field.webp";

const lines = [
  "How do you help",
  "farmers trust",
  "agricultural",
  "innovation?",
];

export function Opening() {
  return (
    <section
      id="opening"
      className="relative min-h-svh w-full overflow-hidden bg-corteva-background"
    >
      {/* Background image */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          opacity: {
            duration: 1.2,
          },
          scale: {
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
          },
        }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGE}
          alt="Farmer harvesting rice in a field"
          fill
          priority
          sizes="100vw"
          className="film object-cover"
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        transition={{
          duration: 1.2,
          delay: 0.15,
        }}
        className="absolute inset-0 bg-corteva-background"
      />

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3"
        style={{
          background:
            "linear-gradient(to top, var(--corteva-background), transparent)",
        }}
      />

      <div className="relative flex min-h-svh flex-col justify-between">
        {/* Top metadata */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.1,
          }}
        >
          <Frame className="pt-10">
            <div className="flex items-center justify-between">
              <span className="label text-corteva-ink">
                Transformation 01 · Corteva Agriscience
              </span>

              <span className="label hidden md:block">Index / 2026</span>
            </div>
          </Frame>
        </motion.div>

        {/* Main content */}
        <Frame>
          <div className="max-w-4xl">
            <div className="mb-8">
              <span className="label text-corteva-gold">
                Designing an Agricultural Learning Ecosystem
              </span>
            </div>

            <h1 className="display-xl max-w-[19ch] text-corteva-ink">
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

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lede mt-10 max-w-sm"
            >
              Traditional presentations explain.
              <br />
              Experiences convince.
            </motion.p>
          </div>
        </Frame>

        {/* Bottom navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
        >
          <Frame className="pb-10">
            <div className="flex items-end justify-between gap-6">
              <a
                href="#before"
                className="group inline-flex items-center gap-4"
              >
                <span className="label transition-colors group-hover:text-corteva-gold">
                  Scroll to begin
                </span>

                <span className="block h-10 w-px overflow-hidden bg-corteva-hairline">
                  <motion.span
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{
                      duration: 1.2,
                      delay: 1.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="block h-10 w-px origin-top bg-corteva-gold"
                  />
                </span>
              </a>

              <span className="label hidden text-right md:block">
                01 / 08
                <br />
                Opening
              </span>
            </div>
          </Frame>
        </motion.div>
      </div>
    </section>
  );
}

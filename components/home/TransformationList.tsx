"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

import { featuredProjects, type PortfolioProject } from "@/content/home";

function TransformationItem({ item }: { item: PortfolioProject }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
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
        margin: "-10% 0px",
      }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/projects/${item.slug}`}
        className="group relative block border-t border-border focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--home-accent)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* Project background ambient image (Desktop hover) */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <motion.img
            src={item.image}
            alt=""
            loading="lazy"
            width={1600}
            height={900}
            className="h-full w-full object-cover"
            animate={{
              scale: isHovered ? 1.03 : 1.1,
            }}
            transition={{
              duration: 1.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          {/* Dark Overlay — 80% for WCAG contrast */}
          <span className="absolute inset-0 bg-black/80" />
        </motion.div>

        {/* Project content */}
        <div
          className={`
            relative
            flex
            flex-col
            gap-6
            px-2
            py-10
            transition-colors
            duration-500
            md:flex-row
            md:items-start
            md:gap-12
            md:py-14
            ${isHovered ? "md:text-white" : "text-foreground"}
          `}
        >
          {/* Index & Domain Tag */}
          <div className="flex items-center gap-3 md:w-20 md:shrink-0 md:flex-col md:items-start md:gap-1">
            <span
              className={`
                font-mono
                text-xs
                tracking-[0.25em]
                transition-colors
                duration-500
                ${isHovered ? "md:text-white/70" : "text-muted-foreground"}
              `}
            >
              {item.index}
            </span>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Domain category tag */}
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={`
                  inline-block
                  rounded-full
                  border
                  px-2.5
                  py-0.5
                  font-mono
                  text-[0.68rem]
                  tracking-wider
                  uppercase
                  transition-colors
                  duration-500
                  ${
                    isHovered
                      ? "border-white/30 bg-white/10 text-white/90"
                      : "border-border bg-muted/30 text-muted-foreground"
                  }
                `}
              >
                {item.domainTag}
              </span>
            </div>

            <motion.h3
              className="origin-left font-display text-[2rem] leading-[1.05] sm:text-4xl lg:text-[3.25rem]"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.title}
            </motion.h3>

            <p
              className={`
                mt-4
                max-w-2xl
                text-sm
                leading-relaxed
                transition-colors
                duration-500
                sm:text-base
                ${isHovered ? "md:text-white/85" : "text-muted-foreground"}
              `}
            >
              {item.description}
            </p>

            {/* Outcome metric highlight */}
            {item.outcomeMetric && (
              <div
                className={`
                  mt-4
                  flex
                  items-baseline
                  gap-2
                  text-xs
                  font-medium
                  transition-colors
                  duration-500
                  ${isHovered ? "md:text-white/90" : "text-foreground/90"}
                `}
              >
                <span className="text-[var(--home-accent)]" aria-hidden="true">
                  ↳
                </span>
                <span>{item.outcomeMetric}</span>
              </div>
            )}
          </div>

          {/* Project metadata & CTA arrow */}
          <div className="flex shrink-0 items-center justify-between gap-4 border-t border-border/40 pt-4 md:flex-col md:items-end md:border-t-0 md:pt-0">
            <div className="text-left md:text-right">
              <span
                className={`
                  block
                  text-sm
                  font-medium
                  transition-colors
                  duration-500
                  ${isHovered ? "md:text-white" : "text-foreground"}
                `}
              >
                {item.partner}
              </span>

              <span
                className={`
                  mt-0.5
                  block
                  font-mono
                  text-[0.7rem]
                  tracking-[0.18em]
                  uppercase
                  transition-colors
                  duration-500
                  ${isHovered ? "md:text-white/70" : "text-muted-foreground"}
                `}
              >
                {item.discipline}
              </span>
            </div>

            <span
              className={`
                inline-flex
                size-9
                items-center
                justify-center
                rounded-full
                border
                text-sm
                transition-all
                duration-300
                group-hover:translate-x-1
                ${
                  isHovered
                    ? "border-white/40 bg-white/10 text-white"
                    : "border-border text-foreground"
                }
              `}
              aria-hidden="true"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function TransformationList() {
  return (
    <section id="transformations" className="px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-8 border-b border-border pb-8">
          <div>
            <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground uppercase">
              Transformation Library
            </span>
            <h2 className="font-display mt-3 max-w-2xl text-[2.5rem] leading-[1.05] sm:text-5xl lg:text-6xl">
              Selected Transformations
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Five complete case studies. Each project begins with an intractable business constraint
            and concludes with measurable behavioral and operational impact.
          </p>
        </div>

        <div className="border-b border-border">
          {featuredProjects.map((item) => (
            <TransformationItem key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

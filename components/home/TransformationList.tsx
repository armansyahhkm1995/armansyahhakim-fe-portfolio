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
        y: 28,
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
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={`/projects/${item.slug}`}
        className="group relative block border-t border-border"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            duration: 0.9,
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
              scale: isHovered ? 1.04 : 1.12,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
            }}
          />

          <span className="absolute inset-0 bg-background/72" />
        </motion.div>

        <div className="relative flex flex-col gap-6 px-1 py-12 md:flex-row md:items-baseline md:gap-12 md:py-16">
          <span className="w-16 shrink-0 text-[0.7rem] tracking-[0.28em] text-muted-foreground">
            {item.index}
          </span>

          <div className="flex-1">
            <motion.h3
              className="font-display origin-left text-[2rem] leading-[1.05] sm:text-5xl lg:text-[3.75rem]"
              animate={{
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.title}
            </motion.h3>

            <motion.p
              className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground"
              animate={{
                opacity: isHovered ? 1 : 0.35,
                y: isHovered ? 0 : 6,
              }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {item.description}
            </motion.p>
          </div>

          <div className="flex shrink-0 items-center gap-8 md:flex-col md:items-end md:gap-3">
            <span className="text-sm">{item.partner}</span>

            <span className="text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
              {item.discipline}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function TransformationList() {
  return (
    <section id="transformations" className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto w-full max-w-350">
        <div className="mb-20 flex flex-wrap items-end justify-between gap-8">
          <h2 className="font-display max-w-2xl text-[2.5rem] leading-[1.05] sm:text-6xl">
            Transformation Library
          </h2>

          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Five complete stories. Each one begins with a business question and
            ends with a measurable change in behaviour.
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

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

import { Reveal } from "./Motion";

/* ── StoryPhotography ──────────────────────────────────────────────────── */

interface StoryPhotographyProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  intensity?: number;
  priority?: boolean;
  children?: ReactNode;
}

export function StoryPhotography({
  src,
  alt,
  width,
  height,
  className,
  intensity = 90,
  priority = false,
  children,
}: StoryPhotographyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  const smoothY = useSpring(y, {
    stiffness: 90,
    damping: 26,
    mass: 0.5,
  });

  return (
    <div
      ref={ref}
      className={["relative overflow-hidden grain", className]
        .filter(Boolean)
        .join(" ")}
    >
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        style={
          reduced
            ? { scale: 1.14 }
            : {
                y: smoothY,
                scale: 1.14,
              }
        }
        className="h-full w-full object-cover"
      />

      {children}
    </div>
  );
}

/* ── DocumentaryImage ──────────────────────────────────────────────────── */

interface DocumentaryImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  className?: string;
  imageClassName?: string;
}

export function DocumentaryImage({
  src,
  alt,
  width,
  height,
  caption,
  className,
  imageClassName,
}: DocumentaryImageProps) {
  return (
    <Reveal className={className}>
      <figure>
        <div className="overflow-hidden grain">
          <motion.img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            initial={{
              scale: 1.08,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
              margin: "-10%",
            }}
            transition={{
              duration: 1.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={["h-full w-full object-cover", imageClassName]
              .filter(Boolean)
              .join(" ")}
          />
        </div>

        {caption ? (
          <figcaption className="mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}

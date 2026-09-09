"use client";

import { motion } from "motion/react";

interface ProjectMeta {
  label: string;
  value: string;
}

interface ColorToken {
  name: string;
  hex: string;
  className: string;
}

interface ComponentSize {
  name: string;
  className: string;
  textClassName: string;
}

const PROJECT_META: ProjectMeta[] = [
  {
    label: "Role",
    value: "Product Designer & Systems Researcher",
  },
  {
    label: "Company",
    value: "Falah Inovasi Teknologi",
  },
  {
    label: "Project",
    value: "Falah One Design System",
  },
  {
    label: "Started",
    value: "2026 (Ongoing)",
  },
  {
    label: "Status",
    value: "Production Iteration / Evolution",
  },
  {
    label: "Scope",
    value: "UI · Brand Language · Cross-team Adaptation",
  },
];

const COLOR_TOKENS: ColorToken[] = [
  {
    name: "Primary",
    hex: "#1E3A8A",
    className: "bg-blue-900",
  },
  {
    name: "Secondary",
    hex: "#3B82F6",
    className: "bg-blue-500",
  },
  {
    name: "Tertiary",
    hex: "#0EA5E9",
    className: "bg-sky-500",
  },
  {
    name: "Danger",
    hex: "#EF4444",
    className: "bg-red-500",
  },
  {
    name: "Success",
    hex: "#22C55E",
    className: "bg-green-500",
  },
  {
    name: "Warning",
    hex: "#EAB308",
    className: "bg-yellow-500",
  },
];

const COMPONENT_SIZES: ComponentSize[] = [
  {
    name: "Extra Small",
    className: "px-2.5 py-1",
    textClassName: "text-xs",
  },
  {
    name: "Small",
    className: "px-3 py-2",
    textClassName: "text-xs",
  },
  {
    name: "Default",
    className: "px-4 py-2.5",
    textClassName: "text-sm",
  },
  {
    name: "Large",
    className: "px-6 py-3",
    textClassName: "text-sm",
  },
  {
    name: "Extra Large",
    className: "px-7 py-3.5",
    textClassName: "text-base",
  },
];

const CALENDAR_DAYS = [
  ["1", "2", "3", "4", "5", "6", "7"],
  ["8", "9", "10", "11", "12", "13", "14"],
  ["15", "16", "17", "18", "19", "20", "21"],
  ["22", "23", "24", "25", "26", "27", "28"],
  ["29", "30", "1", "2", "3", "4", "5"],
];

const lines = ["Falah One: Organizing", "cross-team design", "language"];

export default function SectionHero() {
  return (
    <section
      className="
        pt-16 md:pt-24 lg:pt-28
      "
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-12
        "
      >
        {/* Hero introduction */}
        <header className="flex w-full flex-col gap-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--cs-color-accent)] md:text-xs">
            INTERNAL DESIGN SYSTEM · FALAH INOVASI TEKNOLOGI · Q1 2026
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

          <p
            className="
              max-w-[800px]
              font-[var(--cs-font-sans)]
              text-lg
              font-normal
              leading-8
              text-[var(--cs-color-text-secondary)]
              sm:text-xl
            "
          >
            Investigating how one unified design language could work
            systematically across Falah&apos;s software development, VR/AR
            simulations, and marketing content teams without flattening
            operational needs.
          </p>
        </header>

        {/* Project metadata */}
        <dl
          className="
            grid
            w-full
            grid-cols-1
            divide-y
            divide-[var(--cs-color-border)]
            border-y
            border-[var(--cs-color-border)]
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {PROJECT_META.map((item) => (
            <div
              key={item.label}
              className="
                flex
                min-h-20
                flex-col
                justify-center
                gap-1
                py-4
                sm:px-4
                lg:px-5
              "
            >
              <dt
                className="
                  font-[var(--cs-font-sans)]
                  text-[10px]
                  font-normal
                  uppercase
                  text-[var(--cs-color-text-muted)]
                "
              >
                {item.label}
              </dt>

              <dd
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-medium
                  text-[var(--cs-color-text-primary)]
                "
              >
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* System board */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-8
            overflow-hidden
            rounded-lg
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-8
            lg:p-12
          "
        >
          {/* Board heading */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p
              className="
                font-[var(--cs-font-sans)]
                text-xs
                font-bold
                text-[var(--cs-color-text-secondary)]
              "
            >
              FALAH ONE SYSTEM BOARD · SPECIFICATION AT A GLANCE
            </p>

            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-sm bg-blue-600"
              />

              <span
                className="
                  font-[var(--cs-font-sans)]
                  text-xs
                  font-semibold
                  text-[var(--cs-color-text-primary)]
                "
              >
                V1.0 STABLE
              </span>
            </div>
          </div>

          {/* Board content */}
          <div
            className="
              grid
              w-full
              grid-cols-1
              gap-10
              lg:grid-cols-2
            "
          >
            {/* Left column */}
            <div className="flex flex-col gap-8">
              {/* Typography */}
              <div className="flex flex-col gap-4">
                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-semibold
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  TYPOGRAPHY SCALES
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-4xl
                      font-normal
                      text-[var(--cs-color-text-primary)]
                      sm:text-5xl
                    "
                  >
                    Futura
                  </span>

                  <span
                    className="
                      font-[var(--cs-font-sans)]
                      text-4xl
                      font-normal
                      text-[var(--cs-color-text-primary)]
                      sm:text-5xl
                    "
                  >
                    Inter
                  </span>
                </div>
              </div>

              {/* Colors */}
              <div className="flex flex-col gap-4">
                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-semibold
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  COLOR PATHWAYS
                </p>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-3 xl:grid-cols-6">
                  {COLOR_TOKENS.map((color) => (
                    <div
                      key={color.name}
                      className={`
                        ${color.className}
                        flex
                        min-h-20
                        flex-col
                        justify-between
                        rounded-sm
                        p-3
                      `}
                    >
                      <span
                        className="
                          font-[var(--cs-font-sans)]
                          text-xs
                          font-semibold
                          text-white
                        "
                      >
                        {color.name}
                      </span>

                      <span
                        className="
                          font-[var(--cs-font-mono)]
                          text-[10px]
                          font-normal
                          text-white/50
                        "
                      >
                        {color.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex min-w-0 flex-col gap-6 overflow-hidden">
              {/* Component sizes */}
              <div className="flex flex-col gap-4">
                <p
                  className="
                    font-[var(--cs-font-sans)]
                    text-xs
                    font-semibold
                    text-[var(--cs-color-text-muted)]
                  "
                >
                  COMPONENTS
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  {COMPONENT_SIZES.map((size) => (
                    <div
                      key={size.name}
                      className={`
                        ${size.className}
                        flex
                        items-center
                        justify-center
                        rounded-md
                        bg-zinc-950
                        text-white
                      `}
                    >
                      <span
                        className={`
                          ${size.textClassName}
                          whitespace-nowrap
                          font-[var(--cs-font-sans)]
                          font-medium
                        `}
                      >
                        {size.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form states */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                {/* Default URL field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-4">
                    <label
                      className="
                        font-[var(--cs-font-sans)]
                        text-sm
                        font-semibold
                        text-zinc-950
                      "
                    >
                      URL <span aria-hidden="true">*</span>
                    </label>

                    <span
                      className="
                        text-right
                        font-[var(--cs-font-sans)]
                        text-xs
                        text-slate-400
                      "
                    >
                      Optional field
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-zinc-950
                      bg-slate-50
                      px-3
                      shadow-[0_0_0_4px_rgba(24,24,27,0.15)]
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        shrink-0
                        rounded-sm
                        border
                        border-zinc-950
                      "
                    />

                    <span
                      className="
                        min-w-0
                        flex-1
                        truncate
                        font-[var(--cs-font-sans)]
                        text-sm
                        text-zinc-950
                      "
                    >
                      mywebsite
                    </span>

                    <span
                      aria-hidden="true"
                      className="h-4 w-px shrink-0 bg-zinc-950"
                    />

                    <span
                      aria-hidden="true"
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        rounded-full
                        border-2
                        border-zinc-950
                      "
                    />
                  </div>

                  <p className="font-[var(--cs-font-sans)] text-xs text-slate-400">
                    Enter your website URL.
                  </p>
                </div>

                {/* Error URL field */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between gap-4">
                    <label
                      className="
                        font-[var(--cs-font-sans)]
                        text-sm
                        font-semibold
                        text-zinc-950
                      "
                    >
                      URL <span aria-hidden="true">*</span>
                    </label>

                    <span
                      className="
                        text-right
                        font-[var(--cs-font-sans)]
                        text-xs
                        text-slate-400
                      "
                    >
                      Optional field
                    </span>
                  </div>

                  <div
                    className="
                      flex
                      h-9
                      items-center
                      gap-2
                      rounded-lg
                      border
                      border-red-500
                      bg-slate-50
                      px-3
                    "
                  >
                    <span
                      aria-hidden="true"
                      className="
                        h-4
                        w-4
                        shrink-0
                        rounded-sm
                        border
                        border-red-500
                      "
                    />

                    <span
                      className="
                        min-w-0
                        flex-1
                        truncate
                        font-[var(--cs-font-sans)]
                        text-sm
                        text-red-500
                      "
                    >
                      http://invalid-url
                    </span>

                    <span
                      aria-hidden="true"
                      className="
                        h-3.5
                        w-3.5
                        shrink-0
                        rounded-full
                        border-2
                        border-red-500
                      "
                    />
                  </div>

                  <p
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      text-red-500
                    "
                  >
                    Please enter a valid URL
                  </p>
                </div>
              </div>

              {/* Calendar + verification */}
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-[256px_256px]">
                {/* Calendar */}
                <div
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-400
                    bg-slate-50
                    p-3
                    shadow-sm
                  "
                >
                  <div className="mb-4 flex items-center justify-between">
                    <button
                      type="button"
                      aria-label="Previous month"
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        text-slate-950
                      "
                    >
                      ‹
                    </button>

                    <span
                      className="
                        font-[var(--cs-font-sans)]
                        text-sm
                        font-medium
                        text-slate-950
                      "
                    >
                      July 2025
                    </span>

                    <button
                      type="button"
                      aria-label="Next month"
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-md
                        text-slate-950
                      "
                    >
                      ›
                    </button>
                  </div>

                  <div className="grid grid-cols-7">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                      <span
                        key={day}
                        className="
                            flex
                            h-5
                            items-center
                            justify-center
                            font-[var(--cs-font-sans)]
                            text-xs
                            text-slate-400
                          "
                      >
                        {day}
                      </span>
                    ))}

                    {CALENDAR_DAYS.flatMap((week, weekIndex) =>
                      week.map((day, dayIndex) => {
                        const isCurrentMonth = weekIndex < 4 || dayIndex < 2;
                        const isSelected = weekIndex === 3 && dayIndex === 5;

                        return (
                          <span
                            key={`${weekIndex}-${dayIndex}-${day}`}
                            className={`
                              flex
                              h-8
                              items-center
                              justify-center
                              rounded-md
                              font-[var(--cs-font-sans)]
                              text-sm
                              ${
                                isSelected
                                  ? "bg-slate-950 text-slate-50"
                                  : isCurrentMonth
                                    ? "text-slate-950"
                                    : "text-slate-950 opacity-50"
                              }
                            `}
                          >
                            {day}
                          </span>
                        );
                      }),
                    )}
                  </div>
                </div>

                {/* Verification */}
                <div
                  className="
                    flex
                    w-full
                    flex-col
                    gap-6
                    rounded-sm
                    border
                    border-slate-400
                    bg-slate-50
                    py-6
                    shadow-sm
                  "
                >
                  <div className="flex flex-col gap-2 px-6">
                    <p
                      className="
                        font-[var(--cs-font-sans)]
                        text-sm
                        font-medium
                        leading-5
                        text-slate-950
                      "
                    >
                      Enter verification code
                    </p>

                    <p
                      className="
                        font-[var(--cs-font-sans)]
                        text-sm
                        leading-5
                        text-slate-400
                      "
                    >
                      We sent a 6-digit code to your email.
                    </p>
                  </div>

                  <div className="flex flex-col gap-7 px-6">
                    <div className="flex flex-col gap-3">
                      <p
                        className="
                          font-[var(--cs-font-sans)]
                          text-sm
                          font-medium
                          leading-5
                          text-slate-950
                        "
                      >
                        Verification Code
                      </p>

                      <div className="grid grid-cols-6 gap-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <span
                            key={index}
                            aria-hidden="true"
                            className="
                              aspect-square
                              w-full
                              rounded-sm
                              border
                              border-slate-400
                              bg-slate-50
                            "
                          />
                        ))}
                      </div>

                      <p
                        className="
                          font-[var(--cs-font-sans)]
                          text-sm
                          leading-5
                          text-slate-400
                        "
                      >
                        Enter the 6-digit code sent to your email.
                      </p>
                    </div>

                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        className="
                          min-h-8
                          w-full
                          rounded-lg
                          bg-slate-950
                          px-3
                          py-1.5
                          font-[var(--cs-font-sans)]
                          text-sm
                          font-semibold
                          tracking-wide
                          text-slate-50
                        "
                      >
                        Verify
                      </button>

                      <div className="flex flex-wrap items-center justify-center gap-1">
                        <span
                          className="
                            font-[var(--cs-font-sans)]
                            text-sm
                            font-medium
                            leading-5
                            text-slate-400
                          "
                        >
                          Didn&apos;t receive the code?
                        </span>

                        <button
                          type="button"
                          className="
                            font-[var(--cs-font-sans)]
                            text-sm
                            font-medium
                            leading-5
                            text-slate-400
                            underline-offset-2
                            hover:underline
                          "
                        >
                          Resend
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const COMPARISON_ITEMS = [
  {
    label: "LEGACY SCHEMA",
    description:
      "PIE User → ACTS Directory App → Direct Category Selection → Single Agency Referral",
    featured: false,
  },
  {
    label: "REDESIGNED SCHEMATIC",
    description:
      "Ecosystem Need → Personalized Guided Discovery & Freeform Exploration → Unified Resource Evaluations → Confident Local Action & Ongoing Mentor Checks",
    featured: true,
  },
] as const;

function SectionHeader() {
  return (
    <header
      className="
        flex
        flex-col
        w-full
        border-t
        border-[var(--cs-color-border)]
        py-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      <div className="flex items-center gap-2">
        <span
          className="
            font-[var(--cs-font-mono)]
            text-xs
            font-semibold
            text-stone-600
          "
        >
          12
        </span>

        <h2
          id="comparison-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Then vs Now
        </h2>
      </div>

      <span
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-normal
          text-neutral-500
        "
      >
        SYSTEM ARCHITECTURE COMPARISON
      </span>
    </header>
  );
}

function ComparisonCard({
  label,
  description,
  featured,
}: (typeof COMPARISON_ITEMS)[number]) {
  return (
    <article
      className={`
        flex
        h-full
        flex-col
        gap-4
        border
        p-6
        sm:p-8
        ${
          featured
            ? "border-stone-600 bg-white"
            : "border-stone-300 bg-stone-50 opacity-60"
        }
      `}
    >
      <span
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-normal
          text-stone-600
        "
      >
        {label}
      </span>

      <p
        className="
          font-[var(--cs-font-sans)]
          text-sm
          font-semibold
          leading-5
          text-neutral-900
        "
      >
        {description}
      </p>
    </article>
  );
}

export default function SectionComparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="then vs now"
      className="p-8 md:pt-24 lg:pt-28"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          items-center
          gap-12
        "
      >
        <SectionHeader />

        <div
          className="
            w-full
            font-[var(--cs-font-serif)]
            text-4xl
            leading-tight
            text-neutral-900
            sm:text-5xl
            lg:text-6xl
            lg:leading-[1.1]
          "
        >
          From connection to navigation.
        </div>

        <p
          className="
            w-full
            font-[var(--cs-font-serif)]
            text-2xl
            leading-tight
            text-neutral-900
            sm:text-3xl
            sm:leading-9
          "
        >
          The redesign shifts ACTS from primarily connecting users with support
          providers toward helping users navigate the broader support ecosystem.
        </p>

        <div
          className="
            grid
            w-full
            gap-6
            lg:grid-cols-2
            lg:gap-10
          "
        >
          {COMPARISON_ITEMS.map((item) => (
            <ComparisonCard key={item.label} {...item} />
          ))}
        </div>

        <figure className="flex w-full flex-col gap-3 overflow-hidden">
          <div
            className="
              relative
              aspect-[1280/854]
              w-full
              overflow-hidden
              bg-stone-100
            "
          >
            <Image
              src="/images/amase/Inmate undergoing the Community Based Programme.webp"
              alt="Inmate undergoing the Community Based Programme"
              fill
              sizes="
                (max-width: 640px) 100vw,
                (max-width: 1280px) 100vw,
                1280px
              "
              className="object-cover"
            />
          </div>

          <figcaption
            className="
              font-[var(--cs-font-mono)]
              text-[10px]
              font-medium
              uppercase
              tracking-wide
              text-neutral-500
            "
          >
            FIG. 02 — Inmate undergoing the Community Based Programme
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

import Image from "next/image";

const DESIGN_IMPROVEMENTS = [
  {
    number: "1",
    title: "IMPROVEMENT 1: PERSONALISATION",
    description:
      "Generic rigid survey transformed into a lightweight, skip-friendly conversational questionnaire.",
    comparisons: [
      {
        label: "01 EXISTING PERSONALIZATION",
        image: "/images/amase/Existing personalization.webp",
      },
      {
        label: "02 REDESIGNED PERSONALIZATION",
        image: "/images/amase/Redesigned personalization.webp",
      },
    ],
  },
  {
    number: "2",
    title: "IMPROVEMENT 2: HOME DASHBOARD",
    description:
      "Standard app launch expanded into a clean starting portal with smart recommendations and urgent helplines.",
    comparisons: [
      {
        label: "01 EXISTING HOME DASHBOARD",
        image: "/images/amase/Existing home dashboard.webp",
      },
      {
        label: "02 REDESIGNED HOME DASHBOARD",
        image: "/images/amase/Redesigned home dashboard.webp",
      },
    ],
  },
  {
    number: "3",
    title: "IMPROVEMENT 3: EXPLORE PORTAL",
    description:
      "Category-heavy catalog refined into an open structural index with dynamic tags and immediate search support.",
    comparisons: [
      {
        label: "01 EXISTING EXPLORE PORTAL",
        image: "/images/amase/Existing explore portal.webp",
      },
      {
        label: "02 REDESIGNED EXPLORE PORTAL",
        image: "/images/amase/Redesigned explore portal.webp",
      },
    ],
  },
  {
    number: "4",
    title: "IMPROVEMENT 4: RESOURCE DETAIL",
    description:
      "Opaque directory data translated into action-focused modules mapping target criteria, expectations, and instant dial options.",
    comparisons: [
      {
        label: "01 EXISTING RESOURCE DETAIL",
        image: "/images/amase/Existing resource detail.webp",
      },
      {
        label: "02 REDESIGNED RESOURCE DETAIL",
        image: "/images/amase/Redesigned resource detail.webp",
      },
    ],
  },
] as const;

function SectionHeader() {
  return (
    <header
      className="
        flex
        flex-col
        gap-4
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
          11
        </span>

        <h2
          id="output-title"
          className="
            font-[var(--cs-font-sans)]
            text-sm
            font-semibold
            uppercase
            text-stone-600
          "
        >
          Design Improvement
        </h2>
      </div>

      <p
        className="
          font-[var(--cs-font-mono)]
          text-xs
          font-normal
          text-[var(--cs-color-text-muted)]
        "
      >
        FROM STRUCTURE TO INTERFACE
      </p>
    </header>
  );
}

function ComparisonImage({ label, image }: { label: string; image: string }) {
  return (
    <figure className="flex w-full flex-col gap-3">
      <div
        className="
          relative
          aspect-[3/5]
          w-full
          overflow-hidden
          rounded-2xl
          border
          border-gray-300
          bg-gray-100
        "
      >
        <Image
          src={image}
          alt={label}
          fill
          sizes="
            (min-width: 1280px) 228px,
            (min-width: 640px) 30vw,
            45vw
          "
          className="object-cover"
        />
      </div>

      <figcaption
        className="
          text-center
          font-[var(--cs-font-mono)]
          text-[10px]
          font-normal
          uppercase
          leading-4
          text-gray-900
        "
      >
        {label}
      </figcaption>
    </figure>
  );
}

function ImprovementCard({
  improvement,
  index,
}: {
  improvement: (typeof DESIGN_IMPROVEMENTS)[number];
  index: number;
}) {
  return (
    <article
      className="
        flex
        w-full
        flex-col
        gap-8
        border
        border-[var(--cs-color-border)]
        bg-stone-50
        p-5
        sm:p-6
        lg:p-8
      "
    >
      {/* INTRO */}
      <div className="flex flex-col gap-2">
        <h3
          className="
            font-[var(--cs-font-mono)]
            text-xs
            font-bold
            text-stone-600
          "
        >
          {improvement.title}
        </h3>

        <p
          className="
            max-w-2xl
            font-[var(--cs-font-sans)]
            text-sm
            font-normal
            leading-5
            text-[var(--cs-color-text-secondary)]
          "
        >
          {improvement.description}
        </p>
      </div>

      {/* BEFORE / AFTER */}
      <div
        className="
          grid
          w-full
          grid-cols-2
          gap-3
          sm:gap-4
          lg:max-w-2xl
        "
      >
        {improvement.comparisons.map((comparison) => (
          <ComparisonImage
            key={comparison.label}
            label={comparison.label}
            image={comparison.image}
          />
        ))}
      </div>
    </article>
  );
}

export default function SectionOutput() {
  return (
    <section
      id="output"
      aria-labelledby="design improvement"
      className="p-8 md:pt-24 lg:pt-28"
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
        <SectionHeader />

        <div
          className="
            grid
            w-full
            gap-4
            lg:grid-cols-2
          "
        >
          {DESIGN_IMPROVEMENTS.map((improvement, index) => (
            <ImprovementCard
              key={improvement.number}
              improvement={improvement}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

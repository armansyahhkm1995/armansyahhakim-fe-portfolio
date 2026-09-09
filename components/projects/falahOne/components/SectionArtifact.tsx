"use client";

import Image from "next/image";
import { motion } from "motion/react";

const REVEAL_VARIANTS = {
  hidden: { y: 32, opacity: 0 },
  visible: { y: 0, opacity: 1 },
} as const;

const REVEAL_TRANSITION = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1],
} as const;

const CHECKBOX_ITEMS = [
  { label: "Email notifications", checked: true },
  { label: "Push notifications", checked: true },
  { label: "SMS notifications", checked: false },
  { label: "In-app notifications", checked: false },
] as const;

const CHECKBOX_SIZES = [
  { label: "Small checkbox", size: "sm" },
  { label: "Default checkbox", size: "default" },
  { label: "Large checkbox", size: "lg" },
] as const;

type SwitchState = {
  label: string;
  enabled: boolean;
  disabled?: boolean;
  withLabel?: boolean;
};

const SWITCH_STATES = [
  {
    label: "Off",
    enabled: false,
  },
  {
    label: "On",
    enabled: true,
  },
  {
    label: "Airplane Mode",
    enabled: false,
    withLabel: true,
  },
  {
    label: "Airplane Mode",
    enabled: true,
    withLabel: true,
  },
  {
    label: "Disabled Off",
    enabled: false,
    disabled: true,
    withLabel: true,
  },
  {
    label: "Disabled On",
    enabled: true,
    disabled: true,
    withLabel: true,
  },
] satisfies readonly SwitchState[];

const DATA_TABLE_ROWS = [
  {
    status: "Success",
    email: "ken99@yahoo.com",
    amount: "$316.00",
    checked: false,
  },
  {
    status: "Success",
    email: "abe45@gmail.com",
    amount: "$242.00",
    checked: true,
  },
  {
    status: "Processing",
    email: "monserrat44@gmail.com",
    amount: "$837.00",
    checked: false,
  },
  {
    status: "Success",
    email: "silas22@gmail.com",
    amount: "$874.00",
    checked: true,
  },
  {
    status: "Failed",
    email: "carmella@hotmail.com",
    amount: "$721.00",
    checked: true,
  },
] as const;

const ALERT_ITEMS = [
  {
    type: "default",
    title: "Heads up!",
    description: "You can add components to your app using the cli.",
  },
  {
    type: "error",
    title: "Error",
    description: "Your session has expired. Please log in again.",
  },
  {
    type: "warning",
    title: "Warning",
    description: "Your account is nearing its storage limit.",
  },
  {
    type: "success",
    title: "Success",
    description: "Your changes have been saved successfully.",
  },
  {
    type: "info",
    title: "Information",
    description: "A new software update is available for download.",
  },
] as const;

const VR_CONTROLLERS = [
  {
    src: "/images/falahOne/Controller — Type 1 Left.webp",
    alt: "Falah One VR Controller Type 1 Left",
  },
  {
    src: "/images/falahOne/Controller — Type 1 Right.webp",
    alt: "Falah One VR Controller Type 1 Right",
  },
  {
    src: "/images/falahOne/Controller — Type 2 Left.webp",
    alt: "Falah One VR Controller Type 2 Left",
  },
  {
    src: "/images/falahOne/Controller — Type 2 Right.webp",
    alt: "Falah One VR Controller Type 2 Right",
  },
] as const;

function CheckIcon() {
  return (
    <span className="relative block size-2.5">
      <span className="absolute left-[3px] top-[1px] h-1.5 w-1.5 rotate-[-45deg] border-b-2 border-l-2 border-white" />
    </span>
  );
}

function Checkbox({
  checked = false,
  size = "default",
  error = false,
}: {
  checked?: boolean;
  size?: "sm" | "default" | "lg";
  error?: boolean;
}) {
  const sizeClass =
    size === "sm" ? "size-3.5" : size === "lg" ? "size-5" : "size-4";

  return (
    <span
      aria-hidden="true"
      className={[
        "flex shrink-0 items-center justify-center rounded-[3px]",
        sizeClass,
        checked
          ? "bg-neutral-950"
          : error
            ? "border border-red-500 bg-white"
            : "border border-neutral-300 bg-white",
      ].join(" ")}
    >
      {checked && <CheckIcon />}
    </span>
  );
}

function Switch({
  enabled = false,
  disabled = false,
}: {
  enabled?: boolean;
  disabled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={[
        "flex h-6 w-11 items-center rounded-full p-0.5",
        enabled ? "justify-end bg-neutral-950" : "justify-start bg-neutral-300",
        disabled && "opacity-50",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        className={[
          "size-5 rounded-full shadow-[0px_1px_2px_0px_rgba(0,0,0,0.10)]",
          enabled || !disabled ? "bg-white" : "bg-neutral-300",
        ].join(" ")}
      />
    </span>
  );
}

function ArtifactCard({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <article
      className={[
        "rounded-lg border border-[var(--cs-color-border)] p-6 md:p-8",
        className,
      ].join(" ")}
    >
      <h3 className="mb-5 text-base font-bold text-[var(--cs-color-text-primary)]">
        {title}
      </h3>

      {children}
    </article>
  );
}

function AlertIcon({
  type,
}: {
  type: "default" | "error" | "warning" | "success" | "info";
}) {
  const className = [
    "flex size-4 shrink-0 items-center justify-center",
    type === "error" && "text-red-600",
    type === "warning" && "text-amber-600",
    type === "success" && "text-emerald-600",
    type === "info" && "text-blue-600",
    type === "default" && "text-stone-950",
  ]
    .filter(Boolean)
    .join(" ");

  if (type === "error") {
    return (
      <span className={className} aria-hidden="true">
        <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-current text-[9px] font-bold leading-none">
          !
        </span>
      </span>
    );
  }

  if (type === "warning") {
    return (
      <span className={className} aria-hidden="true">
        <span className="relative flex size-3.5 items-center justify-center">
          <span className="absolute bottom-0 h-0 w-0 border-x-[7px] border-b-[12px] border-x-transparent border-b-current" />
          <span className="relative z-10 mt-[-1px] text-[8px] font-bold text-white">
            !
          </span>
        </span>
      </span>
    );
  }

  if (type === "success") {
    return (
      <span className={className} aria-hidden="true">
        <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-current">
          <span className="h-1.5 w-1.5 rotate-[-45deg] border-b-2 border-l-2 border-current" />
        </span>
      </span>
    );
  }

  if (type === "info") {
    return (
      <span className={className} aria-hidden="true">
        <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-current text-[9px] font-bold leading-none">
          i
        </span>
      </span>
    );
  }

  return (
    <span className={className} aria-hidden="true">
      <span className="flex size-3.5 items-center justify-center rounded-full border-2 border-current text-[9px] font-bold leading-none">
        i
      </span>
    </span>
  );
}

function AlertItem({
  type,
  title,
  description,
}: {
  type: "default" | "error" | "warning" | "success" | "info";
  title: string;
  description: string;
}) {
  const styles = {
    default: {
      container: "border-neutral-50 bg-neutral-100",
      title: "text-stone-950",
      description: "text-neutral-500",
    },
    error: {
      container: "border-red-200 bg-red-50",
      title: "text-red-700",
      description: "text-red-500",
    },
    warning: {
      container: "border-amber-200 bg-amber-50",
      title: "text-amber-700",
      description: "text-amber-600",
    },
    success: {
      container: "border-green-200 bg-green-50",
      title: "text-green-700",
      description: "text-green-600",
    },
    info: {
      container: "border-blue-200 bg-blue-50",
      title: "text-blue-700",
      description: "text-blue-500",
    },
  };

  const style = styles[type];

  return (
    <div
      role="status"
      className={[
        "flex min-h-20 items-center gap-3 rounded-lg border p-4",
        style.container,
      ].join(" ")}
    >
      <AlertIcon type={type} />

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <span
          className={["text-sm font-medium leading-5", style.title].join(" ")}
        >
          {title}
        </span>

        <span
          className={["text-sm font-normal leading-5", style.description].join(
            " ",
          )}
        >
          {description}
        </span>
      </div>
    </div>
  );
}

function DataTableCheckbox({ checked = false }: { checked?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "flex size-3 shrink-0 items-center justify-center rounded-[2px]",
        checked ? "bg-slate-950" : "border border-slate-400 bg-slate-50",
      ].join(" ")}
    >
      {checked && (
        <span className="h-1.5 w-1.5 rotate-[-45deg] border-b border-l border-slate-50" />
      )}
    </span>
  );
}

function MoreIcon() {
  return (
    <span
      aria-hidden="true"
      className="flex size-8 items-center justify-center"
    >
      <span className="relative block size-4">
        <span className="absolute left-1/2 top-1/2 size-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-950" />
        <span className="absolute left-1/2 top-[3px] size-1 -translate-x-1/2 rounded-full bg-slate-950" />
        <span className="absolute bottom-[3px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-slate-950" />
      </span>
    </span>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <span
      aria-hidden="true"
      className={[
        "block size-2.5 rotate-45 border-b border-r",
        direction === "left" ? "border-slate-400" : "border-slate-950",
        direction === "left" ? "rotate-[135deg]" : "rotate-[-45deg]",
      ].join(" ")}
    />
  );
}

function DataTable() {
  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[680px]">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 py-4">
          <div className="flex h-8 w-96 max-w-full items-center gap-2 rounded-lg border border-slate-400 bg-slate-50 px-3 shadow-sm">
            <span
              aria-hidden="true"
              className="size-3 shrink-0 rounded-sm border border-slate-400"
            />

            <span className="truncate text-sm leading-5 text-slate-400">
              Search email
            </span>
          </div>

          <button
            type="button"
            className="flex h-8 shrink-0 items-center gap-2 rounded-lg border border-slate-400 bg-slate-50 px-3 text-sm font-semibold leading-5 tracking-wide text-slate-950"
          >
            Status
            <ChevronIcon direction="right" />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
          {/* Header */}
          <div className="grid grid-cols-[32px_112px_minmax(220px,1fr)_96px_48px] border-b border-slate-200">
            <div className="flex h-10 items-center pl-2">
              <DataTableCheckbox />
            </div>

            <div className="flex h-10 items-center px-2">
              <span className="text-sm font-medium leading-5 text-slate-950">
                Status
              </span>
            </div>

            <div className="flex h-10 items-center gap-2 px-3">
              <span className="text-sm font-medium leading-5 text-slate-950">
                Email
              </span>

              <span className="text-[10px] text-slate-950">↕</span>
            </div>

            <div className="flex h-10 items-center justify-end px-2">
              <span className="text-sm font-medium leading-5 text-slate-950">
                Amount
              </span>
            </div>

            <div />
          </div>

          {/* Rows */}
          {DATA_TABLE_ROWS.map((row, index) => (
            <div
              key={row.email}
              className={[
                "grid grid-cols-[32px_112px_minmax(220px,1fr)_96px_48px]",
                index !== DATA_TABLE_ROWS.length - 1 &&
                  "border-b border-slate-200",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="flex h-12 items-center pl-2">
                <DataTableCheckbox checked={row.checked} />
              </div>

              <div className="flex h-12 items-center px-2">
                <span className="truncate text-sm font-medium leading-5 text-slate-950">
                  {row.status}
                </span>
              </div>

              <div className="flex h-12 min-w-0 items-center px-2">
                <span className="truncate text-sm font-medium leading-5 text-slate-950">
                  {row.email}
                </span>
              </div>

              <div className="flex h-12 items-center justify-end px-2">
                <span className="text-sm font-medium leading-5 text-slate-950">
                  {row.amount}
                </span>
              </div>

              <div className="flex h-12 items-center justify-center px-2">
                <MoreIcon />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex min-h-12 items-center justify-between gap-4 py-2">
          <span className="truncate text-sm leading-5 text-slate-950">
            0 of 68 row(s) selected.
          </span>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="First page"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-400 bg-slate-200"
            >
              <ChevronIcon direction="left" />
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              aria-label="Previous page"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-400 bg-slate-200"
            >
              <ChevronIcon direction="left" />
            </button>

            <button
              type="button"
              aria-label="Next page"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-400 bg-slate-950"
            >
              <ChevronIcon direction="right" />
            </button>

            <button
              type="button"
              aria-label="Last page"
              className="flex size-8 items-center justify-center rounded-lg border border-slate-400 bg-slate-50"
            >
              <ChevronIcon direction="right" />
              <ChevronIcon direction="right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SectionArtifact() {
  return (
    <section
      id="artifact"
      className="w-full bg-[var(--cs-color-bg)] px-[var(--cs-content-padding)] py-[var(--cs-section-padding)]"
    >
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-4 border-t border-[var(--cs-color-border)] py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[var(--cs-color-text-secondary)]">
              11
            </span>

            <span className="text-xs font-semibold uppercase text-[var(--cs-color-text-secondary)]">
              Design System Artifacts
            </span>
          </div>

          <span className="text-xs font-normal text-[var(--cs-color-text-muted)]">
            RELIABLE SYSTEM COMPONENTS IN COHESION
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl font-normal leading-tight text-[var(--cs-color-text-primary)] md:text-5xl md:leading-[1.01]">
            The system in practice
          </h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={REVEAL_VARIANTS}
            transition={{
              ...REVEAL_TRANSITION,
              delay: 0.2,
            }}
            className="flex flex-col gap-4"
          >
            {/* Buttons */}
            <ArtifactCard title="Buttons & Control Primitives">
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="min-h-9 rounded-lg bg-slate-950 px-4 py-2 text-sm font-semibold tracking-wide text-slate-50"
                >
                  Falah Action
                </button>

                <button
                  type="button"
                  className="min-h-9 rounded-lg border border-slate-950 bg-white px-4 py-2 text-sm font-semibold tracking-wide text-slate-950 shadow-sm"
                >
                  Cancel
                </button>
              </div>
            </ArtifactCard>

            {/* Inputs */}
            <ArtifactCard title="Inputs & Field Handling">
              <div className="flex w-full max-w-96 flex-col gap-1">
                <label
                  htmlFor="normalized-email"
                  className="flex items-center gap-1 text-sm text-slate-950"
                >
                  Normalized Email Field
                  <span className="text-red-500">*</span>
                </label>

                <input
                  id="normalized-email"
                  type="email"
                  value="falah@email.com"
                  readOnly
                  className="h-8 rounded-lg border border-slate-400 bg-slate-50 px-3 py-1 text-sm text-slate-950 shadow-sm outline-none"
                />
              </div>
            </ArtifactCard>

            {/* Data Table */}
            <ArtifactCard title="Data Table">
              <DataTable />
            </ArtifactCard>

            {/* Alert & Notification */}
            <ArtifactCard title="Alert & Notification System">
              <div className="flex flex-col gap-4 rounded-[5px] bg-white p-4 md:p-8">
                {ALERT_ITEMS.map((item) => (
                  <AlertItem
                    key={item.title}
                    type={item.type}
                    title={item.title}
                    description={item.description}
                  />
                ))}

                {/* Update Available */}
                <div className="flex min-h-20 items-center gap-3 rounded-lg border border-neutral-50 bg-neutral-100 p-4">
                  <AlertIcon type="default" />

                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-sm font-medium leading-5 text-stone-950">
                      Update Available
                    </span>

                    <span className="text-sm font-normal leading-5 text-neutral-500">
                      A new version (v2.0) is available.
                    </span>
                  </div>

                  <button
                    type="button"
                    className="shrink-0 text-sm font-medium leading-5 text-stone-950"
                  >
                    Update Now
                  </button>
                </div>

                {/* Notification */}
                <div className="flex min-h-20 items-center gap-3 rounded-lg border border-neutral-50 bg-neutral-100 p-4">
                  <AlertIcon type="default" />

                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-sm font-medium leading-5 text-stone-950">
                      Notification
                    </span>

                    <span className="text-sm font-normal leading-5 text-neutral-500">
                      You have 3 unread messages in your inbox.
                    </span>
                  </div>

                  <button
                    type="button"
                    aria-label="Dismiss notification"
                    className="flex size-6 shrink-0 items-center justify-center rounded-sm text-neutral-500"
                  >
                    ×
                  </button>
                </div>

                {/* Compact notification */}
                <div className="flex min-h-12 items-center gap-3 rounded-lg border border-neutral-50 bg-neutral-100 p-4">
                  <AlertIcon type="default" />

                  <span className="flex-1 text-sm font-medium leading-5 text-stone-950">
                    Everything is up to date.
                  </span>
                </div>

                {/* Compact muted notification */}
                <div className="flex min-h-12 items-center gap-3 rounded-lg border border-neutral-50 bg-neutral-100 p-4">
                  <AlertIcon type="default" />

                  <span className="flex-1 text-sm font-normal leading-5 text-neutral-500">
                    Your trial ends in 3 days. Upgrade to continue using all
                    features.
                  </span>
                </div>

                {/* Note */}
                <div className="flex min-h-20 items-center gap-3 rounded-lg border border-neutral-50 bg-neutral-100 p-4">
                  <AlertIcon type="default" />

                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-sm font-medium leading-5 text-neutral-950">
                      Note
                    </span>

                    <span className="text-sm font-normal leading-5 text-neutral-500">
                      This action cannot be undone.
                    </span>
                  </div>
                </div>
              </div>
            </ArtifactCard>

            {/* Textarea */}
            <ArtifactCard title="Textarea">
              <div className="flex flex-col gap-6 rounded-[5px] bg-white p-4 md:p-8">
                {/* Filled */}
                <div className="rounded-md border border-neutral-300 bg-white p-3">
                  <p className="text-sm leading-5 text-neutral-950">
                    This is some example text that has been typed into the
                    textarea field.
                  </p>
                </div>

                {/* Helper */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message-helper"
                    className="text-sm font-medium text-neutral-950"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message-helper"
                    placeholder="Type your message here."
                    className="min-h-20 resize-none rounded-md border border-neutral-300 bg-white p-3 text-sm outline-none placeholder:text-neutral-300"
                  />

                  <span className="text-xs leading-5 text-neutral-500">
                    Your message will be sent to the support team.
                  </span>
                </div>

                {/* Error */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="message-error"
                    className="text-sm font-medium text-neutral-950"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message-error"
                    placeholder="Type your message here."
                    aria-invalid="true"
                    className="min-h-20 resize-none rounded-md border border-red-500 bg-white p-3 text-sm outline-none placeholder:text-neutral-300"
                  />

                  <span className="text-xs text-red-500">
                    This field is required.
                  </span>
                </div>

                {/* Character Count */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="bio"
                    className="text-sm font-medium text-neutral-950"
                  >
                    Bio
                  </label>

                  <textarea
                    id="bio"
                    value="This is some example text that has been typed into the textarea field."
                    readOnly
                    className="min-h-20 resize-none rounded-md border border-neutral-300 bg-white p-3 text-sm leading-5 text-neutral-950 outline-none"
                  />

                  <span className="text-right text-xs text-neutral-300">
                    42/500
                  </span>
                </div>
              </div>
            </ArtifactCard>

            {/* VR Controller */}
            <ArtifactCard title="VR Controller">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {VR_CONTROLLERS.map((controller) => (
                  <figure
                    key={controller.src}
                    className="flex min-h-56 items-center justify-center overflow-hidden rounded-lg bg-stone-100 p-6"
                  >
                    <Image
                      src={controller.src}
                      alt={controller.alt}
                      width={500}
                      height={500}
                      className="h-auto max-h-64 w-full object-contain"
                    />
                  </figure>
                ))}
              </div>
            </ArtifactCard>

            {/* Switch */}
            <ArtifactCard title="Switch">
              <div className="flex flex-col gap-5 rounded-[5px] bg-white p-4 md:p-8">
                {SWITCH_STATES.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="flex items-center gap-2"
                  >
                    <Switch enabled={item.enabled} disabled={item.disabled} />

                    {item.withLabel && (
                      <span
                        className={[
                          "text-sm font-medium",
                          item.disabled
                            ? "text-neutral-500"
                            : "text-neutral-950",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}

                <div className="flex items-start gap-3">
                  <Switch enabled />

                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium text-neutral-950">
                      Marketing emails
                    </span>

                    <span className="text-xs leading-5 text-neutral-500">
                      Receive emails about new products, features, and more.
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-md border border-neutral-300 p-3">
                  <span className="text-sm font-medium text-neutral-950">
                    Enable notifications
                  </span>

                  <Switch enabled />
                </div>
              </div>
            </ArtifactCard>

            {/* Checkbox */}
            <ArtifactCard title="Checkbox">
              <div className="flex flex-col gap-6 rounded-[5px] bg-white p-4 md:p-8">
                {/* Checkbox Group */}
                <div className="rounded-lg border border-neutral-300 bg-white p-6">
                  <div className="mb-4 text-xs font-semibold uppercase text-neutral-400">
                    Checkbox-Group
                  </div>

                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="text-sm font-medium text-neutral-950">
                        Notifications
                      </p>

                      <p className="text-sm text-neutral-500">
                        Select the notifications you want to receive.
                      </p>
                    </div>

                    <div className="flex flex-col gap-2.5">
                      {CHECKBOX_ITEMS.map((item) => (
                        <label
                          key={item.label}
                          className="flex items-center gap-2 text-sm text-neutral-950"
                        >
                          <Checkbox checked={item.checked} />
                          <span>{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Error */}
                <div className="rounded-lg border border-neutral-300 bg-white p-6">
                  <div className="mb-4 text-xs font-semibold uppercase text-neutral-400">
                    Checkbox-Error
                  </div>

                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2 text-sm text-neutral-950">
                      <Checkbox error />
                      <span>I agree to the terms</span>
                    </label>

                    <span className="text-xs text-red-500">
                      You must agree to continue.
                    </span>
                  </div>
                </div>

                {/* Sizes */}
                <div className="rounded-lg border border-neutral-300 bg-white p-6">
                  <div className="mb-4 text-xs font-semibold uppercase text-neutral-400">
                    Checkbox-Sizes
                  </div>

                  <div className="flex flex-col gap-4">
                    {CHECKBOX_SIZES.map((item) => (
                      <div
                        key={item.size}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Checkbox
                            checked
                            size={
                              item.size === "sm"
                                ? "sm"
                                : item.size === "lg"
                                  ? "lg"
                                  : "default"
                            }
                          />

                          <span className="text-sm text-neutral-950">
                            {item.label}
                          </span>
                        </div>

                        <span className="text-[10px] text-slate-400">
                          {item.size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card */}
                <div className="rounded-lg border border-neutral-300 bg-white p-6">
                  <div className="mb-4 text-xs font-semibold uppercase text-neutral-400">
                    Checkbox-Card
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-lg border-2 border-neutral-950 bg-neutral-50 p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-neutral-950">
                          Startup
                        </span>

                        <Checkbox checked size="sm" />
                      </div>

                      <span className="text-xs text-neutral-500">$29/mo</span>
                    </div>

                    <div className="rounded-lg border border-neutral-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-neutral-950">
                          Enterprise
                        </span>

                        <Checkbox size="sm" />
                      </div>

                      <span className="text-xs text-neutral-500">$99/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            </ArtifactCard>
          </motion.div>
        </div>

        {/* Closing Statement */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={REVEAL_VARIANTS}
          transition={{
            ...REVEAL_TRANSITION,
            delay: 0.3,
          }}
          className="text-2xl font-normal leading-10 text-[var(--cs-color-text-secondary)] md:text-3xl"
        >
          AND MANY OTHER MORE
        </motion.p>
      </div>
    </section>
  );
}

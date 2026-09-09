interface ControlStep {
  number: string;
  label: string;
  description: string;
}

const CONTROL_STEPS: ControlStep[] = [
  {
    number: "01",
    label: "OPERATOR INTENT",
    description: "Toggles AC relay OFF",
  },
  {
    number: "02",
    label: "TRANSIT STATUS",
    description: "Button shows 'Sending...'",
  },
  {
    number: "03",
    label: "HARDWARE ACTION",
    description: "Gateway executes relay trip",
  },
  {
    number: "04",
    label: "RETURN CALLBACK",
    description: "Meter registers Current = 0",
  },
  {
    number: "05",
    label: "CONFIRMED UI",
    description: "Button settles to stable OFF",
  },
];

export default function SectionDeviceControl() {
  return (
    <section
      id="device control"
      aria-labelledby="device-control-title"
      className="p-8 md:pt-24 lg:pt-28"
    >
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[var(--cs-content-max-width)]
          flex-col
          gap-5
        "
      >
        {/* Section divider */}
        <div
          aria-hidden="true"
          className="h-px w-full bg-[var(--cs-color-border)]"
        />

        {/* Section header */}
        <div
          className="
            flex
            w-full
            items-center
            justify-between
            gap-6
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                text-[var(--cs-color-text-secondary)]
              "
            >
              07
            </span>

            <span
              className="
                font-[var(--cs-font-sans)]
                text-sm
                font-semibold
                uppercase
                text-[var(--cs-color-text-secondary)]
              "
            >
              Device Control
            </span>
          </div>

          <span
            className="
              hidden
              font-[var(--cs-font-sans)]
              text-xs
              font-normal
              text-[var(--cs-color-text-muted)]
              sm:block
            "
          >
            ASYNCHRONOUS TRANSACTION FLOW
          </span>
        </div>

        {/* Intro */}
        <div
          className="
            flex
            w-full
            flex-col
            items-start
            gap-6
            lg:flex-row
            lg:gap-20
          "
        >
          <h2
            id="device-control-title"
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-4xl
              font-normal
              leading-[1.1]
              tracking-tight
              text-[var(--cs-color-text-primary)]
              sm:text-5xl
              sm:leading-[1.01]
              lg:max-w-[520px]
            "
          >
            Monitoring tells users what is happening. Control lets them do
            something.
          </h2>

          <p
            className="
              w-full
              font-[var(--cs-font-sans)]
              text-base
              font-normal
              leading-6
              text-[var(--cs-color-text-secondary)]
              lg:flex-1
            "
          >
            Control actions in building networks are not instantaneous. They
            travel over hardware loops and require edge confirmation. The
            interface was intentionally designed to make this latency
            transparent, preventing redundant clicks.
          </p>
        </div>

        {/* Asynchronous transaction flow */}
        <div
          className="
            flex
            w-full
            flex-col
            gap-6
            rounded-sm
            border
            border-[var(--cs-color-border)]
            bg-stone-50
            p-5
            sm:p-8
          "
        >
          <div
            className="
              font-[var(--cs-font-sans)]
              text-xs
              font-bold
              text-[var(--cs-color-text-secondary)]
            "
          >
            CRITICAL DESIGN PRINCIPLE — REQUESTED STATE ≠ ACTUAL STATE
          </div>

          {/* Desktop / tablet flow */}
          <div
            className="
              hidden
              w-full
              items-center
              justify-between
              gap-4
              lg:flex
            "
          >
            {CONTROL_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="flex min-w-0 flex-1 items-center gap-4"
              >
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-bold
                      text-black
                    "
                  >
                    {step.number} / {step.label}
                  </div>

                  <div
                    className="
                      font-[var(--cs-font-sans)]
                      text-xs
                      font-normal
                      leading-4
                      text-[var(--cs-color-text-secondary)]
                    "
                  >
                    {step.description}
                  </div>
                </div>

                {index < CONTROL_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      text-sm
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Mobile / small tablet flow */}
          <div className="flex w-full flex-col lg:hidden">
            {CONTROL_STEPS.map((step, index) => (
              <div key={step.number} className="flex w-full flex-col">
                <div className="flex w-full items-start gap-4 py-3">
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <div
                      className="
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-bold
                        text-black
                      "
                    >
                      {step.number} / {step.label}
                    </div>

                    <div
                      className="
                        font-[var(--cs-font-sans)]
                        text-xs
                        font-normal
                        leading-4
                        text-[var(--cs-color-text-secondary)]
                      "
                    >
                      {step.description}
                    </div>
                  </div>
                </div>

                {index < CONTROL_STEPS.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="
                      flex
                      h-5
                      items-center
                      pl-1
                      text-sm
                      text-[var(--cs-color-text-muted)]
                    "
                  >
                    ↓
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

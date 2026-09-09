export default function SectionFinalDesign() {
  return (
    <section
      id="final design"
      aria-labelledby="final-design-title"
      className="
        w-full
        bg-[var(--cs-color-bg)]
        px-[var(--cs-content-padding)]
        pt-[var(--cs-section-padding)]
        pb-6
      "
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

        {/* Section meta */}
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
              12
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
              Final Experience
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
            INTERFACE SPECIFICATION
          </span>
        </div>

        {/* Introduction */}
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
            id="final-experience-title"
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
            The resulting system interface.
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
            These high-fidelity wireframe representations demonstrate the
            structural grid of the final system interface. Clean alignment, high
            numerical density, and low-contrast details minimize operator
            stress.
          </p>
        </div>

        {/* Final interface */}
        <figure
          className="
            w-full
            overflow-hidden
            rounded-sm
          "
        >
          <video
            src="/videos/ems/SD-DUX-Flow_Application-Energy_management_System-1-FIT245-20260830.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-auto w-full rounded-sm"
          />
        </figure>
      </div>
    </section>
  );
}

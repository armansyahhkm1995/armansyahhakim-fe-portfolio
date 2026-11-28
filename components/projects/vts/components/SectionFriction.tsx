"use client";

interface WorkflowStage {
  step: string;
  action: string;
  detail: string;
}

const LEGACY_WORKFLOW: WorkflowStage[] = [
  { step: "01", action: "Import 3D Mesh", detail: "3D modeler exports raw mesh (FBX/OBJ) from CAD into the complex Unity project hierarchy." },
  { step: "02", action: "Write Bespoke C#", detail: "Software engineer writes custom MonoBehaviour scripts to define part clicks, raycasts, and movement pivots." },
  { step: "03", action: "Collider & Physics Setup", detail: "Manually configure MeshColliders, Rigidbody constraints, and layer collision matrices in Inspector." },
  { step: "04", action: "Re-bake & Compile Build", detail: "Full executable build compiled to test a single procedure step. Any revision takes days." },
];

const VTS_WORKFLOW: WorkflowStage[] = [
  { step: "01", action: "Direct 3D Asset Ingestion", detail: "Drag 3D models directly into VTS Project Hub. Hierarchy trees are extracted automatically." },
  { step: "02", action: "Select Part in Outliner", detail: "Click any component (e.g., 'Cylinder_Housing_02') directly in the 3D viewport or tree outliner." },
  { step: "03", action: "Apply Script Templates", detail: "Enable ready-to-use interaction templates: ROTATE around pivot, DRAG on axis, or EMIT highlight outline via simple toggles." },
  { step: "04", action: "1-Click Runtime Sync", detail: "Instant synchronization to the 3D interactive viewer. Anyone can test and experience the interaction in real time." },
];

export default function SectionFriction() {
  return (
    <section id="friction" className="p-4 sm:p-8 md:pt-24 lg:pt-28">
      <div className="mx-auto flex w-full max-w-[var(--cs-content-max-width)] flex-col gap-12">
        {/* Section label */}
        <div className="flex w-full items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold text-[var(--cs-color-text-secondary)]">
              02
            </span>
            <span className="font-[var(--cs-font-sans)] text-sm font-semibold uppercase tracking-wider text-[var(--cs-color-text-secondary)]">
              The Engineering Bottleneck
            </span>
          </div>
        </div>

        {/* Section divider */}
        <div aria-hidden="true" className="h-px w-full bg-[var(--cs-color-border)]" />

        {/* Section Headline */}
        <div className="flex flex-col gap-4">
          <h2 className="font-[var(--cs-font-sans)] text-3xl font-normal leading-tight text-[var(--cs-color-text-primary)] sm:text-4xl lg:text-5xl">
            The bottleneck was never importing a 3D model. It was configuring how anyone can interact with it.
          </h2>
          <p className="max-w-[840px] font-[var(--cs-font-sans)] text-base font-normal leading-relaxed text-[var(--cs-color-text-secondary)] sm:text-lg">
            Traditional 3D authoring trapped domain practitioners in an engineering dependency loop. To empower non-technical users to build interactive 3D simulations themselves, we replaced manual C# scripting with visual script templates.
          </p>
        </div>

        {/* Side-by-Side Workflow Evolution */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Legacy Workflow */}
          <div className="flex flex-col gap-4 rounded-2xl border border-[var(--cs-color-border)] bg-[var(--cs-color-bg-secondary)] p-6 opacity-85">
            <div className="flex items-center justify-between border-b border-[var(--cs-color-border)] pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-muted)]">
                Legacy Unity Pipeline (6+ Weeks)
              </span>
              <span className="font-mono text-[10px] text-red-500 uppercase font-semibold">
                High Engineering Cost
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {LEGACY_WORKFLOW.map((item) => (
                <div key={item.step} className="flex items-start gap-3 rounded-xl bg-[var(--cs-color-bg)] p-3.5 border border-[var(--cs-color-border)]">
                  <span className="font-mono text-xs font-bold text-[var(--cs-color-text-muted)]">{item.step}</span>
                  <div>
                    <h4 className="font-[var(--cs-font-sans)] text-xs font-bold text-[var(--cs-color-text-primary)]">{item.action}</h4>
                    <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* VTS Workflow */}
          <div className="flex flex-col gap-4 rounded-2xl border-2 border-[var(--cs-color-accent)] bg-[var(--cs-color-bg-secondary)] p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-[var(--cs-color-border)] pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--cs-color-text-primary)]">
                VTS Authoring Pipeline (&lt; 4 Hours)
              </span>
              <span className="font-mono text-[10px] text-emerald-500 uppercase font-bold">
                Zero Code · 10x Velocity
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {VTS_WORKFLOW.map((item) => (
                <div key={item.step} className="flex items-start gap-3 rounded-xl bg-[var(--cs-color-bg)] p-3.5 border border-[var(--cs-color-border)]">
                  <span className="font-mono text-xs font-bold text-[var(--cs-color-accent)]">{item.step}</span>
                  <div>
                    <h4 className="font-[var(--cs-font-sans)] text-xs font-bold text-[var(--cs-color-text-primary)]">{item.action}</h4>
                    <p className="font-[var(--cs-font-sans)] text-xs text-[var(--cs-color-text-secondary)] mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

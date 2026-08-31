import { SceneInner, SceneLayout } from "../primitives/Scene";
import { MaskText, Reveal } from "../primitives/Motion";
import { amaseProject } from "@/content/projects/amase";

export function SceneProduct() {
  const { product } = amaseProject;

  return (
    <SceneLayout id="product" className="min-h-[100svh] overflow-hidden">
      <div className="relative flex min-h-[100svh] flex-col">
        {/* ── Header ─────────────────────────────────────────────── */}

        <SceneInner width="full" className="pt-10 md:pt-14">
          <header className="flex items-baseline justify-between gap-6">
            <Reveal>
              <p className="eyebrow text-muted-foreground">{product.eyebrow}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="eyebrow text-muted-foreground text-right">
                09 / 12
              </p>
            </Reveal>
          </header>
        </SceneInner>

        {/* ── Product introduction ─────────────────────────────── */}

        <SceneInner width="wide" className="flex-1">
          <div className="grid min-h-[78vh] items-center gap-14 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* ── Narrative ────────────────────────────────────── */}

            <div>
              <Reveal>
                <p className="eyebrow mb-8 text-ember">{product.eyebrow}</p>
              </Reveal>

              <h2 className="display max-w-3xl text-[clamp(2.8rem,6vw,6rem)]">
                <MaskText
                  lines={[
                    "A digital layer",
                    "for an existing",
                    "support ecosystem.",
                  ]}
                />
              </h2>

              <Reveal delay={0.2} className="mt-10 max-w-xl">
                <p className="text-[1.05rem] leading-[1.9] text-muted-foreground md:text-[1.15rem]">
                  {product.body}
                </p>
              </Reveal>
            </div>

            {/* ── Product metadata ─────────────────────────────── */}

            <Reveal delay={0.3}>
              <div className="relative aspect-[4/5] overflow-hidden border border-hairline bg-ink-soft">
                {/* Product image will be introduced here */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="px-8 text-center">
                    <p className="eyebrow text-ember">{product.platform}</p>

                    <p className="mt-5 display text-[clamp(2rem,5vw,4rem)]">
                      AMASE
                    </p>

                    <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
                      A social-support experience within the broader
                      reintegration ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </SceneInner>

        {/* ── Product framing ──────────────────────────────────── */}

        <SceneInner width="wide" className="pb-12 md:pb-16">
          <Reveal delay={0.4}>
            <div className="grid gap-6 border-t border-hairline pt-6 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
              <p className="eyebrow text-ember">Product</p>

              <p className="max-w-3xl text-sm leading-7 text-muted-foreground">
                AMASE represents the digital product layer of this
                support-oriented approach. The interface should be understood
                within the wider network of people, organisations and community
                support around it.
              </p>
            </div>
          </Reveal>
        </SceneInner>
      </div>
    </SceneLayout>
  );
}

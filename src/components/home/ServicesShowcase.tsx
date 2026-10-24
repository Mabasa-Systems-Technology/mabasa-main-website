"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, BarChart3, Cloud, Code2, Compass, Plug, Workflow, type LucideIcon } from "lucide-react";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

/** Short label for the always-visible buttons, and the phrase shown in the headline. */
const display: Record<string, { label: string; phrase: string; icon: LucideIcon }> = {
  "custom-software-development": { label: "Engineering", phrase: "modernise systems.", icon: Code2 },
  "ai-and-automation": { label: "AI & automation", phrase: "automate with AI.", icon: Workflow },
  "cloud-and-infrastructure": { label: "Cloud", phrase: "run reliably.", icon: Cloud },
  "data-engineering-and-analytics": { label: "Data", phrase: "trust their data.", icon: BarChart3 },
  "systems-integration": { label: "Integration", phrase: "connect systems.", icon: Plug },
  "technology-consulting": { label: "Advisory", phrase: "plan with clarity.", icon: Compass },
};

const SLIDE_SECONDS = 3.5;
const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();
  // Cycles on its own; pauses on hover and for reduced-motion users.
  const autoplay = !hovering && !reduceMotion;

  // Advance on a plain timer (restarts whenever the selection or play state changes).
  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % services.length), SLIDE_SECONDS * 1000);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  const current = services[active];
  const currentDisplay = display[current.slug];

  return (
    <section id="services" className="bg-paper py-20 lg:py-28">
      <div className="container-site" onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
        <h2 className="sr-only">Our capabilities</h2>

        {/* Headline: "We build" + the active service, which changes on its own. */}
        <div aria-hidden="true" className="text-headline font-light">
          <p className="text-ink">We help organisations</p>
          <div className="relative h-[1.2em] overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={current.slug}
                className="absolute inset-x-0 top-0 whitespace-nowrap text-accent"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.55, ease }}
              >
                {currentDisplay.phrase}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:mt-8">
          <p aria-live="polite" className="max-w-xl text-lg leading-relaxed text-ink-soft">
            {current.plain}
          </p>
          <Link
            href={`/services/${current.slug}`}
            className="group inline-flex shrink-0 items-center gap-1.5 text-[0.9375rem] font-medium text-accent"
          >
            View capability
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* All six services, always visible. */}
        <div
          role="group"
          aria-label="Our capabilities"
          className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3 lg:mt-12 lg:grid-cols-6"
        >
          {services.map((s, i) => {
            const d = display[s.slug];
            const Icon = d.icon;
            const isActive = i === active;
            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={cn(
                  "relative flex flex-col items-start gap-5 p-5 text-left transition-colors duration-300 lg:p-6",
                  isActive ? "bg-navy-900 text-white" : "bg-white text-ink hover:bg-accent-wash",
                )}
              >
                {isActive && (
                  <span
                    key={`${active}-${autoplay}`}
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left bg-accent-soft"
                    style={autoplay ? { animation: `bar-fill ${SLIDE_SECONDS}s linear forwards` } : undefined}
                  />
                )}
                <span className="flex w-full items-center justify-between">
                  <Icon
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className={cn("size-6", isActive ? "text-white" : "text-accent")}
                  />
                  <span className={cn("font-mono text-[0.7rem]", isActive ? "text-white/50" : "text-muted")}>
                    {s.number}
                  </span>
                </span>
                <span className="text-[0.9375rem] font-medium">{d.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

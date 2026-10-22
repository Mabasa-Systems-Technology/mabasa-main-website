"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { stages } from "@/lib/process";
import { SectionHeading } from "../ui/SectionHeading";
import { TextLink } from "../ui/Button";
import { cn } from "@/lib/cn";

const STEP_SECONDS = 7;

export function ProcessStepper() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const section = useRef<HTMLElement>(null);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const inView = useInView(section, { amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const autoplay = inView && !paused && !reduceMotion;
  const current = stages[active];

  const select = (i: number) => {
    setActive(i);
    setPaused(true);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const delta =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (i + delta + stages.length) % stages.length;
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <section ref={section} className="relative isolate overflow-hidden bg-navy-900 py-28 text-white lg:py-40">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            tone="light"
            title={
              <>
                From problem <span className="text-accent-soft">to production.</span>
              </>
            }
            lead="A clear, four-stage engagement model. You always know what is happening, what comes next and what you will receive."
          />
          <TextLink href="/how-we-work" tone="light" className="shrink-0">
            Our engagement model
          </TextLink>
        </div>

        <div
          role="tablist"
          aria-label="Engagement stages"
          className="mt-16 grid gap-px sm:grid-cols-2 lg:mt-24 lg:grid-cols-4"
        >
          {stages.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.number}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                role="tab"
                id={`stage-tab-${i}`}
                aria-selected={isActive}
                aria-controls="stage-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
                className="group pt-0 pr-6 pb-8 text-left"
              >
                <span className="relative block h-px w-full bg-white/15">
                  {isActive && (
                    <motion.span
                      key={`${active}-${autoplay}`}
                      className="absolute inset-y-0 left-0 w-full origin-left bg-accent-soft"
                      initial={{ scaleX: autoplay ? 0 : 1 }}
                      animate={{ scaleX: 1 }}
                      transition={autoplay ? { duration: STEP_SECONDS, ease: "linear" } : { duration: 0 }}
                      onAnimationComplete={() => {
                        if (autoplay) setActive((a) => (a + 1) % stages.length);
                      }}
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "mt-7 block text-[2.75rem] leading-none font-light tracking-tight transition-colors duration-500",
                    isActive ? "text-accent-soft" : "text-white/25 group-hover:text-white/50",
                  )}
                >
                  {s.number}
                </span>
                <span
                  className={cn(
                    "mt-5 block text-xl transition-colors duration-500",
                    isActive ? "text-white" : "text-white/55 group-hover:text-white/80",
                  )}
                >
                  {s.title}
                </span>
                <span
                  className={cn(
                    "mt-3 block text-[0.9375rem] leading-relaxed transition-colors duration-500",
                    isActive ? "text-white/70" : "text-white/35",
                  )}
                >
                  {s.summary}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="stage-panel"
          role="tabpanel"
          aria-labelledby={`stage-tab-${active}`}
          className="mt-8 rounded-[4px] border border-white/10 bg-white/[0.03] p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.number}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-10 lg:grid-cols-12"
            >
              <div className="lg:col-span-5">
                <p className="text-lg leading-relaxed text-white/80">{current.detail}</p>
              </div>
              <div className="lg:col-span-4 lg:col-start-7">
                <p className="eyebrow text-white/40">What happens</p>
                <ul className="mt-5 space-y-3">
                  {current.activities.map((a) => (
                    <li key={a} className="flex gap-3 text-[0.9375rem] text-white/75">
                      <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-accent-soft" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <p className="eyebrow text-white/40">You receive</p>
                <ul className="mt-5 space-y-3">
                  {current.deliverables.map((d) => (
                    <li key={d} className="text-[0.9375rem] text-white/75">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

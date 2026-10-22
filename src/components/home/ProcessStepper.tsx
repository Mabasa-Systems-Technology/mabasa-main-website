"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
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
          />
          <TextLink href="/how-we-work" tone="light" className="shrink-0">
            Our engagement model
          </TextLink>
        </div>

        <div aria-label="Engagement stages" className="mt-16 grid gap-px sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {stages.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.number}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                aria-pressed={isActive}
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
      </div>
    </section>
  );
}

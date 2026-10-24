"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { stages } from "@/lib/process";
import { TextLink } from "../ui/Button";
import { cn } from "@/lib/cn";

const idle = "Four stages, from business challenge to lasting value.";

/** A slim, quiet timeline: names only, with the summary revealed on hover, focus or tap. */
export function HowWeWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section aria-labelledby="how-we-work-heading" className="border-t border-line bg-black py-12 lg:py-14">
      <div className="container-site">
        <div className="flex items-baseline justify-between gap-6">
          <h2 id="how-we-work-heading" className="text-xl font-light tracking-tight text-ink">
            How we work
          </h2>
          <TextLink href="/how-we-work" className="shrink-0">
            The full approach
          </TextLink>
        </div>

        <ol
          className="relative mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4"
          onMouseLeave={() => setActive(null)}
        >
          {/* Hairline through the nodes; draws itself once when it scrolls into view. */}
          <motion.span
            aria-hidden="true"
            className="absolute top-[6px] left-0 hidden h-px w-full origin-left bg-line-strong sm:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />

          {stages.map((s, i) => {
            const isActive = active === i;
            return (
              <li key={s.number}>
                <button
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(isActive ? null : i)}
                  className="group relative flex w-full flex-col items-start text-left"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "relative z-10 block size-[13px] rounded-full border transition-colors duration-300",
                      isActive ? "border-accent bg-accent" : "border-ink/40 bg-black group-hover:border-ink",
                    )}
                  />
                  <span className="mt-4 text-xs text-muted">{s.number}</span>
                  <span
                    className={cn(
                      "mt-1 text-[0.9375rem] leading-snug transition-colors duration-300",
                      isActive ? "text-ink" : "text-ink-soft/70 group-hover:text-ink",
                    )}
                  >
                    {s.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {/* One shared caption line, so the layout never jumps. */}
        <p aria-live="polite" className="mt-6 min-h-12 max-w-2xl text-sm leading-relaxed text-muted sm:min-h-6">
          {active === null ? idle : stages[active].summary}
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, type CSSProperties } from "react";
import { ButtonLink } from "../ui/Button";
import { HeroBackground } from "../HeroBackground";

const headline = ["We fix what holds", "your business back."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax only on the background, so content is never pushed out of the clipped section.
  const fieldY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fieldOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section ref={ref} className="relative isolate flex min-h-[100svh] overflow-hidden bg-navy-950 text-white">
      <motion.div
        aria-hidden="true"
        style={{ opacity: fieldOpacity, y: fieldY }}
        className="absolute inset-0 -z-10 bg-navy-950"
      >
        <HeroBackground />
      </motion.div>

      <div className="container-site flex flex-1 flex-col justify-end pt-36 pb-12 lg:pb-16">
        <h1 className="max-w-6xl text-display font-light">
          {headline.map((line, i) => (
            <span key={line} className="-mb-[0.06em] block overflow-hidden pb-[0.14em]">
              <span className="line-up block" style={{ "--d": `${0.2 + i * 0.1}s` } as CSSProperties}>
                {line}
              </span>
            </span>
          ))}
        </h1>

        <p className="rise mt-6 max-w-xl text-lg text-white/80 lg:text-xl" style={{ "--d": "0.5s" } as CSSProperties}>
          Strategy. Technology. Execution. One accountable team.
        </p>

        <div className="rise mt-10" style={{ "--d": "0.6s" } as CSSProperties}>
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="light">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

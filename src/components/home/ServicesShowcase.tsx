"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

/** The words that complete "We help organisations ...", one per practice. */
const phrases: Record<string, string> = {
  "strategy-and-advisory": "set direction.",
  "technology-transformation": "modernise systems.",
  "artificial-intelligence-and-data": "apply AI and data.",
  "operations-and-performance": "perform better.",
  "engineering-and-implementation": "build and deliver.",
};

const SLIDE_SECONDS = 4;
const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const reduceMotion = useReducedMotion();
  // Moves on by itself; pauses on hover and for reduced-motion visitors.
  const autoplay = !hovering && !reduceMotion;

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % services.length), SLIDE_SECONDS * 1000);
    return () => clearTimeout(t);
  }, [active, autoplay]);

  const current = services[active];

  return (
    <section id="services" className="bg-white py-24 lg:py-36">
      <div
        className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16"
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <h2 className="sr-only">Expertise</h2>

        {/* The statement, finished by the active practice. */}
        <div aria-hidden="true" className="text-headline font-light lg:col-span-5">
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
                {phrases[current.slug]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* One image at a time, titled, changing with the phrase. */}
        <div className="lg:col-span-7">
          <Link
            href={`/services/${current.slug}`}
            aria-label={`${current.title}: view capability`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-[4px] rounded-tr-[56px] bg-navy-900"
          >
            {services.map((s, i) => (
              <div
                key={s.slug}
                aria-hidden={i !== active}
                className={cn(
                  "absolute inset-0 transition-opacity duration-700 ease-out-expo",
                  i === active ? "opacity-100" : "opacity-0",
                )}
              >
                <Image
                  src={s.image}
                  alt={i === active ? s.imageAlt : ""}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover transition-transform duration-[1.6s] ease-out-expo group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:p-10">
                  <p className="font-mono text-xs text-white/70">{s.number}</p>
                  <p className="mt-2 text-3xl font-light tracking-tight lg:text-4xl">{s.title}</p>
                </div>
              </div>
            ))}
            {/* Countdown to the next image. */}
            <span
              key={`${active}-${autoplay}`}
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-white"
              style={
                autoplay ? { animation: `bar-fill ${SLIDE_SECONDS}s linear forwards` } : { transform: "scaleX(0)" }
              }
            />
          </Link>

          <div className="mt-5 flex items-center gap-2" role="group" aria-label="Choose a practice">
            {services.map((s, i) => (
              <button
                key={s.slug}
                type="button"
                aria-label={s.title}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  i === active ? "w-8 bg-ink" : "w-1.5 bg-line-strong hover:bg-muted",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

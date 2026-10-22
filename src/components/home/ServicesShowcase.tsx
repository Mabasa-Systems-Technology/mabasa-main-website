"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "../ui/SectionHeading";
import { TextLink } from "../ui/Button";
import { cn } from "@/lib/cn";

const SLIDE_SECONDS = 6;
const ease = [0.16, 1, 0.3, 1] as const;

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const section = useRef<HTMLElement>(null);
  const inView = useInView(section, { amount: 0.4 });
  const reduceMotion = useReducedMotion();
  // Rotates through services while visible; pauses on hover and for reduced-motion users.
  const autoplay = inView && !hovering && !reduceMotion;
  const current = services[active];

  return (
    <section id="services" ref={section} className="bg-paper py-28 lg:py-40">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading title="What we build." />
          <TextLink href="/services" className="shrink-0">
            All services
          </TextLink>
        </div>

        <div
          className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-12 lg:gap-12"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <Link
            href={`/services/${current.slug}`}
            className="group relative block aspect-[4/3] overflow-hidden rounded-[4px] rounded-tr-[48px] bg-navy-900 lg:order-2 lg:col-span-7 lg:aspect-auto lg:min-h-[560px]"
          >
            <AnimatePresence initial={false}>
              <motion.div
                key={current.slug}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                <Image
                  src={current.image}
                  alt={current.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.03]"
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white lg:p-8">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <p className="font-mono text-xs text-accent-soft">{current.number}</p>
                  <p className="mt-2 text-2xl font-light tracking-tight lg:text-3xl">{current.title}</p>
                </motion.div>
              </AnimatePresence>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
                <span className="sr-only">Learn more about {current.title}</span>
              </span>
            </div>
          </Link>

          <ul className="border-t border-line-strong lg:order-1 lg:col-span-5">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="relative border-b border-line-strong">
                  {isActive && (
                    <motion.span
                      key={`${active}-${autoplay}`}
                      aria-hidden="true"
                      className="absolute top-[-1px] left-0 h-px w-full origin-left bg-accent"
                      initial={{ scaleX: autoplay ? 0 : 1 }}
                      animate={{ scaleX: 1 }}
                      transition={autoplay ? { duration: SLIDE_SECONDS, ease: "linear" } : { duration: 0 }}
                      onAnimationComplete={() => {
                        if (autoplay) setActive((a) => (a + 1) % services.length);
                      }}
                    />
                  )}
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-pressed={isActive}
                    className="w-full py-5 text-left lg:py-6"
                  >
                    <span className="flex items-baseline gap-5">
                      <span
                        className={cn(
                          "w-5 shrink-0 font-mono text-xs transition-colors duration-300",
                          isActive ? "text-accent" : "text-muted",
                        )}
                      >
                        {s.number}
                      </span>
                      <span
                        className={cn(
                          "text-xl font-light tracking-tight transition-colors duration-300 lg:text-2xl",
                          isActive ? "text-ink" : "text-ink-soft/60 hover:text-ink",
                        )}
                      >
                        {s.title}
                      </span>
                    </span>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          className="block overflow-hidden pl-10"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease }}
                        >
                          <span className="block pt-3 leading-relaxed text-muted">{s.plain}</span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

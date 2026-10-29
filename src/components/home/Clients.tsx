"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { User } from "lucide-react";
import { testimonials } from "@/lib/clients";
import { cn } from "@/lib/cn";
import { Reveal } from "../ui/Reveal";

const SLIDE_MS = 6000;

/**
 * Feedback from the people we have worked with, kept compact: a row of client marks to choose from and one
 * featured quote with the person's photo, name and role. It advances on its own and pauses on hover.
 */
export function Clients() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => setActive((i) => (i + 1) % testimonials.length), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [active, paused]);

  if (testimonials.length === 0) return null;
  const t = testimonials[active];

  return (
    <section aria-labelledby="clients-heading" className="bg-white py-16 lg:py-24">
      <div className="container-site">
        <Reveal>
          <h2 id="clients-heading" className="text-headline font-light text-balance">
            Businesses we&apos;ve worked with.
          </h2>
        </Reveal>

        <div
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          className="mt-10 border-t border-line-strong lg:mt-14"
        >
          <ul role="tablist" aria-label="Clients" className="no-scrollbar flex overflow-x-auto">
            {testimonials.map((c, i) => (
              <li key={c.name} role="presentation" className="min-w-0 flex-1 basis-0">
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={c.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "relative flex h-20 w-full min-w-[7.5rem] items-center justify-center px-4 transition-opacity duration-300",
                    i === active ? "opacity-100" : "opacity-40 hover:opacity-70",
                  )}
                >
                  {c.logo ? (
                    <Image
                      src={c.logo.src}
                      alt=""
                      width={c.logo.width}
                      height={c.logo.height}
                      loading="eager"
                      className="h-6 w-auto max-w-[7.5rem] object-contain grayscale"
                    />
                  ) : (
                    <span className="truncate text-sm font-medium tracking-tight text-ink">{c.name}</span>
                  )}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-0 bottom-0 h-px transition-colors duration-300",
                      i === active ? "bg-accent" : "bg-transparent",
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>
          <div className="border-b border-line-strong" />

          <div className="min-h-[11rem] py-10 lg:py-14">
            <AnimatePresence mode="wait">
              <motion.figure
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                role="tabpanel"
                className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <figcaption className="flex items-center gap-5 lg:col-span-4">
                  <div className="relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-paper text-muted lg:size-24">
                    {t.feedback.photo ? (
                      <Image
                        src={t.feedback.photo}
                        alt={t.feedback.person}
                        fill
                        sizes="96px"
                        className="object-cover"
                      />
                    ) : (
                      <User aria-hidden="true" strokeWidth={1.5} className="size-8" />
                    )}
                  </div>
                  <p className="min-w-0 text-sm text-muted">
                    <span className="block text-lg font-medium text-ink">{t.feedback.person}</span>
                    {t.feedback.role}
                    <span className="block">{t.name}</span>
                  </p>
                </figcaption>
                <blockquote className="text-xl leading-snug font-light text-ink lg:col-span-8 lg:text-3xl">
                  &ldquo;{t.feedback.quote}&rdquo;
                </blockquote>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

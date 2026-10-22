"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "../ui/SectionHeading";
import { TextLink } from "../ui/Button";
import { cn } from "@/lib/cn";

export function ServicesShowcase() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section id="services" className="bg-paper py-28 lg:py-40">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading title="What we build." />
          <TextLink href="/services" className="shrink-0">
            All services
          </TextLink>
        </div>

        <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12">
          <ul className="border-t border-line-strong lg:col-span-7">
            {services.map((s, i) => {
              const isActive = i === active;
              return (
                <li key={s.slug} className="border-b border-line-strong">
                  <Link
                    href={`/services/${s.slug}`}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="group relative flex items-start gap-5 py-7 sm:gap-8 lg:py-8"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-[-1px] left-0 h-px bg-accent transition-[width] duration-700 ease-out-expo",
                        isActive ? "w-full" : "w-0",
                      )}
                    />
                    <span
                      className={cn(
                        "pt-2 font-mono text-xs transition-colors duration-300",
                        isActive ? "text-accent" : "text-muted",
                      )}
                    >
                      {s.number}
                    </span>
                    <span className="flex-1">
                      <span
                        className={cn(
                          "block text-title font-light transition-[color,transform] duration-500 ease-out-expo",
                          isActive ? "text-ink lg:translate-x-2" : "text-ink-soft",
                        )}
                      >
                        {s.title}
                      </span>
                      <span className="mt-3 block max-w-lg text-[0.9375rem] leading-relaxed text-muted lg:hidden">
                        {s.short}
                      </span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      strokeWidth={1.5}
                      className={cn(
                        "mt-2 size-6 shrink-0 transition-all duration-500 ease-out-expo",
                        isActive
                          ? "text-accent lg:translate-x-0 lg:opacity-100"
                          : "text-muted lg:-translate-x-2 lg:opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 overflow-hidden rounded-[4px] bg-navy-900 text-white">
              <div aria-hidden="true" className="hero-field absolute inset-0 opacity-70" />
              <div className="relative min-h-[420px] p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.slug}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="font-mono text-[5.5rem] leading-none font-light text-white/15">{current.number}</p>
                    <h3 className="mt-8 text-2xl font-light tracking-tight">{current.title}</h3>
                    <p className="mt-4 leading-relaxed text-white/70">{current.short}</p>
                    <TextLink href={`/services/${current.slug}`} tone="light" className="mt-10">
                      Explore {current.title.split(" ")[0] === "Artificial" ? "AI & Automation" : current.title}
                    </TextLink>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import type { Service } from "@/lib/services";
import { cn } from "@/lib/cn";

/** One open row at a time: titles to scan, a single image and sentence for whichever is open. */
export function ServicesList({ items }: { items: Service[] }) {
  const [open, setOpen] = useState(0);

  return (
    <ul className="border-t border-ink">
      {items.map((s, i) => {
        const isOpen = open === i;
        return (
          <li key={s.slug} className="border-b border-line-strong">
            <h2>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`service-${s.slug}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center gap-5 py-6 text-left lg:gap-10 lg:py-9"
              >
                <span className="w-7 shrink-0 font-mono text-xs text-muted lg:w-10">{s.number}</span>
                <span
                  className={cn(
                    "flex-1 text-title font-light text-balance transition-colors duration-300",
                    isOpen ? "text-ink" : "text-ink-soft",
                  )}
                >
                  {s.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "flex size-10 shrink-0 items-center justify-center rounded-full border transition-[transform,background-color,color,border-color] duration-500 ease-out-expo",
                    isOpen ? "rotate-45 border-ink bg-ink text-white" : "border-line-strong text-ink",
                  )}
                >
                  <Plus strokeWidth={1.5} className="size-5" />
                </span>
              </button>
            </h2>

            <div
              id={`service-${s.slug}`}
              role="region"
              aria-label={s.title}
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out-expo",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-8 pb-10 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:pl-20">
                  <div
                    className={cn(
                      "relative aspect-[16/10] overflow-hidden bg-navy-900 lg:col-span-6",
                      i % 2 === 0 ? "rounded-[4px] rounded-tr-[48px]" : "rounded-[4px] rounded-tl-[48px]",
                    )}
                  >
                    <Image
                      src={s.image}
                      alt={isOpen ? s.imageAlt : ""}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-8">
                    <p className="text-xl leading-relaxed text-ink-soft lg:text-2xl lg:font-light">{s.plain}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Link
                        href={`/services/${s.slug}`}
                        tabIndex={isOpen ? 0 : -1}
                        className="inline-flex h-12 items-center rounded-[3px] bg-accent px-6 text-[0.9375rem] font-medium text-white transition-colors hover:bg-accent-deep"
                      >
                        Learn more
                      </Link>
                      <Link
                        href={`/contact?service=${encodeURIComponent(s.title)}`}
                        tabIndex={isOpen ? 0 : -1}
                        className="group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-accent"
                      >
                        Contact us
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.75}
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

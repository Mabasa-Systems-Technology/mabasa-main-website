"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type Item = { slug: string; number: string; title: string };

/** Sticky in-page index that highlights the service currently in view. */
export function ServicesIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.slug);
  const mobileBar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    items.forEach((i) => {
      const el = document.getElementById(i.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  // Keep the active chip visible in the mobile bar.
  useEffect(() => {
    mobileBar.current
      ?.querySelector<HTMLElement>(`[data-slug="${active}"]`)
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <>
      {/* Mobile / tablet: horizontal chips */}
      <div className="sticky top-[72px] z-30 -mx-5 border-b border-line bg-white/90 backdrop-blur-xl sm:-mx-8 lg:hidden">
        <div ref={mobileBar} className="no-scrollbar flex gap-2 overflow-x-auto px-5 py-3 sm:px-8">
          {items.map((i) => (
            <a
              key={i.slug}
              href={`#${i.slug}`}
              data-slug={i.slug}
              aria-current={active === i.slug ? "true" : undefined}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition-colors duration-300",
                active === i.slug ? "border-ink bg-ink text-white" : "border-line-strong text-ink-soft",
              )}
            >
              {i.title}
            </a>
          ))}
        </div>
      </div>

      {/* Desktop: vertical index */}
      <nav aria-label="Services" className="sticky top-32 hidden lg:block">
        <ol className="border-l border-line">
          {items.map((i) => {
            const isActive = active === i.slug;
            return (
              <li key={i.slug}>
                <a
                  href={`#${i.slug}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex items-baseline gap-4 py-3 pl-6"
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute top-0 -left-px h-full w-0.5 bg-accent transition-transform duration-500 ease-out-expo origin-top",
                      isActive ? "scale-y-100" : "scale-y-0",
                    )}
                  />
                  <span className={cn("font-mono text-xs", isActive ? "text-accent" : "text-muted")}>{i.number}</span>
                  <span
                    className={cn(
                      "text-[0.9375rem] transition-colors duration-300",
                      isActive ? "text-ink" : "text-muted group-hover:text-ink",
                    )}
                  >
                    {i.title}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "@/lib/cn";

export function IndustryCarousel() {
  const track = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setEdges({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.getBoundingClientRect().width + 20 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden bg-white pb-28 lg:pb-40">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 border-t border-line pt-28 sm:flex-row sm:items-end lg:pt-40">
          <SectionHeading
            title="Industries we work with."
            lead="Every sector has its own systems, regulations and pressures. We bring engineering approaches that adapt to the context you operate in."
          />
          <div className="flex shrink-0 gap-2">
            {([-1, 1] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                onClick={() => scroll(dir)}
                disabled={dir === -1 ? edges.start : edges.end}
                aria-label={dir === -1 ? "Previous industries" : "Next industries"}
                className="flex size-12 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-white disabled:pointer-events-none disabled:opacity-35"
              >
                {dir === -1 ? (
                  <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-5" />
                ) : (
                  <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-5" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul
        ref={track}
        onScroll={update}
        className="no-scrollbar mt-16 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth scroll-px-5 px-5 sm:scroll-px-8 sm:px-8 lg:mt-20 lg:scroll-px-[max(3rem,calc((100vw_-_1360px)/2_+_3rem))] lg:px-[max(3rem,calc((100vw_-_1360px)/2_+_3rem))]"
      >
        {industries.map((ind, i) => (
          <li key={ind.slug} className="w-[82vw] shrink-0 snap-start sm:w-[46vw] lg:w-[30%] xl:w-[23%]">
            <Link href={`/industries#${ind.slug}`} className="group block">
              <div
                className={cn(
                  "relative aspect-[3/4] overflow-hidden bg-navy-900",
                  i % 2 === 0 ? "rounded-[4px] rounded-tr-[48px]" : "rounded-[4px] rounded-bl-[48px]",
                )}
              >
                <Image
                  src={ind.image}
                  alt={ind.alt}
                  fill
                  sizes="(min-width: 1280px) 23vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 82vw"
                  className="object-cover grayscale-[35%] transition-[transform,filter] duration-[1.2s] ease-out-expo group-hover:scale-[1.05] group-hover:grayscale-0"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="font-mono text-[0.7rem] text-accent-soft">0{i + 1}</p>
                  <h3 className="mt-2 text-2xl font-light tracking-tight">{ind.name}</h3>
                  <p className="mt-3 max-h-32 overflow-hidden text-sm leading-relaxed text-white/75 transition-all duration-700 ease-out-expo lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-32 lg:group-hover:opacity-100 lg:group-focus-visible:max-h-32 lg:group-focus-visible:opacity-100">
                    {ind.summary}
                  </p>
                </div>
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="absolute top-6 left-6 size-6 text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

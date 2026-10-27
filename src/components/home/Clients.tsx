"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { testimonials } from "@/lib/clients";
import { Reveal } from "../ui/Reveal";

const SLIDE_MS = 5500;

/**
 * Feedback from the people we have worked with: one consistent card style, a company mark at the top,
 * the quote, then the person. The row slides on its own and pauses while a visitor interacts with it.
 */
export function Clients() {
  const track = useRef<HTMLUListElement>(null);
  const paused = useRef(false);

  useEffect(() => {
    const el = track.current;
    if (!el || testimonials.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      if (paused.current) return;
      const cards = Array.from(el.children) as HTMLElement[];
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      const nextCard = cards.find((c) => c.offsetLeft > el.scrollLeft + 8);
      el.scrollTo({ left: atEnd || !nextCard ? 0 : nextCard.offsetLeft, behavior: "smooth" });
    }, SLIDE_MS);
    return () => clearInterval(timer);
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="clients-heading" className="overflow-hidden bg-white py-20 lg:py-28">
      <div className="container-site">
        <Reveal>
          <h2 id="clients-heading" className="text-headline font-light text-balance">
            Businesses we&apos;ve worked with.
          </h2>
        </Reveal>
      </div>

      <ul
        ref={track}
        onPointerEnter={() => (paused.current = true)}
        onPointerLeave={() => (paused.current = false)}
        onTouchStart={() => (paused.current = true)}
        onTouchEnd={() => setTimeout(() => (paused.current = false), 4000)}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-2 sm:px-8 lg:mt-16 lg:gap-6 lg:px-12"
      >
        {testimonials.map((t) => (
          <li key={t.name} className="w-[86%] shrink-0 snap-start sm:w-[26rem] lg:w-[28rem]">
            <figure className="flex h-full flex-col rounded-[6px] border border-line bg-paper p-8 lg:p-10">
              <div className="flex h-7 items-center">
                {t.logo ? (
                  <Image
                    src={t.logo.src}
                    alt={t.name}
                    width={t.logo.width}
                    height={t.logo.height}
                    loading="eager"
                    className="h-5 w-auto max-w-[9rem] object-contain object-left opacity-80 grayscale"
                  />
                ) : (
                  <span className="text-sm font-medium tracking-tight text-ink-soft">{t.name}</span>
                )}
              </div>

              <blockquote className="mt-8 flex-1 text-xl leading-snug font-light text-ink lg:text-2xl">
                &ldquo;{t.feedback.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-4 border-t border-line-strong pt-6">
                <div className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white text-muted">
                  {t.feedback.photo ? (
                    <Image src={t.feedback.photo} alt="" fill sizes="44px" className="object-cover" />
                  ) : (
                    <User aria-hidden="true" strokeWidth={1.5} className="size-5" />
                  )}
                </div>
                <p className="min-w-0 text-sm text-muted">
                  <span className="block text-base font-medium text-ink">{t.feedback.person}</span>
                  {t.feedback.role}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
        {/* Trailing space so the last card can snap fully into view. */}
        <li aria-hidden="true" className="w-1 shrink-0" />
      </ul>
    </section>
  );
}

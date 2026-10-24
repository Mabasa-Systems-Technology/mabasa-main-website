"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { User } from "lucide-react";
import { clients, testimonials } from "@/lib/clients";
import { cn } from "@/lib/cn";
import { Reveal } from "../ui/Reveal";

const LOGOS_MS = 5000;
const QUOTE_MS = 7000;

/**
 * A slim band: the client logos, which slide away for a card showing one person's feedback (their
 * photo, name, role and company logo) and then return. With no feedback on file it stays on the logos.
 */
export function Clients() {
  // -1 shows the logos; 0..n-1 shows that testimonial. The next one follows after each logo pause.
  const [shown, setShown] = useState(-1);
  const [next, setNext] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (testimonials.length === 0 || paused) return;
    const showingLogos = shown === -1;
    const timer = setTimeout(
      () => {
        if (showingLogos) {
          setShown(next);
          setNext((next + 1) % testimonials.length);
        } else {
          setShown(-1);
        }
      },
      showingLogos ? LOGOS_MS : QUOTE_MS,
    );
    return () => clearTimeout(timer);
  }, [shown, next, paused]);

  const quote = testimonials[shown] ?? testimonials[(next + testimonials.length - 1) % testimonials.length];
  const showingQuote = shown !== -1;

  return (
    <section aria-labelledby="clients-heading" className="overflow-hidden border-y border-line bg-white py-12 lg:py-14">
      <div className="container-site">
        <Reveal className="grid gap-6 lg:grid-cols-12 lg:items-center lg:gap-10">
          <h2 id="clients-heading" className="text-xl font-light tracking-tight text-ink lg:col-span-3">
            Businesses we&apos;ve worked with
          </h2>

          {/* Both states share one grid cell, so the band keeps the height of the taller one. */}
          <div
            className="grid lg:col-span-9 [&>*]:col-start-1 [&>*]:row-start-1"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <ul
              aria-hidden={showingQuote}
              className={cn(
                "grid grid-cols-2 items-center justify-items-start gap-x-8 gap-y-6 transition-[transform,opacity] duration-700 ease-out-expo sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-8 lg:justify-between",
                showingQuote ? "pointer-events-none -translate-x-10 opacity-0" : "translate-x-0 opacity-100",
              )}
            >
              {clients.map((c) => (
                <li key={c.name} className="flex h-10 items-center">
                  {c.logo ? (
                    <Image
                      src={c.logo.src}
                      alt={c.name}
                      width={c.logo.width}
                      height={c.logo.height}
                      className={cn(
                        "w-auto max-w-[8.5rem] object-contain object-left opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:max-w-none",
                        c.logo.heightClass,
                      )}
                    />
                  ) : (
                    <span className="text-lg font-medium tracking-tight text-ink/60">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>

            {quote && (
              <figure
                aria-hidden={!showingQuote}
                className={cn(
                  "flex w-full items-start gap-4 self-center rounded-[8px] border border-line bg-white p-5 shadow-[0_18px_50px_-24px_rgb(0_0_0/0.3)] transition-[transform,opacity] duration-700 ease-out-expo sm:gap-5 sm:p-6",
                  showingQuote ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-12 opacity-0",
                )}
              >
                <div className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-paper text-muted sm:size-14">
                  {quote.feedback.photo ? (
                    <Image
                      src={quote.feedback.photo}
                      alt=""
                      fill
                      sizes="56px"
                      loading="eager"
                      className="object-cover"
                    />
                  ) : (
                    <User aria-hidden="true" strokeWidth={1.5} className="size-6" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <blockquote className="text-base leading-snug font-light text-ink sm:text-lg lg:text-xl">
                    &ldquo;{quote.feedback.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                    <p className="text-sm text-muted">
                      <span className="block font-medium text-ink">{quote.feedback.person}</span>
                      {quote.feedback.role}, {quote.name}
                    </p>
                    {quote.logo ? (
                      <Image
                        src={quote.logo.src}
                        alt={quote.name}
                        width={quote.logo.width}
                        height={quote.logo.height}
                        loading="eager"
                        className="h-6 w-auto max-w-[8rem] object-contain object-right"
                      />
                    ) : (
                      <span className="text-sm font-medium text-ink">{quote.name}</span>
                    )}
                  </figcaption>
                </div>
              </figure>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

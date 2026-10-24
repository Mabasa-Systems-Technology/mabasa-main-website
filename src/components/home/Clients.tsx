"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { clients, testimonials } from "@/lib/clients";
import { cn } from "@/lib/cn";
import { Reveal } from "../ui/Reveal";

const LOGOS_MS = 5000;
const QUOTE_MS = 7000;

/**
 * A slim band: the client logos, which give way to one team member's feedback for a few seconds
 * and then return. With no approved feedback on file it simply stays on the logos.
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

  return (
    <section aria-labelledby="clients-heading" className="border-y border-line bg-white py-12 lg:py-14">
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
              aria-hidden={shown !== -1}
              className={cn(
                "grid grid-cols-2 items-center justify-items-start gap-x-8 gap-y-6 transition-opacity duration-700 sm:flex sm:flex-wrap sm:gap-x-12 sm:gap-y-8 lg:justify-between",
                shown === -1 ? "opacity-100" : "pointer-events-none opacity-0",
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
                aria-hidden={shown === -1}
                className={cn(
                  "flex flex-col justify-center transition-opacity duration-700",
                  shown === -1 ? "pointer-events-none opacity-0" : "opacity-100",
                )}
              >
                <blockquote className="max-w-3xl text-lg leading-snug font-light text-ink lg:text-2xl">
                  &ldquo;{quote.feedback.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  <span className="font-medium text-ink">{quote.feedback.person}</span>, {quote.feedback.role},{" "}
                  {quote.name}
                </figcaption>
              </figure>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

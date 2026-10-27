"use client";

import { useSyncExternalStore } from "react";
import { HeroBackground } from "./HeroBackground";
import { ButtonLink } from "./ui/Button";
import { readSubmitter } from "@/lib/thanks";

const copy = {
  enquiry: {
    line: "We'll read it and reply by email.",
    primary: { label: "Back to home", href: "/" },
    secondary: { label: "Our expertise", href: "/services" },
  },
  proposal: {
    line: "We'll come back with the team, the structure and the terms.",
    primary: { label: "Back to home", href: "/" },
    secondary: { label: "Back to outsourcing", href: "/outsourced-development" },
  },
} as const;

const subscribe = () => () => {};

/** Full-screen confirmation shown after a form is sent: an animated tick, the name and one line. */
export function ThankYou({ kind }: { kind: keyof typeof copy }) {
  const name = useSyncExternalStore(subscribe, readSubmitter, () => "");
  const c = copy[kind];

  return (
    <section className="relative isolate flex min-h-svh items-center justify-center overflow-hidden bg-navy-950 px-5 py-32 text-center text-white">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <HeroBackground />
      </div>

      <div role="status" className="flex flex-col items-center">
        <div className="relative flex size-28 items-center justify-center">
          <span aria-hidden="true" className="thanks-ring absolute inset-0 rounded-full border border-white/60" />
          <svg viewBox="0 0 56 56" className="size-28" aria-hidden="true">
            <circle className="thanks-fill" cx="28" cy="28" r="26" fill="rgb(255 255 255 / 0.1)" />
            <circle
              className="thanks-circle"
              cx="28"
              cy="28"
              r="26"
              fill="none"
              stroke="#fff"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              className="thanks-check"
              d="M17 29.5l7.5 7.5L39.5 21"
              fill="none"
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="rise mt-10 text-display font-light text-balance" style={{ animationDelay: "0.9s" }}>
          {name ? `Thanks, ${name}.` : "Thank you."}
        </h1>
        <p className="rise mt-4 text-2xl font-light text-white/90 lg:text-3xl" style={{ animationDelay: "1.05s" }}>
          We&apos;ve got it.
        </p>
        <p className="rise mt-6 max-w-md text-lg text-white/70" style={{ animationDelay: "1.2s" }}>
          {c.line}
        </p>
        <div className="rise mt-12 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: "1.35s" }}>
          <ButtonLink href={c.primary.href} variant="light">
            {c.primary.label}
          </ButtonLink>
          <ButtonLink href={c.secondary.href} variant="outline-light" arrow={false}>
            {c.secondary.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

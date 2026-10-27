import type { Metadata } from "next";
import { Eye, ListChecks, Route } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Business Review",
  description:
    "A focused review of where your organisation loses time and money, and what to fix first. Start with a conversation, with no obligation.",
  alternates: { canonical: "/business-review" },
};

const enquiry = `/contact?service=${encodeURIComponent("Strategy & Advisory")}`;

const gets = [
  { icon: Eye, title: "A clear picture", text: "Where the friction is, across people, process and technology." },
  { icon: ListChecks, title: "A priority list", text: "What to fix first, and why." },
  { icon: Route, title: "A practical plan", text: "The next steps, with an honest view of effort." },
];

const steps = [
  { title: "Tell us the problem", text: "A short conversation about what is not working." },
  { title: "We review it with you", text: "We look at the process, the systems and the numbers." },
  { title: "You decide what happens next", text: "No obligation to go further." },
];

const sectors = [
  "Financial Services",
  "Industrial & Manufacturing",
  "Logistics & Supply Chain",
  "Professional Services",
  "Technology & Telecommunications",
];

export default function BusinessReviewPage() {
  return (
    <>
      <PageHero
        title="Find out what is holding your business back."
        lead="A focused review of where you lose time and money, and what to fix first."
      >
        <div className="mt-12">
          <ButtonLink href={enquiry} variant="light">
            Request a business review
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">What you get.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line lg:mt-20 lg:grid-cols-3">
            {gets.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08} className="h-full">
                <article className="h-full bg-white p-8 lg:p-10">
                  <g.icon aria-hidden="true" strokeWidth={1.25} className="size-8 text-accent" />
                  <h3 className="mt-10 text-2xl font-light tracking-tight">{g.title}</h3>
                  <p className="mt-2 text-ink-soft">{g.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">How it works.</h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-3 lg:gap-12">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 0.08}>
                  <p className="font-mono text-xs text-accent">0{i + 1}</p>
                  <h3 className="mt-4 text-2xl font-light tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-ink-soft">{s.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-title font-light text-balance">For organisations in</h2>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <li key={s} className="rounded-full border border-line-strong px-5 py-2.5 text-ink-soft">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand title="Which problem costs you the most?" cta="Request a business review" href={enquiry} />
    </>
  );
}

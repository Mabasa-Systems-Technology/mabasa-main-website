import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

/** Common starting points for an engagement, each leading to a pre-filled enquiry. */
const startingPoints = [
  {
    problem: "Critical systems are ageing and hard to change.",
    approach: "Modernise them in controlled phases without disrupting operations.",
    service: "Engineering & Implementation",
  },
  {
    problem: "Skilled people are stuck in manual, document-heavy work.",
    approach: "Automate extraction and routing with practical, governed AI.",
    service: "Artificial Intelligence & Data",
  },
  {
    problem: "Core systems do not share data reliably.",
    approach: "Integrate them so information flows once, accurately.",
    service: "Technology Transformation",
  },
  {
    problem: "Processes are slow, manual and hard to measure.",
    approach: "Review and redesign how work gets done.",
    service: "Operations & Performance",
  },
  {
    problem: "Leadership cannot get trusted operational data.",
    approach: "Build pipelines and reporting leadership can rely on.",
    service: "Artificial Intelligence & Data",
  },
  {
    problem: "A major technology decision needs an independent view.",
    approach: "Get an architecture and feasibility assessment grounded in your objectives.",
    service: "Strategy & Advisory",
  },
];

export function SelectedWork() {
  if (caseStudies.length > 0) {
    return (
      <section className="bg-paper py-28 lg:py-40">
        <div className="container-site">
          <SectionHeading title="Selected engagements." />
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {caseStudies.map((c) => (
              <Reveal key={c.slug}>
                <article className="h-full rounded-[4px] border border-line bg-white p-10">
                  <p className="eyebrow text-accent">{c.sector}</p>
                  <h3 className="mt-5 text-2xl font-light">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted">{c.client}</p>
                  <p className="mt-5 leading-relaxed text-ink-soft">{c.summary}</p>
                  <ul className="mt-6 space-y-2 text-[0.9375rem] text-ink-soft">
                    {c.outcomes.map((o) => (
                      <li key={o}>{o}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper py-28 lg:py-40">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading title="Does this sound familiar?" />
          </div>
          <ul className="border-t border-line-strong lg:col-span-8">
            {startingPoints.map((p, i) => (
              <li key={p.problem} className="border-b border-line-strong">
                <Reveal delay={i * 0.04} y={16}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(p.service)}`}
                    className="group grid gap-3 py-7 transition-colors duration-500 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
                  >
                    <span className="text-lg leading-snug text-ink">“{p.problem}”</span>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-accent">
                      <span className="sm:sr-only">Discuss this</span>
                      <span className="flex size-10 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                        <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
                      </span>
                    </span>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

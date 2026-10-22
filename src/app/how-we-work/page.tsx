import type { Metadata } from "next";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { stages } from "@/lib/process";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "MST's four-stage engagement model — Discover, Design, Build, Deploy & Improve — with clear deliverables, responsibilities and expectations at every step.",
  alternates: { canonical: "/how-we-work" },
};

const models = [
  {
    title: "Defined-scope project",
    text: "A clearly specified outcome delivered against an agreed scope, timeline and budget. Suited to well-understood requirements.",
  },
  {
    title: "Phased delivery",
    text: "Larger initiatives broken into funded phases, each with its own scope and review point, so investment follows proven progress.",
  },
  {
    title: "Ongoing engineering support",
    text: "A continuing arrangement for maintenance, enhancements and operational support of systems we, or others, have built.",
  },
  {
    title: "Advisory engagement",
    text: "Focused consulting for architecture, assessments and technical decisions, with a written outcome you can act on.",
  },
];

const faqs = [
  {
    q: "How does an engagement usually start?",
    a: "With a conversation about the problem you want to solve. If there is a fit, we propose a short Discover stage to understand the requirements properly before committing to a full scope and estimate.",
  },
  {
    q: "Do you work with businesses that have no in-house technical team?",
    a: "Yes. Many of the organisations we speak to do not have engineers on staff. We explain technical decisions in plain language and can provide ongoing support after launch.",
  },
  {
    q: "Can you work on an existing system someone else built?",
    a: "Yes. We typically begin with a technical review of the codebase and infrastructure, then recommend whether to improve, extend, stabilise or gradually replace it.",
  },
  {
    q: "How do you price projects?",
    a: "Pricing depends on scope and engagement model. Defined-scope work is usually quoted as a fixed or phased price after the Discover stage; ongoing support and advisory work can be arranged on an agreed time-and-materials or retainer basis.",
  },
  {
    q: "How long does a typical project take?",
    a: "That depends entirely on scope. We would rather give you a realistic estimate after understanding the problem than a quick number that turns out to be wrong. Larger initiatives are broken into phases so value is delivered early.",
  },
  {
    q: "How do you handle confidential information and personal data?",
    a: "We are happy to sign a non-disclosure agreement before detailed discussions. Systems we build are designed with access control, data minimisation and the requirements of the Protection of Personal Information Act (POPIA) in mind.",
  },
];

export default function HowWeWorkPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero title="From problem to production." />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          {stages.map((s) => (
            <article
              key={s.number}
              id={`stage-${s.number}`}
              className="relative grid scroll-mt-28 gap-10 border-t border-line py-16 first:border-t-0 lg:grid-cols-12 lg:py-24"
            >
              <Reveal className="lg:col-span-5">
                <div className="lg:sticky lg:top-32">
                  <p className="text-[clamp(4rem,9vw,8rem)] leading-none font-light tracking-tight text-accent">
                    {s.number}
                  </p>
                  <h2 className="mt-6 text-headline font-light">{s.title}</h2>
                </div>
              </Reveal>
              <div className="space-y-12 lg:col-span-6 lg:col-start-7">
                <Reveal>
                  <h3 className="eyebrow text-accent">Activities</h3>
                  <ul className="mt-5 border-t border-line">
                    {s.activities.map((a) => (
                      <li key={a} className="border-b border-line py-4 text-lg font-light text-ink">
                        {a}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal>
                  <div>
                    <h3 className="eyebrow text-muted">Deliverables</h3>
                    <ul className="mt-5 space-y-3">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3 text-ink-soft">
                          <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-accent" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-24 text-white lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">Structured around how you want to invest.</h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {models.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-navy-900 p-8 transition-colors duration-500 hover:bg-navy-800">
                  <p className="font-mono text-xs text-accent-soft">0{i + 1}</p>
                  <h3 className="mt-10 text-xl font-light">{m.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-paper py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-title font-light">Frequently asked.</h2>
          </Reveal>
          <div className="border-t border-line-strong lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group border-b border-line-strong">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software, AI and automation, cloud infrastructure, data engineering, systems integration and technology consulting from MST.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Engineering and consulting capabilities, under one roof."
        lead="We design, develop, integrate and maintain the systems growing businesses depend on. Engage us for a single discipline, or combine them to solve a larger problem end to end."
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="container-site">
          {services.map((s) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-28 gap-10 border-t border-line py-16 first:border-t-0 lg:grid-cols-12 lg:py-24"
            >
              <Reveal className="lg:col-span-5">
                <p className="font-mono text-sm text-accent">{s.number}</p>
                <h2 className="mt-5 text-title font-light text-balance">{s.title}</h2>
                <p className="mt-6 leading-relaxed text-muted">{s.intro}</p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <ButtonLink href={`/services/${s.slug}`} variant="outline-dark">
                    Service details
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
                <p className="eyebrow text-muted">Capabilities</p>
                <ul className="mt-5 border-t border-line">
                  {s.capabilities.map((c) => (
                    <li key={c} className="flex items-baseline gap-4 border-b border-line py-4 text-ink-soft">
                      <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-4px] bg-accent" />
                      {c}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=${encodeURIComponent(s.title)}`}
                  className="group mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-accent"
                >
                  Enquire about {s.title.toLowerCase()}
                  <ArrowUpRight
                    aria-hidden="true"
                    strokeWidth={1.75}
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </Reveal>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Not sure which service you need?"
        body="Most business problems cross more than one discipline. Describe the challenge and we'll recommend a practical technical approach."
      />
    </>
  );
}

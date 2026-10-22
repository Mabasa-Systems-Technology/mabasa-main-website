import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { getService, services } from "@/lib/services";
import { stages } from "@/lib/process";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: `${service.title} | MST`, description: service.short, url: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === service.slug);
  const next = services[(index + 1) % services.length];
  const enquiryHref = `/contact?service=${encodeURIComponent(service.title)}`;

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        description: service.intro,
        serviceType: service.title,
        url: `${site.url}/services/${service.slug}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: { "@type": "Country", name: site.country },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}/services/${service.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={ld} />
      <PageHero title={service.title} lead={service.intro}>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={enquiryHref} variant="light">
            Discuss your project
          </ButtonLink>
          <ButtonLink href="/services" variant="outline-light" arrow={false}>
            All services
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-title font-light text-balance">Problems we are typically asked to solve.</h2>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:col-span-8">
            {service.problems.map((p, i) => (
              <Reveal key={p} delay={i * 0.06} className="h-full">
                <div className="h-full bg-white p-8">
                  <p className="font-mono text-xs text-muted">0{i + 1}</p>
                  <p className="mt-6 text-lg leading-snug text-ink">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow text-accent">Capabilities</p>
            <ul className="mt-8 border-t border-line-strong">
              {service.capabilities.map((c) => (
                <li key={c} className="border-b border-line-strong py-5 text-lg font-light text-ink">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow text-accent">What you receive</p>
            <ul className="mt-8 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex gap-4 text-ink-soft">
                  <span aria-hidden="true" className="mt-3 h-px w-4 shrink-0 bg-accent" />
                  {d}
                </li>
              ))}
            </ul>
            <p className="eyebrow mt-14 text-muted">Tools & methods we commonly use</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line-strong bg-white px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Technology choices are made per project, based on your existing environment, team and requirements.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-title font-light">Four stages, from problem to production.</h2>
            </div>
            <Link href="/how-we-work" className="text-[0.9375rem] font-medium text-accent hover:underline">
              Read about our process
            </Link>
          </Reveal>
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((s) => (
              <li key={s.number} className="bg-white p-8">
                <p className="text-3xl font-light text-accent">{s.number}</p>
                <p className="mt-6 text-lg">{s.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{s.summary}</p>
              </li>
            ))}
          </ol>

          <Link
            href={`/services/${next.slug}`}
            className="group mt-24 flex items-center justify-between gap-6 border-t border-line pt-10"
          >
            <span>
              <span className="eyebrow block text-muted">Next service</span>
              <span className="mt-3 block text-title font-light transition-colors group-hover:text-accent">
                {next.title}
              </span>
            </span>
            <ArrowUpRight
              aria-hidden="true"
              strokeWidth={1.25}
              className="size-10 shrink-0 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </section>

      <CtaBand
        title={`Let's talk about your ${service.title.toLowerCase()} needs.`}
        cta="Discuss Your Project"
        href={enquiryHref}
      />
    </>
  );
}

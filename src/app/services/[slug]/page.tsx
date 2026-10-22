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
      <PageHero title={service.title}>
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
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-line pt-10"
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

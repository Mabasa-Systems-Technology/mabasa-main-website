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
    openGraph: {
      title: `${service.title} | Blackroid`,
      description: service.short,
      url: `/services/${service.slug}`,
    },
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
          { "@type": "ListItem", position: 2, name: "Expertise", item: `${site.url}/services` },
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
            Contact Us
          </ButtonLink>
          <ButtonLink href="/services" variant="outline-light" arrow={false}>
            All expertise
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <h2 className="text-title font-light">Capabilities</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <ul className="border-t border-line-strong">
              {service.capabilities.map((c) => (
                <li key={c} className="border-b border-line-strong py-5 text-lg font-light text-ink">
                  {c}
                </li>
              ))}
            </ul>
            {service.related && (
              <Link
                href={service.related.href}
                className="group mt-10 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-accent"
              >
                {service.related.label}
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.75}
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            )}
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-20 lg:py-28">
        <div className="container-site">
          <Link
            href={`/services/${next.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-line-strong pt-10"
          >
            <span>
              <span className="eyebrow block text-muted">Next</span>
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

      <CtaBand title="Speak with Blackroid." cta="Contact Us" href={enquiryHref} />
    </>
  );
}

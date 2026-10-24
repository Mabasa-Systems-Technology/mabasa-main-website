import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServicesIndex } from "@/components/ServicesIndex";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { services } from "@/lib/services";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business-focused technology services from Blackroid: custom software, AI and automation, cloud, data, systems integration and technology consulting.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Six ways we help your business run better." compact />

      <section className="bg-white pb-24 lg:pt-24 lg:pb-36">
        <div className="container-site lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-3">
            <ServicesIndex items={services.map(({ slug, number, title }) => ({ slug, number, title }))} />
          </div>

          <div className="space-y-24 pt-12 lg:col-span-9 lg:space-y-36 lg:pt-0">
            {services.map((s, i) => (
              <article key={s.slug} id={s.slug} className="scroll-mt-40 lg:scroll-mt-32">
                <Reveal>
                  <Link
                    href={`/services/${s.slug}`}
                    className={cn(
                      "group relative block aspect-[16/10] overflow-hidden bg-navy-900",
                      i % 2 === 0 ? "rounded-[4px] rounded-tr-[56px]" : "rounded-[4px] rounded-tl-[56px]",
                    )}
                  >
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover transition-transform duration-[1.4s] ease-out-expo group-hover:scale-[1.03]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent"
                    />
                    <span className="absolute bottom-6 left-6 font-mono text-sm text-white lg:bottom-8 lg:left-8">
                      {s.number} / 0{services.length}
                    </span>
                  </Link>
                </Reveal>

                <div className="mt-10 grid gap-10 lg:grid-cols-9 lg:gap-12">
                  <Reveal className="lg:col-span-5">
                    <h2 className="text-headline font-light text-balance">{s.title}</h2>
                    <p className="mt-6 text-xl leading-relaxed text-ink-soft">{s.plain}</p>
                    <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={`/services/${s.slug}`} variant="outline-dark">
                        How it works
                      </ButtonLink>
                      <Link
                        href={`/contact?service=${encodeURIComponent(s.title)}`}
                        className="group inline-flex h-12 items-center gap-2 px-2 text-[0.9375rem] font-medium text-accent"
                      >
                        Start this project
                        <ArrowUpRight
                          aria-hidden="true"
                          strokeWidth={1.75}
                          className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </Link>
                    </div>
                  </Reveal>

                  <Reveal delay={0.1} className="lg:col-span-4">
                    <h3 className="text-sm font-medium text-muted">What we do</h3>
                    <ul className="mt-4 border-t border-line">
                      {s.capabilities.slice(0, 4).map((c) => (
                        <li key={c} className="border-b border-line py-3.5 text-[0.9375rem] text-ink">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" />
    </>
  );
}

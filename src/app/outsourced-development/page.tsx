import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Eye, ListChecks, Plus, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { unsplash } from "@/lib/site";
import teamsHero from "../../../public/images/dedicated-teams.webp";

export const metadata: Metadata = {
  title: "Outsourced Development",
  description:
    "Outsourced development from Blackroid, part of Engineering & Implementation, delivered from South Africa, Pakistan and the UK.",
  alternates: { canonical: "/outsourced-development" },
};

const hubs = [
  {
    country: "South Africa",
    line: "Direction, design and delivery oversight.",
    time: "SAST, UTC+2",
    image: unsplash("photo-1580060839134-75a5edca2e99"),
    alt: "Aerial view of Cape Town with the mountain behind it",
  },
  {
    country: "Pakistan",
    line: "Engineering, testing and support.",
    time: "PKT, UTC+5",
    image: unsplash("photo-1759323050124-eb669cec0b72"),
    alt: "Aerial view of a coastal city in Pakistan",
  },
  {
    country: "United Kingdom",
    line: "Client engagement in the UK.",
    time: "UK time, UTC+0 / +1",
    image: unsplash("photo-1549483249-f0b359d1e289"),
    alt: "The London skyline and the River Thames",
  },
];

const benefits = [
  { icon: Users, title: "Specialists, not headcount" },
  { icon: ListChecks, title: "Structured delivery" },
  { icon: Eye, title: "Technical oversight" },
  { icon: Clock, title: "Overlapping hours" },
];

const faqs = [
  {
    q: "Do we keep control of delivery?",
    a: "Yes. You set priorities and approve work before release.",
  },
  {
    q: "Is this staff augmentation?",
    a: "It can include embedded capacity, but engagements are built around an outcome, with oversight.",
  },
  {
    q: "How is it priced?",
    a: "After a short call we propose the team, plan and terms.",
  },
];

export default function OutsourcedDevelopmentPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const enquiry = "/outsourced-development/proposal";

  return (
    <>
      <JsonLd data={faqLd} />
      <PageHero
        title="Outsourced Development."
        lead={
          <>
            Part of{" "}
            <Link href="/services/engineering-and-implementation" className="underline underline-offset-4">
              Engineering &amp; Implementation
            </Link>
            .
          </>
        }
        background={
          <>
            <Image
              src={teamsHero}
              alt=""
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/60 to-navy-950/40" />
          </>
        }
      >
        <div className="mt-12">
          <ButtonLink href={enquiry} variant="light">
            Discuss a team engagement
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">Three hubs. One accountable team.</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
            {hubs.map((h, i) => (
              <Reveal key={h.country} delay={i * 0.1} className="h-full">
                <article className="overflow-hidden rounded-[4px] bg-paper">
                  <div className="relative aspect-[16/9] bg-navy-900">
                    <Image
                      src={h.image}
                      alt={h.alt}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <h3 className="text-[2rem] font-light tracking-tight lg:text-[2.25rem]">{h.country}</h3>
                    <p className="mt-3 text-lg text-ink-soft">{h.line}</p>
                    <p className="mt-6 text-sm text-muted">{h.time}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page offer over a photo */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <Image
          src={unsplash("photo-1584169417032-d34e8d805e8b")}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-950/75" />
        <div className="container-site py-24 lg:py-32">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">Tell us what you need. We will propose the team.</h2>
            <ButtonLink href={enquiry} variant="light" className="mt-10">
              Request a team proposal
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">What you get.</h2>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.08} className="h-full">
                <article className="h-full bg-white p-8 lg:p-10">
                  <b.icon aria-hidden="true" strokeWidth={1.25} className="size-8 text-accent" />
                  <h3 className="mt-10 text-2xl font-light tracking-tight">{b.title}</h3>
                </article>
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

      <CtaBand title="Ready to extend your team?" cta="Request a team proposal" href={enquiry} />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { CalendarCheck, Clock, Plus, UserCheck, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { unsplash } from "@/lib/site";
import teamsHero from "../../../public/images/dedicated-teams.webp";

export const metadata: Metadata = {
  title: "Outsource Your Team",
  description:
    "Skip recruitment. Blackroid provides an experienced team accountable for delivering your solution on time, from South Africa, Pakistan and the UK.",
  alternates: { canonical: "/outsourced-development" },
};

const pains = [
  { title: "Recruitment takes months." },
  { title: "Engineers who do not perform." },
  { title: "Deadlines that keep slipping." },
];

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
  {
    icon: Users,
    title: "A complete team",
    text: "Engineers, architects, testers and a delivery lead, working as one.",
  },
  { icon: CalendarCheck, title: "Delivery on time", text: "A plan, milestones and regular reporting." },
  { icon: UserCheck, title: "One accountable lead", text: "A single point of contact for the outcome." },
  { icon: Clock, title: "No recruitment", text: "No hiring, onboarding or management overhead." },
];

const faqs = [
  {
    q: "Do we have to manage the engineers?",
    a: "No. A Blackroid delivery lead runs the team. You set priorities and approve the work.",
  },
  {
    q: "What if the team underperforms?",
    a: "Progress is reviewed against agreed milestones, and the team is adjusted when needed.",
  },
  {
    q: "How is it priced?",
    a: "After a short call we propose the team, the plan and the terms.",
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
        title="Stop recruiting. Start delivering."
        lead="An experienced team, accountable for your solution and your deadline."
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
            Get a team proposal
          </ButtonLink>
        </div>
      </PageHero>

      <section className="bg-paper py-24 lg:py-32">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">Sound familiar?</h2>
          </Reveal>
          <ul className="mt-12 grid gap-8 sm:grid-cols-3 lg:mt-16">
            {pains.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.08}>
                  <p className="border-t border-ink pt-6 text-2xl font-light tracking-tight lg:text-3xl">{p.title}</p>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.2}>
            <p className="mt-14 max-w-3xl text-title font-light text-balance text-accent">
              Outsource the whole team instead. We build it, run it and answer for the result.
            </p>
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
                  <p className="mt-2 text-ink-soft">{b.text}</p>
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
            <h2 className="text-headline font-light text-balance">
              Tell us what you need built. We will propose the team and the timeline.
            </h2>
            <ButtonLink href={enquiry} variant="light" className="mt-10">
              Get a team proposal
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">One team. Three hubs.</h2>
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
                      sizes="(min-width: 1024px) 33vw, 100vw"
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

      <CtaBand title="Ready to stop recruiting?" cta="Get a team proposal" href={enquiry} />
    </>
  );
}

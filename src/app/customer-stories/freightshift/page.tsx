import type { Metadata } from "next";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { freightshiftStory as story } from "@/lib/stories";
import teamFloor from "../../../../public/images/stories/freightshift-team-floor.webp";
import siteVisit from "../../../../public/images/stories/freightshift-site-visit.webp";
import atTheDoor from "../../../../public/images/stories/freightshift-at-the-door.webp";
import teamWarehouse from "../../../../public/images/stories/freightshift-team-warehouse.webp";
import ceoForklift from "../../../../public/images/stories/freightshift-ceo-forklift.webp";
import ceoPortrait from "../../../../public/images/stories/freightshift-ceo-portrait.webp";

export const metadata: Metadata = {
  title: story.title,
  description:
    "How Blackroid approaches logistics transformation as a business problem first, for a China to South Africa freight forwarder.",
  alternates: { canonical: story.href },
};

function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-site grid gap-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-light text-balance lg:text-4xl">{heading}</h2>
        </Reveal>
        <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7">
          {children}
        </Reveal>
      </div>
    </section>
  );
}

function Photo({
  src,
  alt,
  className,
  sizes,
}: {
  src: ComponentProps<typeof Image>["src"];
  alt: string;
  className?: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[4px] bg-paper ${className ?? ""}`}>
      <Image src={src} alt={alt} fill sizes={sizes} placeholder="blur" className="object-cover" />
    </div>
  );
}

export default function FreightShiftStoryPage() {
  return (
    <>
      <header className="bg-white pt-36 pb-12 lg:pt-44 lg:pb-16">
        <div className="container-site">
          <p className="rise text-sm font-medium tracking-wide text-accent uppercase">Customer story</p>
          <h1 className="rise mt-5 max-w-4xl text-headline font-light text-balance">{story.title}</h1>
          <p className="rise mt-8 text-muted">
            {story.client} | {story.sector} | {story.region}
            <span className="mx-3" aria-hidden="true" />
            <time dateTime={story.dateISO}>{story.date}</time>
          </p>
        </div>
      </header>

      <div className="container-site">
        <Reveal>
          <Photo
            src={teamFloor}
            alt="The Blackroid team with FreightShift's CEO on the warehouse floor"
            sizes="100vw"
            className="aspect-[16/9] lg:aspect-[21/9]"
          />
        </Reveal>
      </div>

      <section className="bg-white pt-16 lg:pt-24">
        <div className="container-site">
          <Reveal className="max-w-3xl space-y-6 text-xl leading-relaxed font-light text-ink lg:text-2xl">
            <p>
              In international freight forwarding, moving cargo is only part of the challenge. Moving information
              accurately between suppliers, logistics partners and customers is equally important.
            </p>
            <p>
              FreightShift International Logistics connects businesses in South Africa with suppliers in China,
              coordinating freight transportation, customs clearance and final delivery.
            </p>
          </Reveal>
        </div>
      </section>

      <Section heading="The complexity behind every shipment">
        <p>A single shipment involves multiple organisations, documents, decisions and operational handovers.</p>
        <p>
          As logistics businesses grow, maintaining visibility and consistency across these activities becomes
          increasingly important. Information fragmented across communication channels and operational processes can
          make coordination more demanding.
        </p>
        <p>The challenge extends beyond adopting new software. It requires examining how the business operates.</p>
      </Section>

      <div className="container-site">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          <Photo
            src={siteVisit}
            alt="Discussing the operation outside the FreightShift warehouse"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/4]"
          />
          <Photo
            src={atTheDoor}
            alt="The team at the FreightShift warehouse entrance"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/4]"
          />
        </Reveal>
      </div>

      <Section heading="Looking beyond individual systems">
        <p>For Blackroid, the opportunity lies in approaching logistics transformation as a business problem first.</p>
        <p>
          That means understanding how FreightShift coordinates shipments, manages operational information and
          communicates across its network of partners.
        </p>
        <p>
          The areas for potential improvement include connected operational records, more structured workflows, better
          information visibility and greater consistency across the shipment lifecycle.
        </p>
        <p>
          Rather than treating each challenge as an isolated technology project, the objective is to establish a
          coherent approach to operational improvement, supported by systems integration, engineering and automation
          where appropriate.
        </p>
      </Section>

      <div className="container-site">
        <Reveal>
          <Photo
            src={teamWarehouse}
            alt="The Blackroid and FreightShift teams in the warehouse"
            sizes="100vw"
            className="aspect-[4/3] lg:aspect-[21/9]"
          />
        </Reveal>
      </div>

      <Section heading="The direction ahead">
        <p>
          For FreightShift, a more connected operating environment could strengthen coordination between teams and
          partners while supporting future growth along the China–South Africa trade corridor.
        </p>
        <p>
          The broader ambition is straightforward: reduce operational complexity without compromising the flexibility
          international logistics demands.
        </p>
      </Section>

      <div className="container-site">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:gap-6">
          <Photo
            src={ceoForklift}
            alt="Jack Maluleke, CEO and Founder of FreightShift, at the warehouse"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2]"
          />
          <Photo
            src={ceoPortrait}
            alt="Jack Maluleke smiling in front of the FreightShift warehouse"
            sizes="(min-width: 640px) 50vw, 100vw"
            className="aspect-[3/2]"
          />
        </Reveal>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal className="flex flex-col gap-6 rounded-[4px] border border-line bg-paper p-8 sm:flex-row sm:items-center sm:justify-between lg:p-12">
            <p className="text-lg text-ink">
              <span className="block text-2xl font-light">FreightShift International Logistics</span>
              <span className="mt-1 block text-muted">China–South Africa Trade Corridor</span>
            </p>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink underline-offset-4 hover:underline"
            >
              Visit FreightShift
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

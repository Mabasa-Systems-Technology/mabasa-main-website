import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { Photo, Section } from "@/components/story/StoryParts";
import { Reveal } from "@/components/ui/Reveal";
import { techxmStory as story } from "@/lib/stories";
import office from "../../../../public/images/stories/techxm-office.webp";
import discussion from "../../../../public/images/stories/techxm-discussion.webp";
import brian from "../../../../public/images/stories/techxm-brian.webp";

export const metadata: Metadata = {
  title: story.title,
  description:
    "How specialist engineering from Blackroid helps TechXM take on more complex projects without growing its permanent cost base.",
  alternates: { canonical: story.href },
};

export default function TechXmStoryPage() {
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
            src={office}
            alt="Engineers reviewing a project together at their screens"
            sizes="100vw"
            className="aspect-[3/2] lg:aspect-[21/9]"
          />
        </Reveal>
      </div>

      <section className="bg-white pt-16 lg:pt-24">
        <div className="container-site">
          <Reveal className="max-w-3xl space-y-6 text-xl leading-relaxed font-light text-ink lg:text-2xl">
            <p>
              As software companies grow, their biggest constraint is not always demand. It is having the right
              technical expertise available when increasingly complex projects arrive.
            </p>
            <p>
              TechXM develops websites, mobile applications and custom software for businesses across South Africa. But
              delivering larger technology engagements can require specialist capabilities beyond a company&apos;s core
              development team.
            </p>
          </Reveal>
        </div>
      </section>

      <Section heading="The challenge: Growing without increasing fixed costs">
        <p>
          Hiring permanent specialists for every technical requirement can be expensive, particularly when project
          demands fluctuate.
        </p>
        <p>
          For companies like TechXM, this creates a difficult balance: pursuing more sophisticated client engagements
          while maintaining delivery quality, controlling overhead and keeping existing projects on track.
        </p>
      </Section>

      <div className="container-site">
        <Reveal>
          <Photo
            src={discussion}
            alt="A team discussing a software project"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="mx-auto aspect-[3/2] max-w-4xl"
          />
        </Reveal>
      </div>

      <Section heading="Extending capability, not replacing it">
        <p>Blackroid&apos;s specialist engineering model offers a way to address that constraint.</p>
        <p>
          By providing access to advanced software engineering, systems architecture, AI integration and technical
          delivery expertise, Blackroid can support TechXM on projects that require additional depth or capacity.
        </p>
        <p>
          TechXM maintains its client relationships and core development operations, while Blackroid contributes
          targeted expertise where needed.
        </p>
        <p>
          The commercial value is clear: the ability to pursue more complex work, address specialist engineering
          requirements and avoid committing to permanent headcount for temporary project needs.
        </p>
      </Section>

      <Section heading="A model built for sustainable growth">
        <p>
          For TechXM, the opportunity is to expand the range and complexity of projects it can undertake without
          expanding its permanent cost base at the same rate.
        </p>
        <p>
          For Blackroid, it demonstrates how specialist engineering partnerships can help established technology teams
          extend their capabilities while maintaining ownership of their clients and delivery.
        </p>
      </Section>

      <div className="container-site">
        <Reveal>
          <Photo
            src={brian}
            alt="Brian Motsweni, CTO of TechXM, with a colleague at AWS Summit 2026"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="mx-auto aspect-[5/4] max-w-3xl"
          />
        </Reveal>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="container-site">
          <Reveal className="rounded-[4px] border border-line bg-paper p-8 lg:p-12">
            <p className="text-sm font-medium tracking-wide text-accent uppercase">About TechXM</p>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-soft">
              TechXM is a South African software development company specialising in web applications, mobile
              development, custom software and digital platforms.
            </p>
            <a
              href={story.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-ink underline-offset-4 hover:underline"
            >
              techxm.co.za
              <ArrowUpRight aria-hidden="true" strokeWidth={1.5} className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

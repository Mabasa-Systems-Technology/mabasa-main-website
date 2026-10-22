import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/components/home/WhyMst";
import { unsplash } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "MST is a South African technology consulting and engineering company. Learn about our purpose, engineering philosophy and approach to working with growing businesses.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Start with the problem",
    text: "We begin with the business outcome, not a preferred technology. Sometimes the right answer is less software, not more.",
  },
  {
    title: "Simplicity is a feature",
    text: "Simple systems are easier to operate, secure and change. We avoid complexity that does not earn its place.",
  },
  {
    title: "Build for the people who maintain it",
    text: "Clear code, documentation and sound architecture mean your systems remain understandable long after launch.",
  },
  {
    title: "Security and privacy by design",
    text: "Access control, data protection and POPIA obligations are considered from the first design conversation.",
  },
  {
    title: "Honest estimates",
    text: "We would rather give you a realistic assessment than an attractive one. Trade-offs are surfaced early and openly.",
  },
  {
    title: "Measure what matters",
    text: "We define success in operational terms — time saved, errors reduced, decisions improved — and design towards it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Established engineering capability, made accessible to growing businesses."
        lead="MST is a South African technology consulting and software engineering company. We help startups, SMEs and growing organisations design, build, integrate and maintain the systems they depend on."
      />

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-headline font-light text-balance">Technology that solves real business problems.</h2>
          </Reveal>
          <Reveal
            delay={0.1}
            className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-12"
          >
            <p>
              Growing businesses face the same technical challenges as large enterprises — disconnected systems, manual
              processes, unreliable data, and infrastructure that struggles to keep up — but often without access to the
              engineering expertise to address them.
            </p>
            <p>
              MST exists to close that gap. We provide the engineering capability of an established technology
              consultancy, with the accessibility, flexibility and direct engagement that smaller and growing
              organisations need.
            </p>
            <p>
              We are a consulting and delivery company, not a software product vendor. We don&apos;t ask you to fit your
              business around a platform we sell. You bring the business challenge; we bring the engineering expertise
              to solve it.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-navy-950">
        <div className="relative aspect-[16/9] max-h-[640px] w-full sm:aspect-[21/9]">
          <Image
            src={unsplash("photo-1636706519609-988babca3dd5")}
            alt="Aerial view of the Johannesburg skyline"
            fill
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"
          />
          <div className="container-site absolute inset-x-0 bottom-0 pb-10">
            <p className="max-w-xl text-xl font-light text-white lg:text-2xl">
              Based in South Africa, working with businesses that are building what comes next.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 lg:py-36">
        <div className="container-site">
          <Reveal className="max-w-3xl">
            <h2 className="text-headline font-light text-balance">The principles behind our work.</h2>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08} className="border-t border-ink pt-6">
                <p className="font-mono text-xs text-accent">0{i + 1}</p>
                <h3 className="mt-5 text-2xl font-light tracking-tight">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-36">
        <div className="container-site grid gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-headline font-light text-balance">A different approach to technology consulting.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              We combine engineering discipline with a practical understanding of how businesses operate.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06} className="h-full">
                <div className="h-full bg-white p-8 lg:p-10">
                  <d.icon aria-hidden="true" strokeWidth={1.25} className="size-8 text-accent" />
                  <h3 className="mt-12 text-xl font-light">{d.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

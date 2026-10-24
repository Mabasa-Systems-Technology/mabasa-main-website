import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ProposalForm } from "@/components/ProposalForm";
import { Reveal } from "@/components/ui/Reveal";
import { site, unsplash } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a team proposal",
  description:
    "Tell Blackroid what capability you need to add and for how long. We will propose the team, the structure and the terms.",
  alternates: { canonical: "/outsourced-development/proposal" },
};

const next = [
  { title: "We read your request", text: "We look at the capability, duration and context." },
  { title: "We talk", text: "A short call to confirm the details." },
  { title: "You get a proposal", text: "The team, the structure and the terms." },
];

export default function ProposalPage() {
  return (
    <>
      <PageHero
        title="Discuss a team engagement."
        compact
        background={
          <>
            <Image
              src={unsplash("photo-1769740333462-9a63bfa914bc")}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/60 to-navy-950/40" />
          </>
        }
      />

      <section className="relative z-10 bg-paper pb-24 lg:pb-32">
        <div className="container-site mt-12 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-14">
          <Reveal delay={0.05} className="lg:col-span-7">
            <ProposalForm />
          </Reveal>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-xl font-light tracking-tight text-ink">What happens next</h2>
              <ol className="mt-6 border-t border-line-strong">
                {next.map((s, i) => (
                  <li key={s.title} className="flex gap-5 border-b border-line-strong py-5">
                    <span className="font-mono text-xs leading-7 text-accent">0{i + 1}</span>
                    <div>
                      <h3 className="text-ink">{s.title}</h3>
                      <p className="mt-1 text-sm text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-8 text-sm text-muted">
                Prefer email?{" "}
                <a href={`mailto:${site.publicEmail}`} className="text-ink underline underline-offset-4">
                  {site.publicEmail}
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

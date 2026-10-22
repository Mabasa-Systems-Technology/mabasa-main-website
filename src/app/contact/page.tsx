import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell MST about your project or the business challenge you're trying to solve. We'll help you explore the right technical approach.",
  alternates: { canonical: "/contact" },
};

const nextSteps = [
  { title: "We review your enquiry", text: "An engineer reads what you've shared and considers how we could help." },
  {
    title: "An initial conversation",
    text: "If there's a fit, we arrange a short call to understand your context and goals.",
  },
  {
    title: "A recommended approach",
    text: "We outline practical next steps — often a focused Discover stage — with clear scope and cost.",
  },
];

type Props = { searchParams: Promise<{ service?: string | string[] }> };

export default async function ContactPage({ searchParams }: Props) {
  const { service } = await searchParams;
  const initialService = Array.isArray(service) ? service[0] : service;

  return (
    <>
      <section className="hero-field relative isolate overflow-hidden text-white">
        <div className="container-site pt-40 pb-40 lg:pt-48 lg:pb-56">
          <div className="rise">
            <h1 className="max-w-4xl text-display font-light text-balance">Tell us what you&apos;re building.</h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/75 lg:text-xl">
              Share the challenge you&apos;re trying to solve or the system you need. We&apos;ll help you explore the
              right technical approach — no obligation.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-paper pb-24 lg:pb-36">
        <div className="container-site -mt-24 grid gap-14 lg:-mt-36 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <ContactForm initialService={initialService} publicEmail={site.publicEmail || undefined} />
          </Reveal>

          <aside className="lg:col-span-4 lg:col-start-9 lg:pt-44">
            <Reveal delay={0.2}>
              <h2 className="eyebrow text-accent">What happens next</h2>
              <ol className="mt-8 space-y-8">
                {nextSteps.map((s, i) => (
                  <li key={s.title} className="grid grid-cols-[auto_1fr] gap-5">
                    <span className="flex size-9 items-center justify-center rounded-full border border-accent/30 font-mono text-xs text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="text-lg">{s.title}</h3>
                      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-12 border-t border-line-strong pt-8 text-[0.9375rem] leading-relaxed text-muted">
                <p>
                  Prefer to share details under NDA? Mention it in your message and we&apos;ll arrange one before any
                  detailed discussion.
                </p>
                {site.publicEmail && (
                  <p className="mt-4">
                    Email:{" "}
                    <a href={`mailto:${site.publicEmail}`} className="text-ink underline underline-offset-4">
                      {site.publicEmail}
                    </a>
                  </p>
                )}
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}

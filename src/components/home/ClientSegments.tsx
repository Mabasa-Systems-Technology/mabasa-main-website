import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { ButtonLink } from "../ui/Button";
import { cn } from "@/lib/cn";

const segments = [
  {
    title: "Startups",
    text: "Build and launch reliable digital products with practical technical guidance.",
    points: ["MVP scoping and architecture", "Product engineering", "Technical advice for founders"],
    tone: "bg-[radial-gradient(120%_90%_at_100%_0%,#16305f_0%,#08152e_60%)]",
  },
  {
    title: "Small & Medium Enterprises",
    text: "Modernise operations, integrate systems, and automate repetitive processes.",
    points: ["Process automation", "System integration", "Internal platforms"],
    tone: "bg-[radial-gradient(120%_90%_at_100%_0%,#2c5cf0_0%,#16305f_45%,#08152e_100%)]",
  },
  {
    title: "Growing Organisations",
    text: "Scale infrastructure, improve existing platforms, and introduce advanced engineering capabilities.",
    points: ["Cloud and reliability", "Data platforms", "AI capabilities"],
    tone: "bg-[radial-gradient(120%_90%_at_100%_0%,#9db8ff_0%,#2c5cf0_35%,#0d1f42_100%)]",
  },
];

export function ClientSegments() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site">
        <SectionHeading align="center" title="Built for businesses at every stage of growth." />
        <div className="mt-16 grid gap-5 lg:mt-24 lg:grid-cols-3">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1} className="h-full">
              <article
                className={cn(
                  "group relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-[4px] p-8 text-white lg:p-10",
                  s.tone,
                )}
              >
                <p className="relative font-mono text-xs text-white/50">0{i + 1}</p>
                <h3 className="relative mt-auto pt-16 text-[2.25rem] leading-[1.08] font-light tracking-[-0.025em] text-balance">
                  {s.title}
                </h3>
                <p className="relative mt-5 leading-relaxed text-white/75">{s.text}</p>
                <ul className="relative mt-6 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/80">
                      {p}
                    </li>
                  ))}
                </ul>
                <ButtonLink href="/contact" variant="outline-light" className="relative mt-8 h-11 self-start px-5">
                  Talk to us
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

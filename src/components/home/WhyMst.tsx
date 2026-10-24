import { Blocks, Compass, MessagesSquare, TrendingUp } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export const differentiators = [
  {
    icon: Blocks,
    title: "Collective Expertise",
    text: "Specialists across engineering, AI, data and business, assembled around each challenge.",
  },
  {
    icon: Compass,
    title: "Business Context",
    text: "Technical decisions guided by the organisation's real operating needs.",
  },
  {
    icon: MessagesSquare,
    title: "Accountable Execution",
    text: "One team taking responsibility from problem definition through implementation.",
  },
  {
    icon: TrendingUp,
    title: "Lasting Partnerships",
    text: "Relationships built to continue beyond a single project.",
  },
];

export function WhyMst() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading title="A different approach to organisational challenges." />
          </div>
        </div>
        <div className="grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08} className="h-full">
              <article className="group flex h-full flex-col bg-white p-8 transition-colors duration-500 hover:bg-accent-wash/60 lg:p-10">
                <d.icon
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="size-8 text-accent transition-transform duration-500 ease-out-expo group-hover:-translate-y-1"
                />
                <h3 className="mt-14 text-2xl font-light tracking-tight">{d.title}</h3>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

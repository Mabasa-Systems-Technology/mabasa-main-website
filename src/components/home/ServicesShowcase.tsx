import Link from "next/link";
import { ArrowUpRight, BarChart3, Cloud, Code2, Compass, Plug, Workflow, type LucideIcon } from "lucide-react";
import { services } from "@/lib/services";
import { SectionHeading } from "../ui/SectionHeading";
import { TextLink } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

const icons: Record<string, LucideIcon> = {
  "custom-software-development": Code2,
  "ai-and-automation": Workflow,
  "cloud-and-infrastructure": Cloud,
  "data-engineering-and-analytics": BarChart3,
  "systems-integration": Plug,
  "technology-consulting": Compass,
};

export function ServicesShowcase() {
  return (
    <section id="services" className="bg-paper py-28 lg:py-40">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading title="What we build." />
          <TextLink href="/services" className="shrink-0">
            All services
          </TextLink>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.slug] ?? Code2;
            return (
              <li key={s.slug} className="bg-white">
                <Reveal delay={(i % 3) * 0.06} className="h-full">
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex h-full min-h-[300px] flex-col p-8 transition-colors duration-500 ease-out-expo hover:bg-navy-900 lg:min-h-[340px] lg:p-10"
                  >
                    <div className="flex items-start justify-between">
                      {/* Square icon plate echoes the square in the Mabasa mark. */}
                      <span className="flex size-12 items-center justify-center bg-accent text-white transition-colors duration-500 group-hover:bg-white group-hover:text-accent">
                        <Icon aria-hidden="true" strokeWidth={1.5} className="size-6" />
                      </span>
                      <span className="font-mono text-xs text-muted transition-colors duration-500 group-hover:text-white/50">
                        {s.number}
                      </span>
                    </div>

                    <h3 className="mt-auto pt-12 text-2xl font-light tracking-tight text-ink transition-colors duration-500 group-hover:text-white">
                      {s.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/75">
                      {s.plain}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-500 group-hover:text-accent-soft">
                      Learn more
                      <ArrowUpRight
                        aria-hidden="true"
                        strokeWidth={1.75}
                        className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

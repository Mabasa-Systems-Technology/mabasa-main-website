import { clients, testimonials } from "@/lib/clients";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Clients() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site">
        <SectionHeading align="center" title="Businesses we've worked with." />

        <Reveal className="mt-16 lg:mt-20">
          <ul className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-3">
            {clients.map((c) => (
              <li
                key={c.name}
                className="flex min-h-32 items-center justify-center border-r border-b border-line px-6 py-10 text-center lg:min-h-40"
              >
                <span className="text-lg font-medium tracking-tight text-ink/70 transition-colors duration-300 hover:text-ink lg:text-xl">
                  {c.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        {testimonials.length > 0 && (
          <div className="mt-20 grid gap-5 lg:mt-28 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-[4px] border border-line bg-paper p-8 lg:p-10">
                  <blockquote className="text-xl leading-relaxed font-light text-ink lg:text-2xl">
                    &ldquo;{t.feedback.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6 text-sm">
                    <span aria-hidden="true" className="size-2 bg-accent" />
                    <span>
                      <span className="block font-medium text-ink">{t.feedback.person}</span>
                      <span className="block text-muted">
                        {t.feedback.role}, {t.name}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

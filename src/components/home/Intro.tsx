import { Reveal } from "../ui/Reveal";
import { TextLink } from "../ui/Button";

const pillars = [
  { label: "Design", text: "Architecture shaped around how your business actually operates." },
  { label: "Build", text: "Software engineered for reliability, security and change." },
  { label: "Integrate", text: "Systems connected so information flows without re-capture." },
  { label: "Maintain", text: "Ongoing support so what we build keeps delivering value." },
];

export function Intro() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-headline font-light text-balance">Engineering better businesses.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-14">
            <p className="text-xl leading-relaxed text-pretty text-ink-soft lg:text-[1.375rem] lg:leading-[1.6]">
              Technology should solve problems, simplify operations, and create opportunities for growth. At MST, we
              work closely with businesses to turn complex challenges into practical, reliable technology solutions.
            </p>
            <p className="mt-6 leading-relaxed text-muted">
              We bring the engineering capability of an established consultancy, with the accessibility, flexibility and
              direct engagement that growing businesses need. You bring the business challenge; we bring the expertise
              to address it.
            </p>
            <TextLink href="/about" className="mt-10">
              About MST
            </TextLink>
          </Reveal>
        </div>

        <div className="mt-24 grid border-t border-line sm:grid-cols-2 lg:mt-32 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal
              key={p.label}
              delay={i * 0.08}
              className="border-b border-line py-8 sm:pr-8 lg:border-b-0 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-6 text-2xl font-light tracking-tight">{p.label}</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

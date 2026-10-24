import { Reveal } from "../ui/Reveal";
import { TextLink } from "../ui/Button";

export function Intro() {
  return (
    <section className="bg-black py-28 lg:py-40">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-headline font-light text-balance">Beyond Technology. Focused on Business.</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <p className="text-xl leading-relaxed text-pretty text-ink-soft lg:text-[1.375rem] lg:leading-[1.6]">
            Every organisation faces challenges that technology alone cannot solve.
          </p>
          <p className="mt-6 leading-relaxed text-muted">
            Blackroid approaches these challenges by understanding how businesses operate, identifying opportunities for
            improvement, and engineering solutions that address underlying needs.
          </p>
          <p className="mt-6 leading-relaxed text-muted">
            From modernising critical systems to introducing intelligent processes, our work is guided by business
            objectives rather than technology trends.
          </p>
          <TextLink href="/about" className="mt-10">
            About Blackroid
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}

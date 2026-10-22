import { Reveal } from "../ui/Reveal";
import { TextLink } from "../ui/Button";

export function Intro() {
  return (
    <section className="bg-white py-28 lg:py-40">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-headline font-light text-balance">Engineering better businesses.</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7 lg:pt-4">
          <p className="text-xl leading-relaxed text-pretty text-ink-soft lg:text-[1.375rem] lg:leading-[1.6]">
            We turn complex business challenges into practical, reliable technology.
          </p>
          <TextLink href="/about" className="mt-10">
            About Mabasa Technologies
          </TextLink>
        </Reveal>
      </div>
    </section>
  );
}

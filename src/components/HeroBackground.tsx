import Image from "next/image";
import heroBg from "../../public/images/hero-bg.webp";

/** Shared hero backdrop: the brand gradient image with a light scrim for text legibility. */
export function HeroBackground() {
  return (
    <>
      <Image
        src={heroBg}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgb(0_12_31/0.6)_0%,rgb(0_12_31/0.25)_45%,transparent_75%)]" />
    </>
  );
}

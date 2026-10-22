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
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_0%_100%,rgb(5_13_31/0.55)_0%,rgb(5_13_31/0.2)_55%,transparent_80%)]" />
    </>
  );
}

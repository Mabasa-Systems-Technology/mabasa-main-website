import Image from "next/image";
import Link from "next/link";
import { freightshiftStory as story } from "@/lib/stories";
import { Reveal } from "../ui/Reveal";
import thumbnail from "../../../public/images/stories/freightshift-ceo.webp";

/** Landing-page teaser for a customer story: image, then title and date below it. */
export function CustomerStory() {
  return (
    <section aria-labelledby="story-heading" className="bg-white pb-16 lg:pb-24">
      <div className="container-site">
        <Reveal>
          <h2 id="story-heading" className="text-headline font-light text-balance">
            Customer stories.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <Link href={story.href} className="group block">
            {/* The photo is 3:2, so it is shown whole, never cropped. */}
            <div className="relative aspect-[3/2] overflow-hidden rounded-[4px] bg-paper">
              <Image
                src={thumbnail}
                alt="Jack Maluleke, CEO and Founder of FreightShift"
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder="blur"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <h3 className="mt-6 text-xl leading-snug font-light text-balance transition-colors group-hover:text-accent lg:text-2xl">
              {story.title}
            </h3>
            <time dateTime={story.dateISO} className="mt-3 block text-sm text-muted">
              {story.date}
            </time>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

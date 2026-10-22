import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero title="This page could not be found.">
      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/" variant="light">
          Back to home
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Contact us
        </ButtonLink>
      </div>
    </PageHero>
  );
}

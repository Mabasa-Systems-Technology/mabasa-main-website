import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServicesList } from "@/components/ServicesList";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Blackroid practices: strategy and advisory, technology transformation, AI and data, operations and performance, engineering and implementation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Expertise." compact />

      <section className="bg-white py-16 lg:py-28">
        <div className="container-site">
          <ServicesList items={services} />
        </div>
      </section>

      <CtaBand />
    </>
  );
}

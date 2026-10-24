import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServicesList } from "@/components/ServicesList";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Business-focused technology services from Blackroid: custom software, AI and automation, cloud, data, systems integration and technology consulting.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Six ways we help your business run better." compact />

      <section className="bg-white py-16 lg:py-28">
        <div className="container-site">
          <ServicesList items={services} />
        </div>
      </section>

      <CtaBand title="Not sure which service you need?" />
    </>
  );
}

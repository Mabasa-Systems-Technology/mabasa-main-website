import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { CtaBand } from "@/components/CtaBand";
import { ServicesList } from "@/components/ServicesList";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Blackroid capabilities for complex organisations: enterprise software engineering, AI and automation, cloud, data, systems integration and technology advisory.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero title="Capabilities for complex organisations." compact />

      <section className="bg-white py-16 lg:py-28">
        <div className="container-site">
          <ServicesList items={services} />
        </div>
      </section>

      <CtaBand title="Not sure which capability fits?" />
    </>
  );
}

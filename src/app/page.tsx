import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ClientSegments } from "@/components/home/ClientSegments";
import { IndustryCarousel } from "@/components/home/IndustryCarousel";
import { ProcessStepper } from "@/components/home/ProcessStepper";
import { WhyMst } from "@/components/home/WhyMst";
import { SelectedWork } from "@/components/home/SelectedWork";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesShowcase />
      <ClientSegments />
      <IndustryCarousel />
      <ProcessStepper />
      <WhyMst />
      <SelectedWork />
      <CtaBand />
    </>
  );
}

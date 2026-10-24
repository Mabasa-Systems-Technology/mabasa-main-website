import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { ClientSegments } from "@/components/home/ClientSegments";
import { IndustryCarousel } from "@/components/home/IndustryCarousel";
import { WhyMst } from "@/components/home/WhyMst";
import { Clients } from "@/components/home/Clients";
import { HowWeWork } from "@/components/home/HowWeWork";
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
      <Clients />
      <WhyMst />
      <HowWeWork />
      <SelectedWork />
      <CtaBand />
    </>
  );
}

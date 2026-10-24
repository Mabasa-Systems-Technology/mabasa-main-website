import { Hero } from "@/components/home/Hero";
import { Intro } from "@/components/home/Intro";
import { ServicesShowcase } from "@/components/home/ServicesShowcase";
import { IndustryCarousel } from "@/components/home/IndustryCarousel";
import { WhyMst } from "@/components/home/WhyMst";
import { Clients } from "@/components/home/Clients";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesShowcase />
      <IndustryCarousel />
      <Clients />
      <WhyMst />
      <CtaBand />
    </>
  );
}

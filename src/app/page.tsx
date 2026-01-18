import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Solution } from "@/components/sections/Solution";
import { UseCases } from "@/components/sections/UseCases";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Solution />
      <HowItWorks />
      <UseCases />
      <FinalCTA />
      <Footer />
    </>
  );
}

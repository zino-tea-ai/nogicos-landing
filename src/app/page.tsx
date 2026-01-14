import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Comparison } from "@/components/sections/Comparison";
import { Features } from "@/components/sections/Features";
import { Solution } from "@/components/sections/Solution";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Comparison />
      <Features />
      <Solution />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </>
  );
}

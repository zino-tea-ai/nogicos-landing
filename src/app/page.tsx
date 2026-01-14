import { Navigation } from "@/components/ui/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Comparison } from "@/components/sections/Comparison";
import { SocialProof } from "@/components/sections/SocialProof";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Comparison />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  );
}

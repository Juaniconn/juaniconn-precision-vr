import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { DesignComfort } from "@/components/DesignComfort";
import { Kits } from "@/components/Kits";
import { Testimonials } from "@/components/Testimonials";
import { Shipping } from "@/components/Shipping";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <Features />
      <DesignComfort />
      <Kits />
      <Testimonials />
      <Shipping />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;

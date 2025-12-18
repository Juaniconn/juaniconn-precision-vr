import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Kits } from "@/components/Kits";
import { CustomSet } from "@/components/CustomSet";
import { FullMovement } from "@/components/FullMovement";
import { Warranty } from "@/components/Warranty";
import { TechSection } from "@/components/TechSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { WhyYouLoveIt } from "@/components/WhyYouLoveIt";
import { Testimonials } from "@/components/Testimonials";
import { Shipping } from "@/components/Shipping";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Kits />
      <CustomSet />
      <FullMovement />
      <Warranty />
      <TechSection />
      <ExperienceSection />
      <WhyYouLoveIt />
      <Testimonials />
      <Shipping />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;

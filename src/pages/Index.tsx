import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SolutionSection } from "@/components/SolutionSection";
import { Kits } from "@/components/Kits";
import { CustomSet } from "@/components/CustomSet";
import { TechSection } from "@/components/TechSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Testimonials } from "@/components/Testimonials";
import { Shipping } from "@/components/Shipping";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* 1️⃣ HERO SECTION - Neotix-style wide hero */}
      <Hero />
      
      {/* 2️⃣ THE BEEKONZ SOLUTION - Feature cards */}
      <SolutionSection />
      
      {/* 3️⃣ BEEKONZ PACKAGES - Pricing cards */}
      <Kits />
      
      {/* 4️⃣ CUSTOM SET SECTION - Two-column layout */}
      <CustomSet />
      
      {/* 5️⃣ TECHNOLOGY & CONNECTIVITY - Large image + tech benefits */}
      <TechSection />
      
      {/* 6️⃣ EXPERIENCE & TRACK RECORD - Metrics/counters */}
      <ExperienceSection />
      
      {/* 7️⃣ TESTIMONIALS - User reviews cards */}
      <Testimonials />
      
      {/* 8️⃣ SHIPPING & SUPPORT - Grid info blocks */}
      <Shipping />
      
      {/* 9️⃣ FAQ SECTION - Accordion style */}
      <FAQ />
      
      {/* 🔟 FINAL CTA SECTION - Conversion push */}
      <FinalCTA />
      
      <Footer />
    </main>
  );
};

export default Index;

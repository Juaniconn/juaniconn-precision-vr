import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { FaceTracking } from "@/components/FaceTracking";
import { SolutionSection } from "@/components/SolutionSection";
import { Kits } from "@/components/Kits";
import { CustomSet } from "@/components/CustomSet";
import { TechSection } from "@/components/TechSection";
import { IMUComparison } from "@/components/IMUComparison";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Shipping } from "@/components/Shipping";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { OrderTracking } from "@/components/OrderTracking";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* 1️⃣ HERO - Beekonz Face Tracking launch */}
      <Hero />

      {/* 2️⃣ FEATURES - Spec grid */}
      <Features />

      {/* 3️⃣ FACE TRACKING PRODUCT */}
      <FaceTracking />

      {/* 3️⃣ THE BEEKONZ SOLUTION - Feature cards */}
      <SolutionSection />

      {/* 4️⃣ BEEKONZ PACKAGES - Pricing cards */}
      <Kits />

      {/* 5️⃣ CUSTOM SET SECTION - Two-column layout */}
      <CustomSet />

      {/* 6️⃣ TECHNOLOGY & CONNECTIVITY */}
      <TechSection />

      {/* 7️⃣ IMU COMPARISON */}
      <IMUComparison />

      {/* 8️⃣ EXPERIENCE & TRACK RECORD */}
      <ExperienceSection />

      {/* 9️⃣ GALLERY */}
      <Gallery />

      {/* 🔟 TESTIMONIALS */}
      <Testimonials />

      {/* SHIPPING & SUPPORT */}
      <Shipping />

      {/* 🔟 FAQ */}
      <FAQ />

      {/* 1️⃣1️⃣ ORDER TRACKING */}
      <OrderTracking />

      {/* 1️⃣2️⃣ FINAL CTA */}
      <FinalCTA />

      <Footer />
    </main>
  );
};

export default Index;

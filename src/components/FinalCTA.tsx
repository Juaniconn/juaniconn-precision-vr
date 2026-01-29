import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import productBlackClose from "@/assets/product_blackclose.png";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Warm accent glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="absolute -inset-8 bg-secondary/20 rounded-3xl blur-3xl" />
              <div className="relative product-image-container">
                <img 
                  src={productBlackClose} 
                  alt="Beekonz Tracker - Diseño premium"
                  className="w-full h-auto rounded-2xl drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 20px 60px hsl(39, 82%, 73%, 0.2))',
                  }}
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary font-medium">Hecho para la comunidad hispana</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide leading-tight text-foreground">
                LLEVA TU EXPERIENCIA EN VR{" "}
                <span className="text-secondary">
                  AL SIGUIENTE NIVEL
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Tracking preciso, ligero y accesible. Diseñado especialmente para bailarines, creadores y la comunidad VRChat hispana.
              </p>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 hover:scale-[1.02]"
                onClick={() => scrollToSection('kits')}
              >
                Comprar Ahora
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Envíos en 24 hrs México · 5–7 días Internacional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

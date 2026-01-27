import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Neon glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl opacity-30 blur-xl" />
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src={trackerLifestyle} 
                  alt="Beekonz Tracker en mano - Bellas Artes México"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-primary font-medium">Hecho para la comunidad hispana</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide leading-tight">
                LLEVA TU EXPERIENCIA EN VR{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  AL SIGUIENTE NIVEL
                </span>
              </h2>
              
              <p className="text-xl text-foreground/80 font-light leading-relaxed">
                Tracking preciso, ligero y accesible. Diseñado especialmente para bailarines, creadores y la comunidad VRChat hispana.
              </p>
              
              {/* Neon button */}
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity duration-300 animate-rainbow-flow bg-[length:200%_100%]" />
                <Button 
                  size="lg" 
                  className="relative bg-background hover:bg-card text-foreground font-semibold px-10 py-7 text-lg rounded-full border border-primary/50 group-hover:border-primary transition-all duration-300"
                  onClick={() => scrollToSection('kits')}
                >
                  <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                    Comprar Ahora
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 text-primary group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
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
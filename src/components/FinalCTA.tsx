import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 gradient-spotlight" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-wide leading-tight">
            LLEVA TU EXPERIENCIA EN VR <span className="text-gradient">AL SIGUIENTE NIVEL</span>
          </h2>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            Tracking preciso, ligero y accesible. Diseñado para la comunidad hispana.
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-12 py-8 text-xl glow-effect transition-smooth group"
            onClick={() => scrollToSection('kits')}
          >
            Comprar Ahora
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
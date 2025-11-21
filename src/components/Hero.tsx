import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tracker.jpg";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="text-sm font-medium text-primary-glow tracking-wider uppercase">
                Tecnología SlimeVR Smols
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Juaniconn Trackers
              <span className="block text-gradient mt-2">
                Full Body Tracking de Alta Precisión
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl font-display font-medium text-foreground/90">
              Precisión que se siente. Libertad que se vive.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Trackers basados en tecnología SlimeVR Smols con NRF, batería superior a +50 horas 
              y diseño compacto de 16g. Ideales para VRChat y juegos compatibles con SteamVR.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-6 text-lg glow-effect transition-smooth group"
              >
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border hover:bg-secondary text-foreground font-semibold px-8 py-6 text-lg transition-smooth"
              >
                Ver Características
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold text-gradient">+50h</div>
                <div className="text-sm text-muted-foreground mt-1">Batería</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">16g</div>
                <div className="text-sm text-muted-foreground mt-1">Peso</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient">25-35</div>
                <div className="text-sm text-muted-foreground mt-1">dBi Latencia</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <img 
              src={heroImage} 
              alt="Juaniconn Tracker" 
              className="relative z-10 rounded-2xl shadow-2xl w-full hover:scale-105 transition-smooth"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

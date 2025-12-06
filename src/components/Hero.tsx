import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tracker.jpg";
import { ArrowRight, ChevronDown } from "lucide-react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with grid pattern */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Spotlight effect */}
      <div className="absolute inset-0 gradient-spotlight" />
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-semibold text-primary tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/5">
                Tecnología SlimeVR Smols
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-none tracking-wide">
              JUANICONN TRACKERS
              <span className="block text-gradient mt-2">
                FULL BODY TRACKING
              </span>
              <span className="block text-foreground/90 text-4xl md:text-5xl lg:text-6xl mt-2">
                DE ALTA PRECISIÓN
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-body font-light text-foreground/80 italic">
              "Precisión que se siente. Libertad que se vive."
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              Trackers basados en tecnología SlimeVR Smols con NRF, sensor ICM-45686, 
              batería superior a +50 horas y diseño ultraligero de 16g. 
              Listos para VRChat y SteamVR.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-7 text-lg glow-effect transition-smooth group"
                onClick={() => scrollToSection('kits')}
              >
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 bg-background/20 backdrop-blur-sm hover:bg-secondary hover:border-primary/50 text-foreground font-semibold px-8 py-7 text-lg transition-smooth"
                onClick={() => scrollToSection('kits')}
              >
                Ver Kits Disponibles
              </Button>
            </div>
            
            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient tracking-wide">+50H</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">Batería</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient tracking-wide">16G</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">Peso</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient tracking-wide">25-35</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">dBi Latencia</div>
              </div>
            </div>
          </div>
          
          {/* Right image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse-glow" />
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Juaniconn Tracker - Full Body Tracking de alta precisión" 
                className="relative z-10 rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-smooth animate-float"
              />
              {/* Floating specs card */}
              <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-lg border border-border rounded-2xl p-4 shadow-soft hidden md:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-display text-xl">ICM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Sensor ICM-45686</p>
                    <p className="text-sm text-muted-foreground">6 ejes de alta precisión</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('problem-solution')}
          className="text-muted-foreground hover:text-foreground transition-smooth"
          aria-label="Scroll down"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
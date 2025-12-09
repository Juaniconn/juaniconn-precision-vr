import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tracker.jpg";
import { ArrowRight, ChevronDown, Snowflake } from "lucide-react";
import { useEffect, useState } from "react";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Snowflake component
const SnowflakeIcon = ({ style }: { style: React.CSSProperties }) => (
  <div className="snowflake text-foreground/20" style={style}>
    <Snowflake size={Math.random() * 16 + 8} />
  </div>
);

export const Hero = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Bokeh lights for holiday effect */}
      <div className="bokeh-light w-64 h-64 bg-mint/30 top-20 left-[10%]" />
      <div className="bokeh-light w-48 h-48 bg-pink/20 top-40 right-[15%]" style={{ animationDelay: '2s' }} />
      <div className="bokeh-light w-56 h-56 bg-yellow/20 bottom-32 left-[20%]" style={{ animationDelay: '4s' }} />
      <div className="bokeh-light w-40 h-40 bg-orange/20 bottom-20 right-[25%]" style={{ animationDelay: '3s' }} />
      
      {/* Snowflakes */}
      {snowflakes.map((flake) => (
        <SnowflakeIcon
          key={flake.id}
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`,
            animationDuration: `${flake.duration}s`,
          }}
        />
      ))}
      
      {/* Mint glow sides */}
      <div className="absolute left-0 top-0 bottom-0 w-1/4 bg-gradient-to-r from-mint/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-gradient-to-l from-mint/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2">
              <span className="text-sm font-semibold text-primary tracking-widest uppercase border border-primary/30 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
                ❄️ Edición Diciembre · Tecnología que brilla contigo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-none tracking-wide">
              JUANICONN TRACKERS
              <span className="block text-gradient-rainbow mt-2">
                LIBERTAD TOTAL EN VR
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-body font-light text-foreground/80 italic">
              "Precisión que se siente. Libertad que se vive."
            </p>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              Trackers con sensor ICM-45686, batería de +50 horas y peso ultraligero de 16g. 
              Diseñados para VRChat, SteamVR y SlimeVR. La tecnología que ilumina tu experiencia VR.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="btn-rainbow-solid px-10 py-7 text-lg font-bold rounded-2xl transition-smooth group relative overflow-hidden"
                onClick={() => scrollToSection('kits')}
              >
                <span className="relative z-10 flex items-center">
                  Comprar Ahora
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              
              <Button 
                size="lg" 
                className="btn-rainbow bg-card hover:bg-secondary text-foreground font-semibold px-8 py-7 text-lg transition-smooth rounded-2xl"
                onClick={() => scrollToSection('kits')}
              >
                Ver Packs Disponibles
              </Button>
            </div>
            
            {/* Shipping info */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-2">
              <span className="inline-flex items-center gap-1">
                🚀 Envíos en 24 hrs México
              </span>
              <span className="text-border">·</span>
              <span>5–7 días Internacional</span>
            </div>
            
            {/* Quick stats with rainbow accents */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/30">
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient-rainbow tracking-wide">+50H</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">Batería</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient-rainbow tracking-wide">16G</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">Peso</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-4xl md:text-5xl font-display text-gradient-rainbow tracking-wide">25-35</div>
                <div className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wider">dBi Latencia</div>
              </div>
            </div>
          </div>
          
          {/* Right image with rainbow glow */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-0 rounded-3xl animate-pulse-rainbow" style={{ filter: 'blur(60px)' }} />
            <div className="relative rainbow-border rainbow-border-glow p-1 rounded-3xl">
              <img 
                src={heroImage} 
                alt="Juaniconn Tracker - Full Body Tracking de alta precisión" 
                className="relative z-10 rounded-3xl w-full hover:scale-[1.02] transition-smooth animate-float"
              />
            </div>
            {/* Floating specs card with rainbow border */}
            <div className="absolute -bottom-6 -left-6 premium-card p-4 hidden md:block animate-fade-in" style={{ animationDelay: '0.6s' }}>
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
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('kits')}
          className="text-muted-foreground hover:text-primary transition-smooth"
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
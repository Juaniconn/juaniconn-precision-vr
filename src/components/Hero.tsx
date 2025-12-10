import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute left-0 top-1/4 w-96 h-[600px] bg-mint/20 rounded-full blur-[150px]" />
      <div className="absolute right-0 top-1/3 w-96 h-[600px] bg-soft-pink/15 rounded-full blur-[150px]" />
      
      {[...Array(8)].map((_, i) => (
        <Snowflake key={i} className="absolute text-white/10 animate-pulse" style={{ left: `${10 + i * 12}%`, top: `${10 + (i % 3) * 25}%`, width: 16, filter: 'blur(1px)', animationDelay: `${i * 0.5}s` }} />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mint/10 border border-mint/30">
              <Snowflake className="w-4 h-4 text-mint" />
              <span className="text-sm text-mint font-medium">Edición Diciembre · Tecnología que brilla contigo</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">Juaniconn Trackers</span><br />
              <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">Libertad Total en VR</span>
            </h1>
            <p className="text-xl text-foreground/70 font-light max-w-xl mx-auto lg:mx-0">Full Body Tracking de alta precisión. Sensores ICM-45686, +50 horas de batería, solo 16g.</p>
            <div className="relative group inline-block">
              <div className="absolute -inset-1 rainbow-border rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity" />
              <Button size="lg" className="relative bg-background hover:bg-card text-foreground font-semibold px-10 py-7 text-lg rounded-full border border-mint/50" onClick={() => scrollToSection('kits')}>
                <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">Comprar Ahora</span>
                <ArrowRight className="ml-3 h-5 w-5 text-mint group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">Envíos en 24 hrs México · 5–7 días Internacional</p>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-8 bg-gradient-to-r from-mint/30 via-soft-pink/20 to-soft-blue/30 rounded-3xl blur-3xl" />
            <div className="relative">
              <div className="absolute -inset-[2px] rainbow-border rounded-3xl opacity-60" />
              <img src={trackerChristmas} alt="Juaniconn Tracker - Edición Navidad" className="relative w-full rounded-3xl" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-md rounded-xl px-4 py-3 border border-mint/30"><div className="text-xs text-muted-foreground">Batería</div><div className="text-lg font-bold text-mint">+50 hrs</div></div>
            <div className="absolute -top-4 -right-4 bg-card/90 backdrop-blur-md rounded-xl px-4 py-3 border border-soft-pink/30"><div className="text-xs text-muted-foreground">Peso</div><div className="text-lg font-bold text-soft-pink">16g</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

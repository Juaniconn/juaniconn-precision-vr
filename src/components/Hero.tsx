import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Gift, Star } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Christmas bokeh lights */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${8 + Math.random() * 20}px`,
              height: `${8 + Math.random() * 20}px`,
              background: i % 5 === 0 
                ? 'radial-gradient(circle, rgba(169,234,203,0.4) 0%, transparent 70%)'
                : i % 5 === 1
                ? 'radial-gradient(circle, rgba(255,123,172,0.3) 0%, transparent 70%)'
                : i % 5 === 2
                ? 'radial-gradient(circle, rgba(137,215,255,0.3) 0%, transparent 70%)'
                : i % 5 === 3
                ? 'radial-gradient(circle, rgba(255,180,110,0.3) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(255,244,124,0.3) 0%, transparent 70%)',
              filter: 'blur(2px)',
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Mint glow effects on sides */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[700px] bg-mint/15 rounded-full blur-[180px]" />
      <div className="absolute right-0 top-1/3 w-[500px] h-[700px] bg-soft-pink/10 rounded-full blur-[180px]" />
      <div className="absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-soft-blue/10 rounded-full blur-[150px]" />
      
      {/* Floating stars */}
      {[...Array(6)].map((_, i) => (
        <Star 
          key={i} 
          className="absolute text-soft-yellow/30 animate-float" 
          style={{ 
            left: `${15 + i * 15}%`, 
            top: `${15 + (i % 3) * 20}%`, 
            width: 12 + i * 2,
            animationDelay: `${i * 0.7}s`,
            animationDuration: '4s'
          }} 
        />
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Christmas badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-mint/15 via-soft-pink/10 to-soft-blue/15 border border-mint/30 backdrop-blur-sm">
              <Gift className="w-4 h-4 text-soft-pink" />
              <span className="text-sm font-medium bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">
                Edición Diciembre · Tecnología que brilla contigo
              </span>
              <Sparkles className="w-4 h-4 text-soft-yellow animate-pulse" />
            </div>
            
            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">Juaniconn Trackers</span><br />
              <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent animate-pulse">
                Libertad Total en VR
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-xl text-foreground/70 font-light max-w-xl mx-auto lg:mx-0">
              Full Body Tracking de alta precisión. Sensores ICM-45686, +50 horas de batería, solo 16g.
            </p>
            
            {/* CTA Button with rainbow border */}
            <div className="relative group inline-block">
              <div className="absolute -inset-1 rainbow-border rounded-full opacity-70 group-hover:opacity-100 blur-sm transition-opacity" />
              <Button 
                size="lg" 
                className="relative bg-background hover:bg-card text-foreground font-semibold px-10 py-7 text-lg rounded-full border border-mint/50 group-hover:border-mint transition-all" 
                onClick={() => scrollToSection('kits')}
              >
                <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent font-bold">
                  Comprar Ahora
                </span>
                <ArrowRight className="ml-3 h-5 w-5 text-mint group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            {/* Shipping info */}
            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-mint rounded-full animate-pulse" />
              Envíos en 24 hrs México · 5–7 días Internacional
            </p>
          </div>
          
          {/* Right content - Product image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-12 bg-gradient-to-r from-mint/25 via-soft-pink/15 to-soft-blue/25 rounded-[40px] blur-3xl animate-pulse" style={{ animationDuration: '3s' }} />
            
            {/* Image container with rainbow border */}
            <div className="relative">
              <div className="absolute -inset-[3px] rainbow-border rounded-3xl opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-soft-pink/10 rounded-3xl" />
              <img 
                src={trackerChristmas} 
                alt="Juaniconn Tracker - Edición Navidad" 
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Floating feature cards */}
            <div className="absolute -bottom-6 -left-6 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-mint/40 shadow-xl">
              <div className="text-xs text-muted-foreground mb-1">Batería</div>
              <div className="text-2xl font-bold text-mint">+50 hrs</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-soft-pink/40 shadow-xl">
              <div className="text-xs text-muted-foreground mb-1">Peso</div>
              <div className="text-2xl font-bold text-soft-pink">16g</div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-xl rounded-2xl px-4 py-3 border border-soft-blue/40 shadow-xl hidden xl:block">
              <div className="text-xs text-muted-foreground mb-1">Sensor</div>
              <div className="text-lg font-bold text-soft-blue">ICM-45686</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

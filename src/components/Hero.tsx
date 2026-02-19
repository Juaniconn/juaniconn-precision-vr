import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Star, Zap, Battery, Feather, Wifi } from "lucide-react";
import productBlack from "@/assets/product_black.png";
import { TechBackground } from "./TechBackground";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { icon: Battery, label: "+50h batería" },
    { icon: Feather, label: "10g ultraligero" },
    { icon: Wifi, label: "SlimeVR nativo" },
    { icon: Zap, label: "Latencia mínima" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
      {/* Background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #25010B 0%, #3A1C23 60%, #25010B 100%)',
        }}
      />
      
      {/* Animated tech background */}
      <TechBackground />
      
      {/* Radial glow accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[800px] h-[800px] right-[-10%] top-[-5%] opacity-25 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.3) 0%, hsl(345, 35%, 17%, 0.15) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] left-[5%] bottom-[5%] opacity-20 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.2) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/80 border border-secondary/30 backdrop-blur-sm">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium tracking-wide text-secondary">
                FULL BODY TRACKING VR
              </span>
            </div>
            
            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.95]">
              <span className="text-foreground">Beekonz</span>
              <br />
              <span className="text-secondary">Trackers.</span>
            </h1>
            
            {/* Subtitle */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Full Body Tracking para VR — <span className="text-foreground font-medium">Precisión sin límites.</span>
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 font-light max-w-xl mx-auto lg:mx-0">
                Diseñados para máxima estabilidad, latencia mínima y rendimiento profesional.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 hover:scale-[1.02] group"
                >
                  Comprar Ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold px-10 py-7 text-lg rounded-full border-secondary/50 text-secondary hover:bg-secondary/10 transition-all duration-300"
                onClick={() => scrollToSection('kits')}
              >
                Ver Paquetes
              </Button>
            </div>
            
            {/* Rating */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm text-foreground font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">• +150 clientes satisfechos</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Product */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Gold glow behind product */}
            <div 
              className="absolute -inset-20 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.2) 0%, hsl(345, 46%, 11%, 0.1) 50%, transparent 70%)',
              }}
            />
            
            {/* Product image */}
            <div className="relative">
              <img 
                src={productBlack} 
                alt="Beekonz Tracker - Full Body Tracking VR" 
                className="relative w-full max-w-md mx-auto animate-float"
                style={{
                  filter: 'drop-shadow(0 25px 60px rgba(37, 1, 11, 0.6)) drop-shadow(0 10px 30px rgba(243, 204, 128, 0.15))',
                }}
              />
              
              {/* Floating spec cards */}
              <div className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                    <Battery className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Batería</div>
                    <div className="text-xl font-bold text-secondary">+50 hrs</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl border border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                    <Feather className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Peso</div>
                    <div className="text-xl font-bold text-foreground">10g</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-card/95 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl border border-border hidden xl:block">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Sensor</div>
                    <div className="text-lg font-bold text-secondary">ICM-45686</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom badges */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border/50 mb-6 md:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <badge.icon className="h-4 w-4 text-secondary" />
                <span className="text-xs md:text-sm text-muted-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={() => scrollToSection('solution')}
          className="p-2.5 rounded-full border border-secondary/30 transition-colors bg-card/30 backdrop-blur-sm hover:bg-card/50 hover:border-secondary/50"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-secondary" />
        </button>
      </div>
    </section>
  );
};

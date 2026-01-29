import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import productBlack from "@/assets/product_black.png";
import logo from "@/assets/logo.svg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bee-gradient-hero" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[600px] h-[600px] right-[5%] top-[10%] opacity-30 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.4) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] left-[10%] bottom-[20%] opacity-20 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(346, 96%, 20%) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Logo badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border backdrop-blur-sm">
              <img src={logo} alt="Beekonz" className="h-5 w-auto" />
            </div>
            
            {/* Main title H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">Beekonz Trackers</span>
            </h1>
            
            {/* Subtitle H2 */}
            <h2 className="text-2xl md:text-3xl text-secondary font-display">
              Full Body Tracking para VR
            </h2>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground font-light max-w-lg mx-auto lg:mx-0">
              Precisión sin límites. 10g · +50h batería · Compatible con VRChat, SteamVR y SlimeVR.
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA */}
              <a 
                href="https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 hover:scale-[1.02]"
                >
                  Comprar Ahora
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
              
              {/* Secondary CTA */}
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300"
                onClick={() => scrollToSection('kits')}
              >
                Ver Paquetes
              </Button>
            </div>
            
            {/* Shipping info */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Envíos 24h México</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span className="text-sm text-muted-foreground">Internacional 5–7 días</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Product image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-16 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/10 rounded-full blur-3xl" />
            
            {/* Product image container */}
            <div className="relative product-image-container">
              <img 
                src={productBlack} 
                alt="Beekonz Tracker - Full Body Tracking VR" 
                className="relative w-full max-w-md mx-auto animate-float drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 60px hsl(39, 82%, 73%, 0.3))',
                }}
              />
            </div>
            
            {/* Floating spec cards */}
            <div className="absolute -bottom-4 left-0 bg-card/90 backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/30 glow-gold-subtle">
              <div className="text-xs text-muted-foreground mb-1">Batería</div>
              <div className="text-2xl font-bold text-secondary">+50 hrs</div>
            </div>
            
            <div className="absolute -top-4 right-0 bg-card/90 backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/30 glow-gold-subtle">
              <div className="text-xs text-muted-foreground mb-1">Peso</div>
              <div className="text-2xl font-bold text-foreground">10g</div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-card/90 backdrop-blur-xl rounded-2xl px-4 py-3 border border-secondary/30 glow-gold-subtle hidden xl:block">
              <div className="text-xs text-muted-foreground mb-1">Sensor</div>
              <div className="text-lg font-bold text-secondary">ICM-45686</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('kits')}
          className="p-2 rounded-full border border-border hover:border-secondary transition-colors"
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

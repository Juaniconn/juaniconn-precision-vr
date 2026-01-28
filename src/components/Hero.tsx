import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Light cream gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gridGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(39, 82%, 73%)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(346, 96%, 8%)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="hsl(39, 82%, 73%)" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          
          {/* Clean geometric lines */}
          <pattern id="lineGrid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path 
              d="M 80 0 L 0 80" 
              fill="none" 
              stroke="url(#gridGradient1)" 
              strokeWidth="0.5"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lineGrid)" />
        </svg>
      </div>
      
      {/* Warm accent glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[400px] h-[400px] right-[10%] top-[10%] opacity-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%) 0%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] left-[5%] bottom-[20%] opacity-15 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(346, 96%, 8%) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Main title H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-foreground">Beekonz Trackers</span>
              <br />
              <span className="text-secondary">
                Full Body Tracking para VR
              </span>
            </h1>
            
            {/* Subtitle H2 */}
            <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
              10g · +50h batería · Compatible con VRChat y SteamVR
            </h2>
            
            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground/80 font-light max-w-lg mx-auto lg:mx-0">
              Trackers compactos con sensores ICM-45686 y compatibilidad con SlimeVR.
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA - Gold button */}
              <a 
                href="https://buy.stripe.com/bJe28s1bn0RD9kz4Vn7g40k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-secondary/30 transition-all duration-300"
                >
                  Comprar Ahora
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </a>
            </div>
            
            {/* Secondary shipping info */}
            <p className="text-sm text-muted-foreground flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              Envíos 24h México · Internacional 5–7 días
            </p>
          </div>
          
          {/* Right content - Product image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-12 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/10 rounded-[80px] blur-3xl" />
            
            {/* Image container with premium border */}
            <div className="relative">
              {/* Gold accent border */}
              <div 
                className="absolute -inset-[3px] rounded-[2rem] opacity-60"
                style={{
                  background: 'linear-gradient(135deg, hsl(39, 82%, 73%) 0%, hsl(346, 96%, 8%) 50%, hsl(39, 82%, 73%) 100%)',
                }}
              />
              
              {/* Inner frame */}
              <div className="absolute inset-[2px] rounded-[1.8rem] bg-card" />
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-2 border-secondary/50 rotate-45 bg-card" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-2 border-primary/30 rotate-45 bg-card" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-2 border-primary/30 rotate-45 bg-card" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-2 border-secondary/50 rotate-45 bg-card" />
              
              <img 
                src={trackerChristmas} 
                alt="Beekonz Tracker - Tecnología VR premium con iluminación" 
                className="relative w-full rounded-[1.8rem] p-[3px] shadow-2xl"
              />
            </div>
            
            {/* Floating spec cards */}
            <div className="absolute -bottom-6 -left-6 bg-card backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/30 shadow-xl">
              <div className="text-xs text-muted-foreground mb-1">Batería</div>
              <div className="text-2xl font-bold text-secondary">+50 hrs</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-card backdrop-blur-xl rounded-2xl px-5 py-4 border border-primary/20 shadow-xl">
              <div className="text-xs text-muted-foreground mb-1">Peso</div>
              <div className="text-2xl font-bold text-primary">10g</div>
            </div>
            
            <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-card backdrop-blur-xl rounded-2xl px-4 py-3 border border-secondary/30 shadow-xl hidden xl:block">
              <div className="text-xs text-muted-foreground mb-1">Sensor</div>
              <div className="text-lg font-bold text-secondary">ICM-45686</div>
            </div>
            
            {/* Decorative Seal */}
            <div className="absolute -bottom-4 right-8 w-24 h-24 lg:w-28 lg:h-28">
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="sealGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="hsl(39, 82%, 73%)" />
                      <stop offset="50%" stopColor="hsl(346, 96%, 8%)" />
                      <stop offset="100%" stopColor="hsl(39, 82%, 73%)" />
                    </linearGradient>
                    <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                  </defs>
                  <text fill="url(#sealGradient)" fontSize="7.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath">
                      BEEKONZ • VR TRACKING • SINCE 2024 •
                    </textPath>
                  </text>
                </svg>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-card border-2 border-secondary/40 flex items-center justify-center">
                  <span className="text-xl font-display font-bold text-primary">B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

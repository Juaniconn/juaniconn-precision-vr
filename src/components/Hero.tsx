import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Star, Zap, Battery, Feather, Wifi, Heart } from "lucide-react";
import productRose from "@/assets/product_rose.png";
import logo from "@/assets/logo.svg";
import { ValentineBackground } from "./ValentineBackground";

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
      {/* Dark gradient background with Valentine wine accent */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #25010B 0%, #3A1C23 40%, #8B1D3A 70%, #25010B 100%)',
        }}
      />
      
      {/* Valentine Animated Background */}
      <ValentineBackground />
      
      {/* Valentine radial glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[900px] h-[900px] right-[-15%] top-[-10%] opacity-30 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 111, 145, 0.4) 0%, rgba(139, 29, 58, 0.2) 40%, transparent 70%)',
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] left-[0%] bottom-[0%] opacity-25 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 158, 187, 0.3) 0%, rgba(139, 29, 58, 0.15) 50%, transparent 70%)',
          }}
        />
        {/* Gold accent glow */}
        <div 
          className="absolute w-[400px] h-[400px] right-[20%] bottom-[20%] opacity-20 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.4) 0%, transparent 60%)',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Valentine Special Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card/80 border backdrop-blur-sm"
              style={{ borderColor: 'rgba(255, 111, 145, 0.4)' }}
            >
              <Heart className="h-4 w-4 text-[#FF6F91] fill-[#FF6F91]/30" />
              <span className="text-sm font-medium tracking-wide" style={{ color: '#FF9EBB' }}>
                VALENTINE'S SPECIAL EDITION
              </span>
              <Heart className="h-4 w-4 text-[#FF6F91] fill-[#FF6F91]/30" />
            </div>
            
            {/* Main title H1 */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.95]">
              <span className="text-foreground">Beekonz</span>
              <br />
              <span className="text-secondary">Trackers.</span>
            </h1>
            
            {/* Subtitle with Valentine twist */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Full Body Tracking para VR — <span className="text-foreground font-medium">Precisión que conecta.</span>
              </p>
              <p className="text-lg md:text-xl font-light max-w-xl mx-auto lg:mx-0"
                style={{ color: '#FF9EBB' }}
              >
                Este San Valentín, muévete sin límites.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary CTA with subtle heart */}
              <a 
                href="https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 hover:scale-[1.02] group"
                >
                  <Heart className="mr-2 h-5 w-5 fill-current opacity-80" />
                  Comprar Ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              
              {/* Secondary CTA with Valentine accent */}
              <Button 
                size="lg" 
                variant="outline"
                className="font-semibold px-10 py-7 text-lg rounded-full transition-all duration-300"
                style={{
                  borderColor: 'rgba(255, 111, 145, 0.5)',
                  color: '#FF9EBB',
                }}
                onClick={() => scrollToSection('kits')}
              >
                Ver Paquetes
              </Button>
            </div>
            
            {/* Rating badge */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
              <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-full px-4 py-2 border border-border">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm text-foreground font-semibold">4.9/5</span>
                <span className="text-sm text-muted-foreground">• 150+ clientes</span>
              </div>
            </div>
          </div>
          
          {/* Right content - Product image with Valentine glow */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Valentine + Gold mixed glow */}
            <div 
              className="absolute -inset-20 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, rgba(255, 111, 145, 0.25) 0%, rgba(243, 204, 128, 0.15) 50%, transparent 70%)',
              }}
            />
            
            {/* Product image container */}
            <div className="relative">
              <img 
                src={productRose} 
                alt="Beekonz Tracker Valentine Edition - Full Body Tracking VR" 
                className="relative w-full max-w-md mx-auto animate-float"
                style={{
                  filter: 'drop-shadow(0 25px 60px rgba(255, 111, 145, 0.35)) drop-shadow(0 10px 30px rgba(243, 204, 128, 0.25))',
                }}
              />
              
              {/* Floating spec cards with Valentine pink borders */}
              <div 
                className="absolute -bottom-4 -left-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl"
                style={{ border: '1px solid rgba(255, 111, 145, 0.3)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255, 111, 145, 0.15)' }}
                  >
                    <Battery className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Batería</div>
                    <div className="text-xl font-bold text-secondary">+50 hrs</div>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute -top-4 -right-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 shadow-xl"
                style={{ border: '1px solid rgba(255, 111, 145, 0.3)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: 'rgba(255, 111, 145, 0.15)' }}
                  >
                    <Feather className="w-5 h-5" style={{ color: '#FF9EBB' }} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Peso</div>
                    <div className="text-xl font-bold text-foreground">10g</div>
                  </div>
                </div>
              </div>
              
              <div 
                className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-card/95 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-xl hidden xl:block"
                style={{ border: '1px solid rgba(255, 111, 145, 0.3)' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ background: 'rgba(255, 111, 145, 0.15)' }}
                  >
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
        
        {/* Bottom badges strip */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border/50 mb-16 md:mb-20">
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
      
      {/* Scroll indicator with Valentine color - positioned with safe spacing */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button 
          onClick={() => scrollToSection('solution')}
          className="p-2.5 rounded-full border transition-colors bg-card/30 backdrop-blur-sm hover:bg-card/50"
          style={{ borderColor: 'rgba(255, 111, 145, 0.4)' }}
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6" style={{ color: '#FF9EBB' }} />
        </button>
      </div>
    </section>
  );
};

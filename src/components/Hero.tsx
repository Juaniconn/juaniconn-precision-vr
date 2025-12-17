import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake } from "lucide-react";
import trackerChristmas from "@/assets/tracker-christmas.jpg";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d1117] to-[#0a0a0f]" />
      
      {/* Soft bokeh Christmas lights */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              background: i % 6 === 0 
                ? 'radial-gradient(circle, rgba(169,234,203,0.25) 0%, transparent 70%)'
                : i % 6 === 1
                ? 'radial-gradient(circle, rgba(255,123,172,0.2) 0%, transparent 70%)'
                : i % 6 === 2
                ? 'radial-gradient(circle, rgba(137,215,255,0.2) 0%, transparent 70%)'
                : i % 6 === 3
                ? 'radial-gradient(circle, rgba(255,180,110,0.18) 0%, transparent 70%)'
                : i % 6 === 4
                ? 'radial-gradient(circle, rgba(255,244,124,0.15) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(212,248,164,0.2) 0%, transparent 70%)',
              filter: 'blur(8px)',
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle animated snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-white/10 animate-float"
            style={{
              left: `${5 + i * 6.5}%`,
              top: `${Math.random() * 60}%`,
              width: 8 + Math.random() * 12,
              height: 8 + Math.random() * 12,
              filter: 'blur(1px)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Light fog overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/40" />
      
      {/* Mint glow effects */}
      <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-mint/10 rounded-full blur-[200px]" />
      <div className="absolute right-0 bottom-1/4 w-[500px] h-[500px] bg-mint/8 rounded-full blur-[180px]" />
      <div className="absolute left-1/3 bottom-0 w-[400px] h-[400px] bg-soft-pink/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content - Text */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Christmas edition badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-mint/20 backdrop-blur-sm">
              <span className="text-mint text-lg">🎄</span>
              <span className="text-sm font-medium text-mint/90">
                Edición Navidad 2024
              </span>
            </div>
            
            {/* Main title H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.1]">
              <span className="text-white">Juaniconn Trackers</span>
              <br />
              <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">
                Una Navidad de Libertad en VR
              </span>
            </h1>
            
            {/* Subtitle H2 */}
            <h2 className="text-xl md:text-2xl text-mint/80 font-light">
              Edición Diciembre · Trackers ultraligeros de 10g con +50 horas de batería
            </h2>
            
            {/* Description */}
            <p className="text-lg text-white/60 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Vive una temporada llena de movimiento real. Los trackers Juaniconn combinan precisión, diseño premium y tecnología VR avanzada para que disfrutes tu mundo virtual como nunca.
            </p>
            
            {/* CTA Button with animated rainbow border */}
            <div className="pt-4">
              <a 
                href="https://buy.stripe.com/dRm00k1bneIteETdrT7g40f"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
              >
                <div className="absolute -inset-[2px] rainbow-border rounded-full opacity-80 group-hover:opacity-100 transition-opacity" />
                <Button 
                  size="lg" 
                  className="relative bg-[#0d1117] hover:bg-[#161b22] text-white font-semibold px-12 py-7 text-lg rounded-full border border-mint/30 group-hover:border-mint/50 transition-all shadow-lg shadow-mint/10"
                >
                  <span className="bg-gradient-to-r from-mint via-white to-soft-pink bg-clip-text text-transparent font-bold">
                    Comprar Ahora
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 text-mint group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
            
            {/* Secondary shipping info */}
            <p className="text-sm text-mint/60 flex items-center justify-center lg:justify-start gap-2">
              <span className="w-2 h-2 bg-mint/60 rounded-full animate-pulse" />
              Envíos en 24h en México · 5–7 días internacional
            </p>
          </div>
          
          {/* Right content - Product image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Outer mint glow */}
            <div className="absolute -inset-16 bg-gradient-to-r from-mint/15 via-transparent to-mint/10 rounded-[60px] blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* Image container with soft border */}
            <div className="relative">
              {/* Animated rainbow border */}
              <div className="absolute -inset-[3px] rainbow-border rounded-3xl opacity-60" />
              
              {/* Mint glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-mint/10 via-transparent to-soft-blue/5 rounded-3xl" />
              
              <img 
                src={trackerChristmas} 
                alt="Juaniconn Tracker - Edición Navidad con iluminación festiva" 
                className="relative w-full rounded-3xl shadow-2xl shadow-mint/20"
              />
            </div>
            
            {/* Floating specs cards */}
            <div className="absolute -bottom-4 -left-4 bg-[#0d1117]/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-mint/30 shadow-xl shadow-mint/10">
              <div className="text-xs text-white/50 mb-1">Batería</div>
              <div className="text-2xl font-bold text-mint">+50 hrs</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-[#0d1117]/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-soft-pink/30 shadow-xl">
              <div className="text-xs text-white/50 mb-1">Peso</div>
              <div className="text-2xl font-bold text-soft-pink">10g</div>
            </div>
            
            <div className="absolute top-1/2 -right-2 transform translate-x-1/2 -translate-y-1/2 bg-[#0d1117]/95 backdrop-blur-xl rounded-2xl px-4 py-3 border border-soft-blue/30 shadow-xl hidden xl:block">
              <div className="text-xs text-white/50 mb-1">Sensor</div>
              <div className="text-lg font-bold text-soft-blue">ICM-45686</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

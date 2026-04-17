import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Play, Zap, Cpu, Eye } from "lucide-react";
import ftHero from "@/assets/ft_1.jpg";
import ftSide from "@/assets/ft_3.jpg";
import { TechBackground } from "./TechBackground";

const STRIPE_URL = "https://buy.stripe.com/eVq4gA6vHasdeETafH7g40s";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const badges = [
    { icon: Eye, label: "Tracking facial en tiempo real" },
    { icon: Sparkles, label: "Compatible con VRChat" },
    { icon: Cpu, label: "Funciona con Babble" },
    { icon: Zap, label: "Fácil instalación" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 bg-background">
      {/* Soft light gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(24 40% 96%) 60%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Animated tech background */}
      <TechBackground />

      {/* Soft gold accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] right-[-10%] top-[-5%] opacity-40 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.25) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] left-[5%] bottom-[5%] opacity-30 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Launch badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-secondary/40 shadow-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold tracking-wide text-primary">
                NUEVO · BEEKONZ FACE TRACKING
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold tracking-tight leading-[0.95]">
              <span className="text-foreground">Da vida a</span>
              <br />
              <span className="text-foreground">tu avatar </span>
              <span className="text-secondary">en VR.</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tracking facial en tiempo real para <span className="text-foreground font-semibold">VRChat</span>, impulsado por el software <span className="text-foreground font-semibold">Babble</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto lg:mx-0">
                Captura expresiones y movimientos de boca con precisión natural.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full shadow-[0_10px_30px_-8px_hsl(39,82%,63%,0.6)] hover:shadow-[0_14px_40px_-10px_hsl(39,82%,63%,0.8)] transition-all duration-300 hover:scale-[1.02] group"
                >
                  Comprar ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="font-semibold px-10 py-7 text-lg rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-card"
                onClick={() => scrollToSection('face-tracking')}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver cómo funciona
              </Button>
            </div>

            {/* Price chip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <div className="flex items-center gap-3 bg-card rounded-full px-5 py-2.5 border border-border shadow-sm">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Desde</span>
                <span className="text-xl font-bold text-primary">$2,499</span>
                <span className="text-sm text-muted-foreground">MXN</span>
              </div>
            </div>
          </div>

          {/* Right content - Face Tracking product */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Gold glow behind product */}
            <div
              className="absolute -inset-12 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.35) 0%, transparent 70%)',
              }}
            />

            {/* Product card */}
            <div className="relative bg-card rounded-3xl p-6 md:p-8 border border-border shadow-[0_30px_80px_-20px_hsl(346,96%,8%,0.15)]">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-gradient-to-br from-muted to-background">
                <img
                  src={ftHero}
                  alt="Beekonz Face Tracking montado en headset VR"
                  className="w-full h-full object-cover animate-float"
                  style={{
                    filter: 'drop-shadow(0 20px 40px hsl(346, 96%, 8%, 0.25))',
                  }}
                />
                {/* Product badge overlay */}
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border shadow-sm">
                  <span className="text-xs font-semibold text-primary">BEEKONZ · FT</span>
                </div>
              </div>

              {/* Mini-gallery thumb strip */}
              <div className="mt-4 flex gap-3">
                <div className="flex-1 rounded-xl overflow-hidden border border-border aspect-square">
                  <img src={ftSide} alt="Vista lateral" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-border aspect-square bg-muted flex items-center justify-center">
                  <Eye className="w-8 h-8 text-secondary" />
                </div>
                <div className="flex-1 rounded-xl overflow-hidden border border-secondary/40 aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <span className="text-xs font-bold text-primary text-center leading-tight px-1">+ más<br />abajo</span>
                </div>
              </div>
            </div>

            {/* Floating spec card - Compatible */}
            <div className="absolute -bottom-5 -left-5 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Compatible</div>
                  <div className="text-base font-bold text-primary">VRChat + Babble</div>
                </div>
              </div>
            </div>

            {/* Floating spec card - Real-time */}
            <div className="absolute -top-5 -right-5 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Latencia</div>
                  <div className="text-base font-bold text-primary">Tiempo real</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature badges */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-border mb-6 md:mb-8">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <badge.icon className="h-4 w-4 text-secondary" />
                <span className="text-xs md:text-sm text-foreground/80 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={() => scrollToSection('face-tracking')}
          className="p-2.5 rounded-full border border-secondary/40 transition-colors bg-card backdrop-blur-sm hover:bg-secondary hover:border-secondary hover:text-secondary-foreground shadow-sm"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-secondary group-hover:text-secondary-foreground" />
        </button>
      </div>
    </section>
  );
};

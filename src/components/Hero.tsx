import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown, Sparkles, Play, Zap, Cpu, Eye } from "lucide-react";
import ftHero from "@/assets/ft_1.jpg";

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
    <section className="relative flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20 bg-background">
      {/* Soft light gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--background)) 0%, hsl(24 40% 96%) 60%, hsl(var(--background)) 100%)',
        }}
      />

      {/* Soft gold accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[700px] h-[700px] right-[-10%] top-[-10%] opacity-40 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.25) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] left-[5%] bottom-[5%] opacity-30 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.18) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Launch badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-card border border-secondary/40 shadow-sm">
              <Sparkles className="h-4 w-4 text-secondary" />
              <span className="text-sm font-semibold tracking-wide text-primary">
                NUEVO · BEEKONZ FACE TRACKING
              </span>
            </div>

            {/* Main title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold tracking-tight leading-[0.95]">
              <span className="text-foreground">DA VIDA A TU AVATAR </span>
              <span className="text-secondary">EN VR.</span>
            </h1>

            {/* Subtitle */}
            <div className="space-y-2">
              <p className="text-lg md:text-xl text-foreground/80 font-light max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Tracking facial en tiempo real para <span className="text-foreground font-semibold">VRChat</span>, impulsado por el software <span className="text-foreground font-semibold">Babble</span>.
              </p>
              <p className="text-base text-muted-foreground font-light max-w-xl mx-auto lg:mx-0">
                Captura expresiones y movimientos de boca con precisión natural.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={STRIPE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-base rounded-full shadow-[0_10px_30px_-8px_hsl(39,82%,63%,0.6)] hover:shadow-[0_14px_40px_-10px_hsl(39,82%,63%,0.8)] transition-all duration-300 hover:scale-[1.02] group"
                >
                  Comprar ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="font-semibold px-8 py-6 text-base rounded-full border-2 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-card"
                onClick={() => scrollToSection('face-tracking')}
              >
                <Play className="mr-2 h-4 w-4" />
                Ver cómo funciona
              </Button>
            </div>

            {/* Price chip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <div className="flex items-center gap-3 bg-card rounded-full px-5 py-2.5 border border-border shadow-sm">
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Desde</span>
                <span className="text-xl font-bold text-primary">$2,499</span>
                <span className="text-sm text-muted-foreground">MXN</span>
              </div>
            </div>
          </div>

          {/* Right content - single product image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Gold glow behind product */}
            <div
              className="absolute -inset-10 rounded-full blur-3xl"
              style={{
                background: 'radial-gradient(circle, hsl(39, 82%, 73%, 0.3) 0%, transparent 70%)',
              }}
            />

            {/* Single product card */}
            <div className="relative bg-card rounded-3xl p-4 md:p-6 border border-border shadow-[0_30px_80px_-20px_hsl(346,96%,8%,0.15)]">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-muted to-background">
                <img
                  src={ftHero}
                  alt="Beekonz Face Tracking montado en headset VR"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'drop-shadow(0 20px 40px hsl(346, 96%, 8%, 0.25))',
                  }}
                />
                {/* Product badge overlay */}
                <div className="absolute top-4 left-4 bg-background/95 backdrop-blur-sm rounded-full px-3 py-1.5 border border-border shadow-sm">
                  <span className="text-xs font-semibold text-primary">BEEKONZ · FT</span>
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
        <div className="mt-10 md:mt-12 pt-6 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-card border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${0.4 + index * 0.1}s` }}
              >
                <badge.icon className="h-4 w-4 text-secondary" />
                <span className="text-xs md:text-sm text-foreground/80 font-medium">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => scrollToSection('face-tracking')}
            className="p-2.5 rounded-full border border-secondary/40 transition-colors bg-card backdrop-blur-sm hover:bg-secondary hover:border-secondary hover:text-secondary-foreground shadow-sm animate-bounce"
            aria-label="Scroll to Face Tracking section"
          >
            <ChevronDown className="h-5 w-5 text-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
};

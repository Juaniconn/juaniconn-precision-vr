import { Check, ExternalLink, Star } from "lucide-react";

export const Kits = () => {
  const kits = [
    {
      name: "STARTER PACK",
      subtitle: "6 Trackers",
      description: "Perfecto para comenzar con Full Body Tracking.",
      items: [
        "6 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticas",
        "Peso 10g · +50h batería",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/dRm00k1bneIteETdrT7g40f"
    },
    {
      name: "ADVANCED PACK",
      subtitle: "8 Trackers",
      description: "Ideal para VRChat FBT completo.",
      items: [
        "8 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "8 Straps elásticas",
        "Peso 10g · Latencia 25–35 dBi",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: true,
      link: "https://buy.stripe.com/4gM3cwaLX6bXaoD87z7g40g"
    },
    {
      name: "PRO PACK",
      subtitle: "10 Trackers",
      description: "Para creadores, bailarines y setups avanzados.",
      items: [
        "10 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticas",
        "Peso 10g · Máxima precisión",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/bJeeVe7zLbwhcwL4Vn7g40h"
    }
  ];

  return (
    <section id="kits" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-mint/10 text-mint text-sm font-medium tracking-wider uppercase mb-6">
            Nuestros Productos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6">
            JUANICONN <span className="bg-gradient-to-r from-mint via-pink to-blue bg-clip-text text-transparent">TRACKERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el pack perfecto para tu experiencia VR
          </p>
        </div>

        {/* Products Grid - Perfect 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Featured Badge - positioned outside card flow */}
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-mint via-yellow to-pink text-background text-xs font-bold rounded-full shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Card with animated rainbow border */}
              <div 
                className={`
                  relative h-full rounded-3xl p-[2px] overflow-hidden
                  ${kit.featured 
                    ? 'bg-gradient-to-r from-mint via-pink to-blue animate-rainbow-flow bg-[length:200%_200%]' 
                    : 'bg-gradient-to-r from-mint/50 via-pink/50 to-blue/50'
                  }
                  transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(169,234,203,0.3)]
                `}
              >
                {/* Inner card content */}
                <div className="relative h-full bg-card/95 backdrop-blur-xl rounded-[22px] p-8 flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8 pt-2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold tracking-wide mb-2">
                      {kit.name}
                    </h3>
                    <p className="text-mint font-semibold text-lg mb-3">
                      {kit.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {kit.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {kit.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/30 transition-colors group-hover:border-mint/30"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-mint/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-mint" />
                        </div>
                        <span className="text-foreground/90 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={kit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      relative w-full py-4 rounded-2xl font-bold text-lg
                      flex items-center justify-center gap-2
                      transition-all duration-300
                      ${kit.featured
                        ? 'bg-gradient-to-r from-mint via-yellow to-pink text-background hover:shadow-[0_0_30px_rgba(169,234,203,0.5)] hover:scale-[1.02]'
                        : 'bg-background/80 border-2 border-mint/50 text-foreground hover:bg-mint/10 hover:border-mint hover:shadow-[0_0_20px_rgba(169,234,203,0.3)]'
                      }
                    `}
                  >
                    Comprar ahora
                    <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-sm">
            Todos los packs incluyen dongle NRF optimizado • Compatible con SlimeVR, VRChat y SteamVR
          </p>
        </div>
      </div>
    </section>
  );
};

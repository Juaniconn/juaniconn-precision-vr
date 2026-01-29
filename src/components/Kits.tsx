import { Check, ExternalLink, Star } from "lucide-react";

export const Kits = () => {
  const kits = [
    {
      name: "STARTER PACK",
      subtitle: "6 Trackers",
      description: "Perfecto para comenzar con Full Body Tracking.",
      items: [
        "6 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticas",
        "Peso 10g · +50h batería",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o"
    },
    {
      name: "ADVANCED PACK",
      subtitle: "8 Trackers",
      description: "Ideal para VRChat FBT completo.",
      items: [
        "8 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "8 Straps elásticas",
        "Peso 10g · Latencia 25–35 dBi",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: true,
      link: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r"
    },
    {
      name: "PRO PACK",
      subtitle: "10 Trackers",
      description: "Para creadores, bailarines y setups avanzados.",
      items: [
        "10 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticas",
        "Peso 10g · Máxima precisión",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p"
    }
  ];

  return (
    <section id="kits" className="py-24 bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bee-gradient-soft opacity-50" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium tracking-wider uppercase mb-6">
            Nuestros Productos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            BEEKONZ <span className="text-secondary">TRACKERS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el pack perfecto para tu experiencia VR
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Featured Badge */}
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-secondary text-secondary-foreground text-xs font-bold rounded-full glow-gold">
                    <Star className="h-3 w-3 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Card */}
              <div 
                className={`
                  relative h-full rounded-3xl overflow-hidden border-2
                  ${kit.featured 
                    ? 'border-secondary glow-gold card-featured' 
                    : 'border-border hover:border-secondary/50'
                  }
                  transition-all duration-300 group-hover:glow-gold-subtle
                `}
              >
                {/* Inner card content */}
                <div className="relative h-full bg-card p-8 flex flex-col">
                  {/* Header */}
                  <div className="text-center mb-8 pt-2">
                    <h3 className="text-2xl md:text-3xl font-display font-bold tracking-wide mb-2 text-foreground">
                      {kit.name}
                    </h3>
                    <p className="text-secondary font-semibold text-lg mb-3">
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
                        className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50 transition-colors group-hover:border-secondary/20"
                      >
                        <div className="flex-shrink-0 h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center">
                          <Check className="h-3 w-3 text-secondary" />
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
                        ? 'bg-secondary text-secondary-foreground hover:bg-bee-gold-hover glow-gold hover:glow-gold-strong hover:scale-[1.02]'
                        : 'bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground'
                      }
                    `}
                  >
                    Comprar ahora
                    <ExternalLink className="h-5 w-5" />
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

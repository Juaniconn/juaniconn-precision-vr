import { Check, ExternalLink, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Kits = () => {
  const kits = [
    {
      name: "Starter Hive",
      trackers: "6",
      description: "Perfecto para comenzar con Full Body Tracking.",
      price: "$5,999 MXN",
      items: [
        "6 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticas premium",
        "Peso 10g · +50h batería",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o"
    },
    {
      name: "Advanced Hive",
      trackers: "8",
      description: "Ideal para VRChat FBT completo.",
      price: "$7,499 MXN",
      items: [
        "8 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "8 Straps elásticas premium",
        "Peso 10g · Latencia 25–35ms",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: true,
      link: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r"
    },
    {
      name: "Pro Hive",
      trackers: "10",
      description: "Para creadores, bailarines y setups avanzados.",
      price: "$8,999 MXN",
      items: [
        "10 Trackers Beekonz ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticas premium",
        "Peso 10g · Máxima precisión",
        "Colores: Blanco, Negro, Rojo"
      ],
      featured: false,
      link: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p"
    }
  ];

  return (
    <section id="kits" className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Neotix style */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wider uppercase">Nuestros Paquetes</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            Beekonz <span className="text-secondary">Trackers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Elige el pack perfecto para tu experiencia VR. Todos incluyen dongle NRF optimizado.
          </p>
        </div>

        {/* Pricing Cards Grid - Neotix vertical pricing style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {/* Featured Badge */}
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-1.5 px-5 py-2 bg-secondary text-secondary-foreground text-sm font-bold rounded-full glow-gold shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Recomendado
                  </span>
                </div>
              )}

              {/* Card */}
              <div 
                className={`
                  relative h-full rounded-3xl overflow-hidden border-2 transition-all duration-500
                  ${kit.featured 
                    ? 'border-secondary glow-gold bg-gradient-to-b from-card to-card/80 scale-[1.02] lg:scale-105' 
                    : 'border-border bg-background hover:border-secondary/50 hover:shadow-lg'
                  }
                `}
              >
                {/* Gradient overlay for featured */}
                {kit.featured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5 pointer-events-none" />
                )}
                
                <div className="relative p-8 lg:p-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="text-center mb-8 pt-2">
                    {/* Tracker count - Large display */}
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-secondary/10 border border-secondary/30 mb-4">
                      <span className="text-4xl font-display font-bold text-secondary">{kit.trackers}</span>
                    </div>
                    
                    <h3 className="text-2xl font-display font-bold tracking-wide mb-2 text-foreground">
                      {kit.name}
                    </h3>
                    
                    {/* Price - Highlighted in Accent Gold */}
                    <p className="text-2xl font-bold text-secondary mb-3 glow-gold-subtle">
                      {kit.price}
                    </p>
                    
                    <p className="text-secondary/80 font-medium text-sm mb-2">
                      {kit.trackers} Trackers
                    </p>
                    
                    <p className="text-muted-foreground text-sm">
                      {kit.description}
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-border mb-8" />

                  {/* Features List */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {kit.items.map((item, i) => (
                      <div 
                        key={i} 
                        className="flex items-start gap-3"
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center">
                            <Check className="h-3 w-3 text-secondary" />
                          </div>
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
                    className="block"
                  >
                    <Button
                      className={`
                        w-full py-6 rounded-xl font-bold text-lg group/btn
                        transition-all duration-300
                        ${kit.featured
                          ? 'bg-secondary text-secondary-foreground hover:bg-bee-gold-hover glow-gold hover:glow-gold-strong'
                          : 'bg-muted text-foreground hover:bg-secondary hover:text-secondary-foreground'
                        }
                      `}
                    >
                      Comprar ahora
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              Compatible SlimeVR
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              VRChat & SteamVR
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full" />
              Envío incluido
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { Check, Star, ExternalLink, Sparkles } from "lucide-react";

export const Kits = () => {
  const kits = [
    {
      name: "Starter Pack",
      subtitle: "6 Trackers",
      icon: "⭐",
      description: "Perfecto para comenzar con Full Body Tracking",
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
      name: "Advanced Pack",
      subtitle: "8 Trackers",
      icon: "🔥",
      description: "Ideal para VRChat FBT completo",
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
      name: "Pro Pack",
      subtitle: "10 Trackers",
      icon: "💎",
      description: "Para creadores, bailarines y setups avanzados",
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
    <section id="kits" className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-spotlight opacity-30" />
      <div className="bokeh-light w-72 h-72 bg-mint/20 top-20 right-[5%]" />
      <div className="bokeh-light w-48 h-48 bg-pink/15 bottom-40 left-[10%]" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Nuestros Productos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            JUANICONN <span className="text-gradient-rainbow">TRACKERS</span>
          </h2>
          <p className="text-xl text-foreground/80 font-medium mb-4">
            ¿Listo para llevar tu cuerpo al juego?
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
            Cada set incluye trackers ensamblados, straps elásticas y dongle NRF optimizado para baja latencia. 
            Los Juaniconn Trackers usan sensores ICM-45686, batería de +50 horas y peso ultraligero de 10g. 
            Compatibles con SlimeVR, VRChat y SteamVR.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {kits.map((kit, index) => (
            <div 
              key={index}
              className={`relative premium-card p-8 transition-smooth animate-fade-in flex flex-col ${
                kit.featured 
                  ? 'md:scale-[1.02] z-10' 
                  : 'hover:scale-[1.01]'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <span className="inline-flex items-center gap-2 px-5 py-2 btn-rainbow-solid text-sm font-bold rounded-full shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8 pt-4">
                <span className="text-4xl mb-3 block">{kit.icon}</span>
                <h3 className="text-3xl font-display tracking-wide mb-1">{kit.name.toUpperCase()}</h3>
                <p className="text-primary font-semibold text-lg">{kit.subtitle}</p>
                <p className="text-muted-foreground font-light mt-2">{kit.description}</p>
              </div>
              
              <div className="space-y-3 mb-8 flex-grow">
                {kit.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background/50 rounded-xl border border-border/30">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <a 
                href={kit.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-full py-4 text-lg font-bold transition-smooth group rounded-2xl flex items-center justify-center gap-2 ${
                  kit.featured 
                    ? 'btn-rainbow-solid' 
                    : 'btn-rainbow bg-card hover:bg-secondary text-foreground'
                }`}
              >
                Comprar ahora
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
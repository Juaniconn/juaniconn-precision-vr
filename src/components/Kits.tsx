import { Button } from "@/components/ui/button";
import { Check, ArrowRight, ExternalLink, Star } from "lucide-react";

export const Kits = () => {
  const kits = [
    {
      name: "Kit 6 Trackers",
      description: "Perfecto para comenzar con Full Body Tracking",
      items: [
        "6 Trackers ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticas",
        "Batería +50 hrs",
        "Peso 16g cada uno"
      ],
      featured: false,
      link: "https://buy.stripe.com/dRm00k1bneIteETdrT7g40f"
    },
    {
      name: "Kit 8 Trackers",
      description: "Balance perfecto entre precisión y comodidad",
      items: [
        "8 Trackers ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "8 Straps elásticas",
        "Batería +50 hrs",
        "Peso 16g cada uno"
      ],
      featured: true,
      link: "https://buy.stripe.com/4gw3cwaLX6bXaoD87z7g40g"
    },
    {
      name: "Kit 10 Trackers",
      description: "Tracking completo con máxima precisión",
      items: [
        "10 Trackers ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticas",
        "Batería +50 hrs",
        "Peso 16g cada uno"
      ],
      featured: false,
      link: "https://buy.stripe.com/bJeeVe7zLbwhcwL4Vn7g40h"
    }
  ];
  
  return (
    <section id="kits" className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-spotlight opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Nuestros Productos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            KITS <span className="text-gradient">DISPONIBLES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Elige el kit perfecto para tu experiencia de Full Body Tracking
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {kits.map((kit, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-3xl border transition-smooth animate-fade-in ${
                kit.featured 
                  ? 'bg-card border-primary glow-effect scale-[1.02]' 
                  : 'bg-card border-border hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-display tracking-wide mb-3">{kit.name.toUpperCase()}</h3>
                <p className="text-muted-foreground font-light">{kit.description}</p>
              </div>
              
              <div className="space-y-3 mb-8">
                {kit.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-background/50 rounded-lg">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-foreground/90 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                asChild
                className={`w-full py-7 text-lg font-semibold transition-smooth group rounded-xl ${
                  kit.featured 
                    ? 'bg-primary hover:bg-primary-glow text-primary-foreground glow-effect' 
                    : 'bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground'
                }`}
              >
                <a href={kit.link} target="_blank" rel="noopener noreferrer">
                  Comprar Ahora
                  <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
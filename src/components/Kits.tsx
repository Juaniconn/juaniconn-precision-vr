import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export const Kits = () => {
  const kits = [
    {
      name: "Kit 6 Trackers",
      description: "Perfecto para comenzar con Full Body Tracking",
      items: [
        "6 Trackers SlimeVR ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticos premium",
        "Batería +50 horas por tracker",
        "Peso: 16g por tracker"
      ],
      featured: false
    },
    {
      name: "Kit 10 Trackers",
      description: "Tracking completo con máxima precisión",
      items: [
        "10 Trackers SlimeVR ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticos premium",
        "Batería +50 horas por tracker",
        "Peso: 16g por tracker"
      ],
      featured: true
    }
  ];
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Kits <span className="text-gradient">Disponibles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el kit perfecto para tu experiencia de Full Body Tracking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {kits.map((kit, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border transition-smooth hover:scale-105 animate-fade-in ${
                kit.featured 
                  ? 'bg-card border-primary glow-effect' 
                  : 'bg-card border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {kit.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-2">{kit.name}</h3>
                <p className="text-muted-foreground">{kit.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {kit.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full py-6 text-lg font-semibold transition-smooth group ${
                  kit.featured 
                    ? 'bg-primary hover:bg-primary-glow text-primary-foreground glow-effect' 
                    : 'bg-secondary hover:bg-primary text-foreground hover:text-primary-foreground'
                }`}
              >
                Comprar Ahora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

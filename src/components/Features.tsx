import { Battery, Cpu, Zap, Weight, Wifi, Gauge } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Battery,
      title: "Batería +50 Horas",
      description: "Sesiones largas sin interrupciones. Olvídate de recargar constantemente."
    },
    {
      icon: Cpu,
      title: "Sensor ICM-45686",
      description: "Tecnología de última generación para máxima precisión en cada movimiento."
    },
    {
      icon: Zap,
      title: "Latencia 25-35 dBi",
      description: "Respuesta ultra rápida y tracking en tiempo real sin lag perceptible."
    },
    {
      icon: Weight,
      title: "Ultraligero 16g",
      description: "Tan ligeros que olvidarás que los llevas puestos durante horas."
    },
    {
      icon: Wifi,
      title: "Compatible SlimeVR",
      description: "Funciona perfectamente con VRChat, SteamVR y toda la suite SlimeVR."
    },
    {
      icon: Gauge,
      title: "Dongle nRF52840",
      description: "Dongle Holyiot de alto rendimiento incluido en cada kit."
    }
  ];
  
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Características <span className="text-gradient">Principales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tecnología de vanguardia en cada detalle
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-smooth hover:glow-effect animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="h-8 w-8 text-primary-glow" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary-glow transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

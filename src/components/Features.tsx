import { Battery, Cpu, Zap, Feather, Wifi, Radio, Gamepad2, Signal } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Battery,
      title: "+50 Horas de Batería",
      value: "+50h",
      description: "Duración prolongada para sesiones largas sin interrupciones"
    },
    {
      icon: Feather,
      title: "Peso Ultraligero",
      value: "10g",
      description: "Tan ligeros que olvidarás que los llevas puestos"
    },
    {
      icon: Cpu,
      title: "Sensor ICM-45686",
      value: "6 ejes",
      description: "Alta estabilidad y precisión en cada movimiento"
    },
    {
      icon: Zap,
      title: "Latencia Ultra Baja",
      value: "25-35 dBi",
      description: "Respuesta fluida y estable en tiempo real"
    },
    {
      icon: Wifi,
      title: "Compatible SlimeVR",
      value: "100%",
      description: "Compatibilidad nativa con el ecosistema SlimeVR"
    },
    {
      icon: Radio,
      title: "Dongle nRF52840",
      value: "Holyiot",
      description: "Dongle de alto rendimiento incluido en cada kit"
    },
    {
      icon: Gamepad2,
      title: "VRChat & SteamVR",
      value: "Ready",
      description: "Se sincroniza perfectamente con tus juegos favoritos"
    },
    {
      icon: Signal,
      title: "Conexión NRF",
      value: "Estable",
      description: "Bajo consumo y máxima estabilidad de conexión"
    }
  ];
  
  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 gradient-spotlight opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Especificaciones Técnicas
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            CARACTERÍSTICAS <span className="text-gradient">PRINCIPALES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Especificaciones que marcan la diferencia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="floating-card p-6 group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-smooth">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              
              <div className="text-3xl font-display text-gradient tracking-wide mb-2">
                {feature.value}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                {feature.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
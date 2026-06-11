import { Target, Zap, Wifi, Feather } from "lucide-react";

export const SolutionSection = () => {
  const features = [
    {
      icon: Target,
      title: "Precisión de Tracking",
      description: "Sensor LSM6DSV de 6 ejes con magnetómetro para movimientos naturales y fluidos en VR.",
      highlight: "6 ejes de precisión"
    },
    {
      icon: Zap,
      title: "Estabilidad & Rendimiento",
      description: "Latencia optimizada de 25-35ms. Sin saltos ni interrupciones, incluso en sesiones intensas.",
      highlight: "Latencia mínima"
    },
    {
      icon: Wifi,
      title: "Compatibilidad SlimeVR",
      description: "Protocolo nativo SlimeVR. Compatible con VRChat, SteamVR, NeosVR y ChilloutVR.",
      highlight: "100% compatible"
    },
    {
      icon: Feather,
      title: "Diseño & Comodidad",
      description: "Solo 10g por tracker. Straps elásticas premium que se adaptan a cualquier cuerpo.",
      highlight: "Ultra ligero"
    },
  ];

  return (
    <section id="solution" className="section-padding bg-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - Neotix style with badge */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wider uppercase">La Solución Beekonz</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            Tecnología que <span className="text-secondary">Transforma</span>
            <br className="hidden md:block" />
            tu Experiencia VR
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Más de 3 años desarrollando trackers precisos, accesibles y diseñados 
            para la comunidad hispanohablante.
          </p>
        </div>

        {/* Feature Cards Grid - Neotix style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative h-full bg-card rounded-2xl border border-border p-8 overflow-hidden transition-all duration-500 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-secondary" />
                  </div>
                  
                  {/* Highlight badge */}
                  <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-4">
                    {feature.highlight}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

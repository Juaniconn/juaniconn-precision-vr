import { Zap, Radio, Wifi, Signal, Cpu, Battery } from "lucide-react";
import productBlackOpen from "@/assets/product_blackopen.png";

export const TechSection = () => {
  const techFeatures = [
    { icon: Wifi, title: "Baja Interferencia", description: "Enlace dedicado sin interrupciones en tu espacio VR" },
    { icon: Zap, title: "Respuesta Inmediata", description: "Latencia de 25-35ms optimizada en tiempo real" },
    { icon: Radio, title: "Conexión Individual", description: "Cada tracker con su propio canal dedicado" },
    { icon: Signal, title: "Rango Extendido", description: "Funciona en espacios de 3×5m hasta 5×5m" },
    { icon: Cpu, title: "MCU nRF52840", description: "Procesador de bajo consumo y alta eficiencia" },
    { icon: Battery, title: "+50h Autonomía", description: "Juega días sin recargar tus trackers" },
  ];

  return (
    <section id="tech" className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wider uppercase">Tecnología & Conectividad</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
            Conectividad <span className="text-secondary">Estable</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Comunicación confiable y precisa en todo momento.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Product Image with glow */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Glow effects */}
            <div className="absolute -inset-8 bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10 rounded-3xl blur-3xl" />
            
            {/* Image container */}
            <div className="relative">
              <img 
                src={productBlackOpen} 
                alt="Tecnología interna Beekonz Tracker" 
                className="relative w-full rounded-2xl drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 60px hsl(39, 82%, 73%, 0.25))',
                }}
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/40 glow-gold-subtle shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Sensor</div>
                    <div className="text-lg font-bold text-secondary">LSM6DSV</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features grid */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="grid sm:grid-cols-2 gap-4">
              {techFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-2xl bg-background border border-border hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5"
                  style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info box */}
            <div className="p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
              <p className="text-muted-foreground">
                <span className="text-secondary font-semibold">Diseñado para VR:</span>{" "}
                Nuestro sistema garantiza la mejor experiencia de seguimiento sin interferencias, 
                tanto en espacios domésticos como profesionales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

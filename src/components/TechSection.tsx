import { Zap, Radio, Wifi } from "lucide-react";
import trackerInternal from "@/assets/tracker-internal.webp";

export const TechSection = () => {
  const features = [
    { icon: Wifi, title: "Baja Interferencia", description: "Enlace dedicado sin interrupciones" },
    { icon: Zap, title: "Respuesta Inmediata", description: "Latencia optimizada en tiempo real" },
    { icon: Radio, title: "Conexión Individual", description: "Cada tracker con su propio canal" },
  ];

  return (
    <section id="tech" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - matching global pattern */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">
            Conectividad
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            CONECTIVIDAD <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">ESTABLE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Comunicación confiable en todo momento.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image with soft border */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-soft-blue/10 via-transparent to-mint/8 rounded-3xl blur-3xl" />
            
            {/* Soft border frame */}
            <div className="relative">
              <div 
                className="absolute -inset-[3px] rounded-2xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(137,215,255,0.35), rgba(169,234,203,0.15))',
                }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-background/20" />
              <img 
                src={trackerInternal} 
                alt="Tracker render interno" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main description */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Nuestros trackers utilizan un enlace inalámbrico optimizado que mantiene una señal estable incluso en espacios de 3×5m hasta 5×5m.
            </p>

            {/* Feature cards - minimal style */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in"
                  style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-mint/10 flex items-center justify-center group-hover:bg-mint/15 transition-all">
                      <feature.icon className="w-5 h-5 text-mint" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-0.5">
                    <h3 className="font-semibold text-foreground mb-0.5 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info note */}
            <div className="mt-6 p-5 rounded-xl bg-mint/5 border border-mint/20">
              <p className="text-sm text-foreground/70 font-light">
                Diseñado para espacios de VR domésticos y profesionales, nuestro sistema garantiza la mejor experiencia de seguimiento sin interferencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
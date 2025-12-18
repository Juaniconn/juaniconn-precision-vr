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
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-soft-blue/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-soft-pink/8 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">
            Conectividad
          </span>
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[1.1] mb-6">
              <span className="text-white">CONECTIVIDAD</span>
              <br />
              <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">
                ESTABLE
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light">
              Comunicación confiable en todo momento.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Image with soft border */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-soft-blue/15 via-transparent to-mint/10 rounded-3xl blur-3xl" />
            
            {/* Soft border frame */}
            <div className="relative">
              <div 
                className="absolute -inset-[3px] rounded-2xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(137,215,255,0.4), rgba(169,234,203,0.2))',
                }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-background/30" />
              <img 
                src={trackerInternal} 
                alt="Tracker render interno" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main description */}
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
              Nuestros trackers utilizan un enlace inalámbrico optimizado que mantiene una señal estable incluso en espacios de 3×5m hasta 5×5m.
            </p>

            {/* Feature cards - minimal style */}
            <div className="space-y-5">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-5 group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/15 to-soft-blue/15 flex items-center justify-center group-hover:from-mint/25 group-hover:to-soft-blue/25 transition-all">
                      <feature.icon className="w-6 h-6 text-mint" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-mint transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info note */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-mint/5 to-soft-blue/5 border border-mint/20">
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
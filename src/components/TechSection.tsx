import { Zap, Radio, Wifi } from "lucide-react";
import productBlackOpen from "@/assets/product_blackopen.png";

export const TechSection = () => {
  const features = [
    { icon: Wifi, title: "Baja Interferencia", description: "Enlace dedicado sin interrupciones" },
    { icon: Zap, title: "Respuesta Inmediata", description: "Latencia optimizada en tiempo real" },
    { icon: Radio, title: "Conexión Individual", description: "Cada tracker con su propio canal" },
  ];

  return (
    <section id="tech" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bee-gradient-soft opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium tracking-widest uppercase mb-6">
            Conectividad
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6 text-foreground">
            CONECTIVIDAD <span className="text-secondary">ESTABLE</span>
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
            <div className="absolute -inset-8 bg-gradient-to-br from-secondary/20 via-transparent to-secondary/10 rounded-3xl blur-3xl" />
            
            {/* Product image */}
            <div className="relative product-image-container">
              <img 
                src={productBlackOpen} 
                alt="Tracker interno - Tecnología Beekonz" 
                className="relative w-full rounded-2xl drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 20px 60px hsl(39, 82%, 73%, 0.2))',
                }}
              />
            </div>
          </div>

          {/* Right: Text content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main description */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Nuestros trackers utilizan un enlace inalámbrico optimizado que mantiene una señal estable incluso en espacios de 3×5m hasta 5×5m.
            </p>

            {/* Feature cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 group animate-fade-in p-4 rounded-xl bg-card/50 border border-border hover:border-secondary/40 transition-all duration-300"
                  style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:bg-secondary/30 group-hover:glow-gold-subtle transition-all">
                      <feature.icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info note */}
            <div className="mt-6 p-5 rounded-xl bg-card border border-secondary/30 glow-gold-subtle">
              <p className="text-sm text-muted-foreground font-light">
                Diseñado para espacios de VR domésticos y profesionales, nuestro sistema garantiza la mejor experiencia de seguimiento sin interferencias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

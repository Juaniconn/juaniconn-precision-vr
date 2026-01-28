import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

export const CustomSet = () => {
  const bullets = [
    "Configuración adaptada a tu espacio",
    "Optimizado para tu estilo de juego",
    "Soporte dedicado del equipo",
    "Envío personalizado",
  ];

  return (
    <section id="custom-set" className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-secondary tracking-widest uppercase mb-4 block">
            Personalización
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6 text-foreground">
            SET <span className="text-secondary">PERSONALIZADO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Configura un set a tu medida. Nosotros lo armamos por ti.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-secondary/15 via-transparent to-primary/10 rounded-3xl blur-3xl" />
            
            {/* Border frame */}
            <div className="relative">
              <div 
                className="absolute -inset-[3px] rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, hsl(39, 82%, 73%, 0.4), hsl(346, 96%, 8%, 0.2))',
                }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-card" />
              <img 
                src={trackerLifestyle} 
                alt="Tracker en Bellas Artes" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Text content and CTA */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Description text */}
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              ¿Necesitas una configuración específica? Nuestro equipo puede ayudarte a crear un set perfecto para tu espacio, estilo de juego y necesidades.
            </p>

            {/* Minimal bullets */}
            <div className="space-y-3">
              {bullets.map((bullet, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${0.25 + index * 0.08}s` }}
                >
                  <div className="flex-shrink-0 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  <span className="text-muted-foreground font-light">{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <div className="pt-4">
              <a 
                href="https://discord.gg/ekr3ERWJQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:shadow-secondary/20"
              >
                Crear mi Set en Discord
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

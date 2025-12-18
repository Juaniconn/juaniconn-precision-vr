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
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header - matching global pattern */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">
            Personalización
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            PERSONALIZACIÓN <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">SET PERSONALIZADO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Configura un set a tu medida. Nosotros lo armamos por ti.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image with mint border */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-mint/10 via-transparent to-soft-pink/8 rounded-3xl blur-3xl" />
            
            {/* Soft mint border frame */}
            <div className="relative">
              <div 
                className="absolute -inset-[3px] rounded-2xl opacity-50"
                style={{
                  background: 'linear-gradient(135deg, rgba(169,234,203,0.4), rgba(169,234,203,0.15))',
                }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-background/20" />
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
                    <div className="w-1.5 h-1.5 rounded-full bg-mint" />
                  </div>
                  <span className="text-foreground/70 font-light">{bullet}</span>
                </div>
              ))}
            </div>

            {/* Rainbow border button */}
            <div className="pt-4">
              <a 
                href="https://discord.gg/Wu6wJX72qX"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group inline-block"
              >
                <div className="absolute -inset-[2px] rainbow-border rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-[1px] rounded-full bg-gradient-to-br from-background via-background/90 to-background" />
                <button 
                  className="relative px-8 py-3 rounded-full border border-mint/40 group-hover:border-mint/60 transition-all font-semibold"
                >
                  <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent text-base">
                    Crear mi Set en Discord
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
      {/* Decorative gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-soft-pink/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-soft-blue/8 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="mb-20 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">
            Personalización
          </span>
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight leading-[1.1] mb-6">
              <span className="text-white">PERSONALIZACIÓN</span>
              <br />
              <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">
                SET PERSONALIZADO
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/70 font-light">
              Configura un set a tu medida. Nosotros lo armamos por ti.
            </p>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Image with mint border */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Outer glow */}
            <div className="absolute -inset-8 bg-gradient-to-br from-mint/15 via-transparent to-soft-pink/10 rounded-3xl blur-3xl" />
            
            {/* Soft mint border frame */}
            <div className="relative">
              <div 
                className="absolute -inset-[3px] rounded-2xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, rgba(169,234,203,0.5), rgba(169,234,203,0.2))',
                }}
              />
              <div className="absolute inset-[1px] rounded-2xl bg-background/30" />
              <img 
                src={trackerLifestyle} 
                alt="Tracker en Bellas Artes" 
                className="relative w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right: Text content and CTA */}
          <div className="space-y-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Description text */}
            <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed">
              ¿Necesitas una configuración específica? Nuestro equipo puede ayudarte a crear un set perfecto para tu espacio, estilo de juego y necesidades.
            </p>

            {/* Minimal bullets */}
            <div className="space-y-4">
              {bullets.map((bullet, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-mint to-soft-blue" />
                  </div>
                  <span className="text-foreground/80 font-light">{bullet}</span>
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
                  className="relative px-10 py-4 rounded-full border border-mint/40 group-hover:border-mint/60 transition-all font-semibold text-lg"
                >
                  <span className="bg-gradient-to-r from-mint via-soft-blue to-soft-pink bg-clip-text text-transparent">
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

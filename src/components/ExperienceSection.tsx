import { Users, Package, Sparkles } from "lucide-react";

export const ExperienceSection = () => {
  const stats = [
    { value: "700+", label: "Trackers vendidos", icon: Package },
    { value: "150+", label: "Clientes satisfechos", icon: Users },
    { value: "20+", label: "Proyectos personalizados", icon: Sparkles },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(169, 234, 203, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(169, 234, 203, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-mint/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-soft-pink/20 rotate-45" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-soft-blue/10 rounded-full blur-2xl" />
      <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-mint/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Experiencia</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              MÁS DE <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">3 AÑOS</span> DE EXPERIENCIA
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Con más de 3 años en la industria del Full Body Tracking, Juaniconn se ha consolidado como una marca 
              confiable y apreciada en la comunidad VR. Nuestros clientes nos eligen por nuestra precisión, 
              atención humana y personalización avanzada.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                {/* Rainbow border on hover */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-mint via-soft-pink to-soft-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-mint via-soft-pink to-soft-blue rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 rounded-2xl bg-card border border-border/50 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-mint" />
                  </div>
                  <div className="text-4xl md:text-5xl font-display bg-gradient-to-r from-mint to-soft-blue bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

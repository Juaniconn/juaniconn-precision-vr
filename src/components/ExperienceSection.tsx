import { Users, Package, Sparkles, Clock } from "lucide-react";

export const ExperienceSection = () => {
  const stats = [
    { value: "700+", label: "Trackers vendidos", icon: Package, description: "En toda Latinoamérica" },
    { value: "150+", label: "Clientes satisfechos", icon: Users, description: "Comunidad activa en Discord" },
    { value: "3+", label: "Años de experiencia", icon: Clock, description: "En la industria VR" },
    { value: "20+", label: "Proyectos personalizados", icon: Sparkles, description: "Configuraciones únicas" },
  ];

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      {/* Geometric accents */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-secondary/20 rounded-full" />
      <div className="absolute bottom-20 right-10 w-32 h-32 border border-secondary/10 rotate-45" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary tracking-wider uppercase">Experiencia & Trayectoria</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-primary-foreground">
              Más de <span className="text-secondary">3 Años</span>
              <br className="hidden md:block" />
              de Experiencia
            </h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Beekonz se ha consolidado como una marca confiable y apreciada en la comunidad VR. 
              Nuestros clientes nos eligen por nuestra precisión, atención humana y personalización avanzada.
            </p>
          </div>

          {/* Stats Grid - Neotix counter style */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className="relative p-8 rounded-3xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 text-center h-full hover:bg-primary-foreground/10 hover:border-secondary/30 transition-all duration-500 group">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-secondary" />
                  </div>
                  
                  {/* Counter */}
                  <div className="text-5xl md:text-6xl font-display font-bold text-secondary mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <p className="text-lg font-semibold text-primary-foreground mb-1">
                    {stat.label}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm text-primary-foreground/60">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

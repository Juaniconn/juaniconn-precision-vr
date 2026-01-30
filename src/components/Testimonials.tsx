import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    { 
      name: "Carlos Mendoza", 
      country: "México", 
      avatar: "CM", 
      text: "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales y fluidos.",
      role: "Creador de contenido VR"
    },
    { 
      name: "Sofía Ramírez", 
      country: "Argentina", 
      avatar: "SR", 
      text: "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!",
      role: "Bailarina VR"
    },
    { 
      name: "Diego Torres", 
      country: "Colombia", 
      avatar: "DT", 
      text: "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado.",
      role: "Entusiasta VRChat"
    },
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] -translate-y-1/2 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wider uppercase">Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            Lo que Dicen <span className="text-secondary">Nuestros Usuarios</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias reales de nuestra comunidad.
          </p>
        </div>
        
        {/* Testimonials Grid - Neotix card style */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in" 
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              <div className="h-full bg-card rounded-3xl p-8 border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/5">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-12 w-12 text-secondary" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                {/* Quote text */}
                <p className="text-foreground/90 font-light text-lg leading-relaxed mb-8">
                  "{t.text}"
                </p>
                
                {/* Author info */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="h-14 w-14 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-secondary">{t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="p-6 rounded-2xl bg-card/50 border border-border text-center">
            <p className="text-muted-foreground text-sm">
              <span className="text-secondary font-medium">Próximamente:</span>{" "}
              Añadiremos videos de testimonios reales y experiencias dentro de VRChat 
              para mostrar el rendimiento auténtico de los trackers Beekonz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

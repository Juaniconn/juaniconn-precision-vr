import { Star } from "lucide-react";

export const Testimonials = () => {
  const isPlaceholder = true;
  const testimonials = [
    { name: "Carlos Mendoza", country: "México", avatar: "CM", text: "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales." },
    { name: "Sofía Ramírez", country: "Argentina", avatar: "SR", text: "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!" },
    { name: "Diego Torres", country: "Colombia", avatar: "DT", text: "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado." },
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-card relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bee-gradient-soft opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium tracking-widest uppercase mb-6">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide text-foreground">
            LO QUE DICEN <span className="text-secondary">NUESTROS USUARIOS</span>
          </h2>
          {isPlaceholder && (
            <div className="mt-8 max-w-2xl mx-auto bg-muted/50 rounded-2xl p-6 border border-border">
              <p className="text-muted-foreground">
                Muy pronto añadiremos testimonios reales de nuestros usuarios, incluyendo videos cortos y experiencias dentro de VRChat. Queremos mostrar resultados reales con clientes reales para que puedas ver el rendimiento auténtico de los trackers Beekonz.
              </p>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-secondary/40 transition-all duration-300 h-full hover:glow-gold-subtle">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-secondary/20 text-secondary flex items-center justify-center font-bold text-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.country}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-muted-foreground font-light italic leading-relaxed">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    { name: "Carlos Mendoza", country: "México", avatar: "CM", text: "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales." },
    { name: "Sofía Ramírez", country: "Argentina", avatar: "SR", text: "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!" },
    { name: "Diego Torres", country: "Colombia", avatar: "DT", text: "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado." },
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mint/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-soft-pink/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">
            LO QUE DICEN <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">NUESTROS USUARIOS</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative group animate-fade-in" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Rainbow border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-mint via-soft-pink to-soft-blue rounded-2xl opacity-30 group-hover:opacity-60 blur-sm transition-opacity duration-500" />
              <div className="absolute -inset-[1px] rainbow-border rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/50 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-mint to-soft-blue flex items-center justify-center text-background font-bold text-lg shadow-lg">
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.country}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-pastel-yellow text-pastel-yellow" />
                  ))}
                </div>
                
                <p className="text-foreground/90 font-light italic leading-relaxed">"{t.text}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

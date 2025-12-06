import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    { name: "Carlos Mendoza", country: "México", avatar: "CM", text: "Precisión increíble. Nunca tuve mejor tracking en VRChat." },
    { name: "Sofía Ramírez", country: "Argentina", avatar: "SR", text: "El envío llegó rapidísimo y el soporte es excelente." },
    { name: "Diego Torres", country: "Colombia", avatar: "DT", text: "Ligero, cómodo y estable. Súper recomendado." },
    { name: "María García", country: "España", avatar: "MG", text: "La calidad de construcción es premium. Muy satisfecha." },
  ];
  
  return (
    <section id="testimonials" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Testimonios</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">LO QUE DICEN <span className="text-gradient">NUESTROS USUARIOS</span></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((t, index) => (
            <div key={index} className="floating-card p-6 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg">{t.avatar}</div>
                <div><h4 className="font-semibold">{t.name}</h4><p className="text-sm text-muted-foreground">{t.country}</p></div>
              </div>
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}</div>
              <p className="text-foreground/90 font-light italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
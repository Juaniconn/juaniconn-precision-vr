import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      country: "México",
      avatar: "CM",
      rating: 5,
      text: "Los Juaniconn son increíbles. La batería realmente dura más de 50 horas y el tracking es súper preciso en VRChat. Mejor que otras opciones más caras."
    },
    {
      name: "Sofía Ramírez",
      country: "Argentina",
      avatar: "SR",
      rating: 5,
      text: "Llevo meses usando el kit de 10 trackers y no puedo estar más feliz. Son livianos, cómodos y la latencia es imperceptible. 100% recomendados."
    },
    {
      name: "Diego Torres",
      country: "Colombia",
      avatar: "DT",
      rating: 5,
      text: "El envío fue rápido y el soporte por Discord es excelente. Los trackers funcionan perfectos con SlimeVR y la calidad de construcción es premium."
    }
  ];
  
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Lo que Dicen <span className="text-gradient">Nuestros Usuarios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experiencias reales de la comunidad VR en Latinoamérica
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-primary-glow font-bold text-xl">
                  {testimonial.avatar}
                </div>
                
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              
              <p className="text-foreground/90 leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { Palette, Globe, Wrench, Users, Shield } from "lucide-react";

export const WhyJuaniconn = () => {
  const reasons = [
    { icon: Palette, title: "Diseños Personalizados", description: "Opciones únicas para tu estilo" },
    { icon: Globe, title: "Envíos Internacionales", description: "Entrega rápida a todo el mundo" },
    { icon: Wrench, title: "Fabricación Cuidada", description: "Atención al detalle en cada tracker" },
    { icon: Users, title: "Comunidad Hispana", description: "Especializado para ti" },
    { icon: Shield, title: "Garantía + Soporte 24/7", description: "Ayuda en Discord siempre" },
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Por Qué Elegirnos</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">¿POR QUÉ <span className="text-gradient">JUANICONN</span>?</h2>
        </div>
        <div className="grid md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="floating-card p-6 text-center animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full"><reason.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="font-semibold mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground font-light">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
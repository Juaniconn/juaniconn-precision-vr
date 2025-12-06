import { Truck, Globe, Shield, MessageCircle } from "lucide-react";

export const Shipping = () => {
  const features = [
    { icon: Truck, title: "Envíos México", description: "1–2 días hábiles" },
    { icon: Globe, title: "Internacional", description: "5–7 días hábiles" },
    { icon: MessageCircle, title: "Soporte 24/7", description: "En Discord" },
    { icon: Shield, title: "Garantía", description: "En todos los productos" },
  ];
  
  return (
    <section id="shipping" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Logística</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">ENVÍOS Y <span className="text-gradient">SOPORTE</span></h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className="floating-card p-6 text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="mb-4 inline-flex p-4 bg-primary/10 rounded-full"><f.icon className="h-7 w-7 text-primary" /></div>
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-light">{f.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-lg text-muted-foreground max-w-2xl mx-auto">Envíos seguros y rastreables a todo el mundo.</p>
      </div>
    </section>
  );
};
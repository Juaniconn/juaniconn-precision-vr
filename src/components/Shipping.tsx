import { Truck, Globe, Shield, MessageCircle } from "lucide-react";

export const Shipping = () => {
  const features = [
    {
      icon: Truck,
      title: "Envíos México",
      description: "1-2 días hábiles a todo el país"
    },
    {
      icon: Globe,
      title: "Envíos Internacionales",
      description: "5-7 días hábiles a toda Latinoamérica"
    },
    {
      icon: Shield,
      title: "Garantía Incluida",
      description: "Protección completa en todos los kits"
    },
    {
      icon: MessageCircle,
      title: "Soporte 24/7",
      description: "Ayuda inmediata por Discord"
    }
  ];
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Envíos y <span className="text-gradient">Soporte</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Entrega rápida y soporte continuo para tu tranquilidad
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-8 bg-card rounded-xl border border-border hover:border-primary/50 transition-smooth animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-full">
                <feature.icon className="h-8 w-8 text-primary-glow" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Realizamos envíos a <span className="font-semibold text-primary-glow">todo México y Latinoamérica</span> con 
            seguimiento completo. Todos nuestros kits incluyen garantía y soporte técnico permanente.
          </p>
        </div>
      </div>
    </section>
  );
};

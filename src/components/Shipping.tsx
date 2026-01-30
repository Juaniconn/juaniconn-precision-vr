import { Truck, Globe, Shield, MessageCircle, Clock, Package } from "lucide-react";

export const Shipping = () => {
  const features = [
    { 
      icon: Truck, 
      title: "Envíos México", 
      description: "1–2 días hábiles",
      detail: "Envío express a todo el país"
    },
    { 
      icon: Globe, 
      title: "Internacional", 
      description: "5–7 días hábiles",
      detail: "A toda Latinoamérica y más"
    },
    { 
      icon: MessageCircle, 
      title: "Soporte 24/7", 
      description: "En Discord",
      detail: "Respuestas rápidas en español"
    },
    { 
      icon: Shield, 
      title: "Garantía", 
      description: "En todos los productos",
      detail: "Respaldamos tu compra"
    },
  ];
  
  return (
    <section id="shipping" className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-secondary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="text-sm font-medium text-secondary tracking-wider uppercase">Logística & Soporte</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground mb-6">
            Envíos y <span className="text-secondary">Soporte</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Envíos seguros y rastreables a todo el mundo. Soporte dedicado en español.
          </p>
        </div>
        
        {/* Features Grid - Neotix style info blocks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div 
              key={i} 
              className="group relative animate-fade-in" 
              style={{ animationDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="h-full bg-background rounded-2xl p-8 border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5 text-center">
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 bg-secondary/10 rounded-2xl group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                  <f.icon className="h-8 w-8 text-secondary" />
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-secondary transition-colors">
                  {f.title}
                </h3>
                
                {/* Description - highlighted */}
                <p className="text-secondary font-semibold mb-2">
                  {f.description}
                </p>
                
                {/* Detail */}
                <p className="text-sm text-muted-foreground">
                  {f.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 p-6 rounded-2xl bg-background/50 border border-border">
            <div className="flex items-center gap-3">
              <Package className="h-5 w-5 text-secondary" />
              <span className="text-muted-foreground">Empaque seguro</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-secondary" />
              <span className="text-muted-foreground">Tracking incluido</span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-secondary" />
              <span className="text-muted-foreground">Garantía completa</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

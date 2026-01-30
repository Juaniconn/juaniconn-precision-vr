import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

export const CustomSet = () => {
  const benefits = [
    "Configuración adaptada a tu espacio de VR",
    "Optimizado para tu estilo de juego",
    "Soporte dedicado del equipo Beekonz",
    "Envío personalizado y rápido",
  ];

  return (
    <section id="custom-set" className="section-padding bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] -translate-y-1/2 bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Two-column layout - Neotix style */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Left: Image with frame */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            {/* Decorative frame */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-secondary/20" />
            <div className="absolute -inset-8 rounded-3xl border border-border/50" />
            
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-br from-secondary/15 via-transparent to-transparent rounded-3xl blur-2xl" />
            
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={trackerLifestyle} 
                alt="Set personalizado Beekonz" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
              <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary tracking-wider uppercase">Personalización</span>
            </div>
            
            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight text-foreground">
              Set <span className="text-secondary">Personalizado</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              ¿Necesitas una configuración específica? Nuestro equipo puede ayudarte a crear 
              un set perfecto para tu espacio, estilo de juego y necesidades.
            </p>

            {/* Benefits list */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 animate-fade-in"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="h-3.5 w-3.5 text-secondary" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://discord.gg/ekr3ERWJQ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 group"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Crear mi Set en Discord
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

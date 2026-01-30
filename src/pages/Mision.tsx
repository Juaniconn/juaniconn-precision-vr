import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Lightbulb, Globe, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Mision = () => {
  const pilares = [
    {
      icon: Lightbulb,
      title: "Innovación Continua",
      description: "Hardware mejorado, firmware optimizado. Siempre buscando la mejor experiencia VR posible.",
    },
    {
      icon: Globe,
      title: "Accesibilidad",
      description: "Precios justos y envíos internacionales para toda la comunidad latinoamericana.",
    },
    {
      icon: MessageCircle,
      title: "Comunidad",
      description: "Soporte humano y rápido, disponible 24/7 en Discord en español.",
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-secondary/10 rounded-full blur-[150px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header - Neotix style */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                <Target className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary tracking-wider uppercase">Propósito</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Nuestra <span className="text-secondary">Misión</span>
              </h1>
            </div>

            {/* Main Mission Card */}
            <div className="relative p-10 rounded-3xl bg-card border border-border overflow-hidden mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative text-center">
                <div className="w-20 h-20 rounded-2xl bg-secondary/20 flex items-center justify-center mx-auto mb-8">
                  <Target className="w-10 h-10 text-secondary" />
                </div>
                <p className="text-2xl md:text-3xl font-display text-foreground leading-relaxed">
                  Crear tecnología de movimiento <span className="text-secondary">accesible</span>, 
                  <span className="text-secondary"> confiable</span> y <span className="text-secondary">emocionante</span> 
                  para toda la comunidad VR.
                </p>
              </div>
            </div>

            {/* Pilares */}
            <div className="text-center mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-display font-bold text-foreground">Nos guiamos por 3 pilares</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {pilares.map((pilar, idx) => (
                <div 
                  key={idx}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
                >
                  <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5 text-center">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <pilar.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3 text-foreground group-hover:text-secondary transition-colors">
                      {pilar.title}
                    </h4>
                    <p className="text-muted-foreground">{pilar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg"
                  className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-8 py-6 rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 group"
                >
                  Únete a la Comunidad
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Mision;

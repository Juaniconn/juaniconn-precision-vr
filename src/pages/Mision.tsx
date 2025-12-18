import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Target, Lightbulb, Globe, MessageCircle } from "lucide-react";

const Mision = () => {
  const pilares = [
    {
      icon: Lightbulb,
      title: "Innovación Continua",
      description: "Hardware mejorado, firmware optimizado. Siempre buscando la mejor experiencia.",
      color: "mint"
    },
    {
      icon: Globe,
      title: "Accesibilidad",
      description: "Precios justos y envíos internacionales para toda la comunidad.",
      color: "soft-blue"
    },
    {
      icon: MessageCircle,
      title: "Comunidad",
      description: "Soporte humano y rápido, disponible 24/7 en Discord.",
      color: "soft-pink"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Propósito</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              NUESTRA <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">MISIÓN</span>
            </h1>
          </div>

          {/* Main Content */}
          <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-mint" />
                </div>
                <h2 className="text-2xl font-display">Nuestra Misión</h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nuestra misión es crear tecnología de movimiento accesible, confiable y emocionante.
              </p>
            </div>
          </div>

          {/* Pilares */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display">Nos guiamos por 3 pilares</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {pilares.map((pilar, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden animate-fade-in hover:border-mint/30 transition-all"
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${pilar.color}/10 rounded-full blur-2xl`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${pilar.color}/20 to-transparent flex items-center justify-center mb-4`}>
                    <pilar.icon className={`w-6 h-6 text-${pilar.color}`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{pilar.title}</h4>
                  <p className="text-sm text-muted-foreground">{pilar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Mision;

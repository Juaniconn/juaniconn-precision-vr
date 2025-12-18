import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Heart, Zap } from "lucide-react";

const AcercaDe = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Nuestra Historia</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ACERCA DE <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">JUANICONN</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-mint/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-mint" />
                  </div>
                  <h2 className="text-2xl font-display">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Juaniconn nació con la visión de democratizar el Full Body Tracking para la comunidad hispanohablante. 
                  Diseñamos tecnología ultraligera, precisa y accesible para que cualquiera pueda moverse libremente 
                  dentro del mundo virtual.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-soft-pink/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-pink/20 to-soft-orange/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-soft-pink" />
                  </div>
                  <h2 className="text-2xl font-display">Nuestra Pasión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada tracker refleja nuestra pasión: ingeniería inteligente, diseño minimalista y soporte humano cercano.
                  Nos dedicamos a crear productos que realmente mejoren la experiencia VR de nuestra comunidad.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-soft-blue/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-soft-blue/20 to-mint/20 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-soft-blue" />
                  </div>
                  <h2 className="text-2xl font-display">Tecnología Premium</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Utilizamos componentes de alta calidad como el sensor ICM-45686 y el MCU nRF52840 para ofrecer 
                  tracking preciso con más de 50 horas de batería y solo 10 gramos de peso por tracker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AcercaDe;

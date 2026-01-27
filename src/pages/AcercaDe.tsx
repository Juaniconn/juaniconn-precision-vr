import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Cpu, Heart } from "lucide-react";

const AcercaDe = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Quiénes Somos</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ACERCA DE <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">BEEKONZ</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beekonz nació con la visión de democratizar el Full Body Tracking para la comunidad hispanohablante. 
                  Diseñamos tecnología ultraligera, precisa y accesible para que cualquiera pueda moverse libremente 
                  dentro del mundo virtual.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display">Nuestra Tecnología</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Cada tracker refleja nuestra pasión: ingeniería inteligente, diseño minimalista y soporte humano 
                  cercano. Utilizamos los sensores más avanzados del mercado combinados con firmware optimizado 
                  para ofrecer la mejor experiencia de tracking.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border/50 overflow-hidden">
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-display">Nuestra Comunidad</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Más que una marca, somos una comunidad. Nuestro Discord está lleno de usuarios que comparten 
                  experiencias, tutoriales y se ayudan mutuamente. Estamos comprometidos con ofrecer soporte 
                  24/7 en español porque creemos que la tecnología debe ser accesible para todos.
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
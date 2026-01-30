import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Users, Cpu, Heart, Target, Zap } from "lucide-react";

const AcercaDe = () => {
  const values = [
    {
      icon: Target,
      title: "Nuestra Visión",
      description: "Democratizar el Full Body Tracking para la comunidad hispanohablante. Diseñamos tecnología ultraligera, precisa y accesible para que cualquiera pueda moverse libremente dentro del mundo virtual."
    },
    {
      icon: Cpu,
      title: "Nuestra Tecnología",
      description: "Cada tracker refleja nuestra pasión: ingeniería inteligente, diseño minimalista y soporte humano cercano. Utilizamos los sensores más avanzados del mercado combinados con firmware optimizado."
    },
    {
      icon: Heart,
      title: "Nuestra Comunidad",
      description: "Más que una marca, somos una comunidad. Nuestro Discord está lleno de usuarios que comparten experiencias, tutoriales y se ayudan mutuamente. Soporte 24/7 en español."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Hero Header - Neotix style */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary tracking-wider uppercase">Quiénes Somos</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Acerca de <span className="text-secondary">Beekonz</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Más de 3 años creando tecnología de tracking accesible para la comunidad VR hispana.
              </p>
            </div>

            {/* Values Cards Grid - Neotix style */}
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <div 
                  key={idx}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
                >
                  <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5">
                    {/* Background glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                        <value.icon className="w-7 h-7 text-secondary" />
                      </div>
                      
                      {/* Title */}
                      <h2 className="text-xl font-display font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                        {value.title}
                      </h2>
                      
                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-16 p-8 rounded-3xl bg-card border border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-display font-bold text-secondary mb-2">700+</div>
                  <div className="text-muted-foreground">Trackers vendidos</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-secondary mb-2">150+</div>
                  <div className="text-muted-foreground">Clientes satisfechos</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-secondary mb-2">3+</div>
                  <div className="text-muted-foreground">Años de experiencia</div>
                </div>
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

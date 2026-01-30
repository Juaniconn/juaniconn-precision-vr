import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Users, Sparkles, Clock, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  const features = [
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Comparte tips, tutoriales y experiencias con otros usuarios de Beekonz Trackers"
    },
    {
      icon: Clock,
      title: "Soporte 24/7",
      description: "Obtén ayuda rápida de nuestro equipo y de la comunidad en cualquier momento"
    },
    {
      icon: Sparkles,
      title: "Novedades",
      description: "Sé el primero en conocer nuevos productos, actualizaciones y ofertas especiales"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero - Neotix style */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                <Heart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary tracking-wider uppercase">Comunidad</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Únete a Nuestra <span className="text-secondary">Comunidad</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ¿Tienes preguntas? Únete a nuestro servidor de Discord para obtener soporte y conectar con otros usuarios.
              </p>
            </div>

            {/* Main Discord Card */}
            <div 
              className="relative bg-card border border-border rounded-3xl p-10 md:p-14 mb-12 animate-fade-in overflow-hidden group hover:border-secondary/40 transition-all duration-500"
              style={{ animationDelay: '0.1s' }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-secondary/20 rounded-3xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="h-12 w-12 text-secondary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground">Discord Beekonz</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto text-lg">
                  Únete a nuestra comunidad para obtener soporte, compartir experiencias y estar al tanto de las últimas novedades.
                </p>

                <a
                  href="https://discord.gg/ekr3ERWJQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground px-10 py-7 text-lg font-semibold rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 group/btn"
                  >
                    Unirse al Discord
                    <ArrowRight className="ml-3 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {features.map((feature, idx) => (
                <div 
                  key={idx}
                  className="group"
                >
                  <div className="h-full bg-card border border-border rounded-2xl p-8 hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5 text-center">
                    <div className="p-4 bg-secondary/10 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-7 w-7 text-secondary" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contacto;

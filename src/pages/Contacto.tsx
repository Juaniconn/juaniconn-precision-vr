import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Users, HelpCircle, Sparkles, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Hero */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Comunidad</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Únete a Nuestra <span className="text-gradient">Comunidad</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                ¿Tienes preguntas? Únete a nuestro servidor de Discord para obtener soporte y conectar con otros usuarios.
              </p>
            </div>

            {/* Main Discord Card */}
            <div 
              className="relative bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12 mb-12 animate-fade-in overflow-hidden group hover:border-primary/30 transition-all duration-500"
              style={{ animationDelay: '0.1s' }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="h-12 w-12 text-primary" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Discord Juaniconn</h2>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                  Únete a nuestra comunidad para obtener soporte, compartir experiencias y estar al tanto de las últimas novedades.
                </p>

                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-display font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  <a
                    href="https://discord.gg/UE2QDNf3sK"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Unirse al Discord
                  </a>
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Comunidad Activa</h3>
                <p className="text-muted-foreground text-sm">
                  Comparte tips, tutoriales y experiencias con otros usuarios de Juaniconn Trackers
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Soporte 24/7</h3>
                <p className="text-muted-foreground text-sm">
                  Obtén ayuda rápida de nuestro equipo y de la comunidad en cualquier momento
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group">
                <div className="p-3 bg-primary/10 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-xl mb-2">Novedades</h3>
                <p className="text-muted-foreground text-sm">
                  Sé el primero en conocer nuevos productos, actualizaciones y ofertas especiales
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

export default Contacto;

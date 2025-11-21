import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MessageCircle, Users, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-16 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Únete a Nuestra <span className="text-gradient">Comunidad</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                ¿Tienes preguntas? Únete a nuestro servidor de Discord
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-12 animate-fade-in glow-effect" style={{ animationDelay: '0.1s' }}>
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <MessageCircle className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-3xl font-bold mb-4">Discord Juaniconn</h2>
                <p className="text-muted-foreground mb-8">
                  Únete a nuestra comunidad para obtener soporte, compartir experiencias y estar al tanto de las últimas novedades.
                </p>
              </div>

              <Button
                asChild
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold glow-effect"
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

            <div className="grid md:grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-card border border-border rounded-lg p-6">
                <Users className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-bold text-xl mb-2">Comunidad Activa</h3>
                <p className="text-muted-foreground">
                  Comparte tips, tutoriales y experiencias con otros usuarios de Juaniconn Trackers
                </p>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <HelpCircle className="h-8 w-8 text-primary mb-4 mx-auto" />
                <h3 className="font-bold text-xl mb-2">Soporte 24/7</h3>
                <p className="text-muted-foreground">
                  Obtén ayuda rápida de nuestro equipo y de la comunidad en cualquier momento
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

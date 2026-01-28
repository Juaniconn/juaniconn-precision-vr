import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Package, AlertTriangle } from "lucide-react";

const PoliticaVenta = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-secondary tracking-widest uppercase mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-foreground">
              TÉRMINOS Y <span className="text-secondary">CONDICIONES</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Al Adquirir un Producto</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Al adquirir un producto Beekonz aceptas los siguientes términos:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Usar el dispositivo de forma responsable</li>
                  <li>No modificar componentes internos</li>
                  <li>Aceptar variaciones en tiempos de envío</li>
                  <li>Comprender que la compatibilidad depende de SlimeVR/SteamVR</li>
                </ul>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Envíos</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Los tiempos de envío son estimados y pueden variar según la ubicación y condiciones logísticas. México: 1-2 días hábiles. Internacional: 5-7 días hábiles.
                </p>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative space-y-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <AlertTriangle className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Actualizaciones</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Beekonz puede actualizar firmware y especificaciones sin previo aviso para mejorar la experiencia del usuario.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Para cualquier duda, contáctanos a través de nuestro{" "}
                  <a 
                    href="https://discord.gg/ekr3ERWJQ6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-secondary hover:underline font-medium"
                  >
                    Discord oficial
                  </a>.
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

export default PoliticaVenta;

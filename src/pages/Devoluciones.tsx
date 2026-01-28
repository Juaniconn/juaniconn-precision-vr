import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, RotateCcw, Package } from "lucide-react";

const Devoluciones = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-secondary tracking-widest uppercase mb-4 block">Políticas</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-foreground">
              GARANTÍA Y <span className="text-secondary">DEVOLUCIONES</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Garantía */}
            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Garantía</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Todos nuestros trackers cuentan con <strong className="text-foreground">90 días de garantía</strong> contra defectos de fabricación.
                  </p>
                  <p>
                    La garantía incluye reparación o reemplazo sin costo adicional para el cliente.
                  </p>
                </div>
              </div>
            </div>

            {/* Devoluciones */}
            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Devoluciones</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Aceptamos devoluciones dentro de <strong className="text-foreground">7 días</strong> a partir de la fecha de recepción.
                  </p>
                  <p>
                    El producto debe estar en perfecto estado y completo (incluyendo accesorios y empaque original).
                  </p>
                  <p>
                    El cliente cubre los gastos de envío de la devolución, salvo en casos de defectos de fabricación.
                  </p>
                </div>
              </div>
            </div>

            {/* Proceso */}
            <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Package className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display text-foreground">Proceso</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Para iniciar un proceso de garantía o devolución, contáctanos a través de nuestro{" "}
                    <a 
                      href="https://discord.gg/ekr3ERWJQ6" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-secondary hover:underline font-medium"
                    >
                      Discord oficial
                    </a>.
                  </p>
                  <p>
                    Nuestro equipo de soporte te guiará a través del proceso y responderá cualquier duda que tengas.
                  </p>
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

export default Devoluciones;

import { Shield } from "lucide-react";

export const Warranty = () => {
  return (
    <section id="warranty" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-soft-pink/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Garantía</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">CONFIANZA EN <span className="text-mint">CADA PRODUCTO</span></h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 space-y-8 animate-fade-in">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-mint" />
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">90 Días de Garantía</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Todos nuestros productos Juaniconn cuentan con 90 días de garantía a partir de la fecha de entrega. Durante este periodo, cualquier falla de fabricación será reparada o reemplazada sin costo adicional.
                </p>
                <p className="text-foreground/90 leading-relaxed">
                  Siempre buscamos ofrecer una experiencia confiable, por lo que nuestro equipo de soporte estará disponible para ayudarte en cualquier momento.
                </p>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">Lo que NO cubre la garantía:</h4>
              <p className="text-foreground/80">
                Daños por mal uso, modificaciones externas o descargas eléctricas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

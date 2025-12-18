import { Activity } from "lucide-react";

export const FullMovement = () => {
  return (
    <section id="full-movement" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-soft-blue/10 rounded-full blur-[150px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Rendimiento</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">RENDIMIENTO ÓPTIMO <span className="text-mint">EN MOVIMIENTO</span></h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-8 md:p-12 space-y-8 animate-fade-in">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-mint" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  Nuestros trackers están diseñados para mantener estabilidad incluso durante movimientos intensos, bailes rápidos o sesiones prolongadas de VRChat. La estructura ligera y la conectividad estable aseguran que tu avatar siga tus movimientos con precisión, sin retrasos ni saltos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

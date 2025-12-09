import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const parts = [
  {
    name: "Dongle NRF52840",
    description: "Dongle Holyiot optimizado para baja latencia",
    image: "🔌"
  },
  {
    name: "Carcasa de Tracker",
    description: "Carcasa de reemplazo resistente",
    image: "📦"
  },
  {
    name: "PCB de reemplazo",
    description: "Placa con sensor ICM-45686",
    image: "🔧"
  },
  {
    name: "Cable USB-C",
    description: "Cable de carga rápida",
    image: "🔋"
  },
  {
    name: "Kit de Straps",
    description: "Set de straps elásticas premium",
    image: "🎽"
  }
];

export const ReplacementParts = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="bokeh-light w-48 h-48 bg-orange/15 top-20 right-[15%]" />
      <div className="bokeh-light w-40 h-40 bg-yellow/10 bottom-20 left-[20%]" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Accesorios
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">
            PIEZAS DE <span className="text-gradient-rainbow">REEMPLAZO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Mantén tus trackers en perfecto estado con nuestras piezas originales.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
          {parts.map((part, index) => (
            <div 
              key={index}
              className="premium-card p-6 text-center transition-smooth hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{part.image}</div>
              <h3 className="font-display text-lg tracking-wide mb-2">{part.name}</h3>
              <p className="text-xs text-muted-foreground mb-4">{part.description}</p>
              <Button 
                size="sm"
                className="w-full btn-rainbow bg-card hover:bg-secondary text-foreground text-sm rounded-xl"
              >
                <ShoppingCart className="mr-1 h-3 w-3" />
                Agregar
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
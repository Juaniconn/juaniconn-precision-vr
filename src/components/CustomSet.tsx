import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tracker.jpg";

const bodyPoints = [
  { id: "head", name: "Cabeza", category: "upper" },
  { id: "neck", name: "Cuello", category: "upper" },
  { id: "upper-chest", name: "Pecho superior", category: "upper" },
  { id: "chest", name: "Pecho", category: "upper" },
  { id: "waist", name: "Cintura", category: "core" },
  { id: "hip", name: "Cadera", category: "core" },
  { id: "shoulder-l", name: "Hombro izq", category: "arms" },
  { id: "shoulder-r", name: "Hombro dcho", category: "arms" },
  { id: "arm-l", name: "Brazo izq", category: "arms" },
  { id: "arm-r", name: "Brazo dcho", category: "arms" },
  { id: "elbow-l", name: "Codo izq", category: "arms" },
  { id: "elbow-r", name: "Codo dcho", category: "arms" },
  { id: "wrist-l", name: "Muñeca izq", category: "arms" },
  { id: "wrist-r", name: "Muñeca dcha", category: "arms" },
  { id: "thigh-l", name: "Muslo izq", category: "legs" },
  { id: "thigh-r", name: "Muslo dcho", category: "legs" },
  { id: "calf-l", name: "Pantorrilla izq", category: "legs" },
  { id: "calf-r", name: "Pantorrilla dcha", category: "legs" },
  { id: "foot-l", name: "Pie izq", category: "legs" },
  { id: "foot-r", name: "Pie dcho", category: "legs" },
];

const colors = [
  { id: "white", name: "Blanco", color: "#FFFFFF" },
  { id: "black", name: "Negro", color: "#1a1a1a" },
  { id: "red", name: "Rojo Juaniconn", color: "#842520" },
];

export const CustomSet = () => {
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState("white");

  const togglePoint = (id: string) => {
    setSelectedPoints(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="custom-set" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-spotlight opacity-20" />
      <div className="bokeh-light w-64 h-64 bg-lime/20 top-20 left-[5%]" />
      <div className="bokeh-light w-56 h-56 bg-blue/15 bottom-20 right-[10%]" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Para usuarios avanzados
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            SET <span className="text-gradient-rainbow">PERSONALIZADO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Crea tu propio set seleccionando exactamente los puntos del cuerpo que deseas trackear. 
            Ideal si ya tienes un kit parcial o necesitas puntos adicionales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="rainbow-border rainbow-border-glow p-1 rounded-3xl">
              <img 
                src={heroImage}
                alt="Juaniconn Tracker personalizado"
                className="rounded-3xl w-full"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 premium-card p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{selectedPoints.length} trackers</p>
                  <p className="text-sm text-muted-foreground">seleccionados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Configurator */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Body points grid */}
            <div className="space-y-4">
              <h3 className="text-xl font-display tracking-wide text-foreground">
                Selecciona los puntos de tracking
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {bodyPoints.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => togglePoint(point.id)}
                    className={`p-3 rounded-xl border transition-smooth text-left flex items-center gap-2 ${
                      selectedPoints.includes(point.id)
                        ? 'bg-primary/20 border-primary text-foreground'
                        : 'bg-card border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-smooth ${
                      selectedPoints.includes(point.id)
                        ? 'border-primary bg-primary'
                        : 'border-muted-foreground'
                    }`}>
                      {selectedPoints.includes(point.id) && (
                        <Check className="h-3 w-3 text-primary-foreground" />
                      )}
                    </div>
                    <span className="text-sm font-medium">{point.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Color selection */}
            <div className="space-y-4">
              <h3 className="text-xl font-display tracking-wide text-foreground">
                Elige tu color
              </h3>
              <div className="flex gap-4">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-smooth ${
                      selectedColor === color.id
                        ? 'bg-primary/20 border-primary'
                        : 'bg-card border-border hover:border-primary/50'
                    }`}
                  >
                    <div 
                      className="h-8 w-8 rounded-full border-2 border-border"
                      style={{ backgroundColor: color.color }}
                    />
                    <span className="text-sm font-medium text-foreground">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Summary and CTA */}
            <div className="premium-card p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Trackers seleccionados:</span>
                <span className="text-2xl font-display text-gradient-rainbow">{selectedPoints.length}</span>
              </div>
              <Button 
                className="w-full py-7 text-lg font-bold btn-rainbow-solid rounded-2xl transition-smooth group"
                disabled={selectedPoints.length === 0}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Crear mi propio set
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                * Te contactaremos para confirmar tu pedido personalizado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
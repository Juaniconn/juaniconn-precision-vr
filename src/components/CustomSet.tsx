import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, ShoppingCart } from "lucide-react";
import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

const bodyPoints = ["Cabeza", "Cuello", "Pecho Superior", "Pecho", "Cintura", "Cadera", "Hombro Izq", "Hombro Dcho", "Brazo Izq", "Brazo Dcho", "Codo Izq", "Codo Dcho", "Muñeca Izq", "Muñeca Dcha", "Muslo Izq", "Muslo Dcho", "Pantorrilla Izq", "Pantorrilla Dcha", "Pie Izq", "Pie Dcho"];
const colors = [{ id: "white", name: "Blanco", color: "#FFFFFF" }, { id: "black", name: "Negro", color: "#1a1a1a" }, { id: "red", name: "Rojo Juaniconn", color: "#842520" }];

export const CustomSet = () => {
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState("white");
  const togglePoint = (name: string) => setSelectedPoints(prev => prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]);

  return (
    <section id="custom-set" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-soft-pink/10 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Personaliza</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">SET <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">PERSONALIZADO</span></h2>
          <p className="text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">Crea tu propio set seleccionando los puntos del cuerpo que deseas trackear.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          <div className="relative animate-fade-in">
            <div className="absolute -inset-4 bg-gradient-to-br from-soft-pink/20 to-mint/10 rounded-3xl blur-2xl" />
            <img src={trackerLifestyle} alt="Juaniconn Tracker" className="relative w-full rounded-2xl" />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-md rounded-full px-6 py-3 border border-mint/30">
              <span className="text-mint font-bold">{selectedPoints.length}</span><span className="text-muted-foreground ml-2">puntos</span>
            </div>
          </div>
          <div className="space-y-8 animate-fade-in">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {bodyPoints.map((point) => (
                <button key={point} onClick={() => togglePoint(point)} className={`relative px-4 py-3 rounded-xl border text-sm font-medium transition-all ${selectedPoints.includes(point) ? "bg-mint/20 border-mint text-mint" : "bg-card/50 border-border/50 text-muted-foreground hover:border-mint/50"}`}>
                  {selectedPoints.includes(point) && <Check className="absolute top-1 right-1 w-3 h-3 text-mint" />}{point}
                </button>
              ))}
            </div>
            <div className="flex gap-4">
              {colors.map((c) => (
                <button key={c.id} onClick={() => setSelectedColor(c.id)} className={`w-12 h-12 rounded-full border-2 ${selectedColor === c.id ? "border-mint scale-110" : "border-border/50"}`} style={{ backgroundColor: c.color }} title={c.name}>
                  {selectedColor === c.id && <Check className={`m-auto w-5 h-5 ${c.id === 'white' ? 'text-gray-800' : 'text-white'}`} />}
                </button>
              ))}
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 rainbow-border rounded-full opacity-70 group-hover:opacity-100 blur-sm" />
              <Button size="lg" disabled={selectedPoints.length === 0} className="relative w-full bg-background hover:bg-card font-semibold py-7 text-lg rounded-full border border-mint/50">
                <ShoppingCart className="mr-3 h-5 w-5 text-mint" />
                <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">Crear mi Propio Set</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

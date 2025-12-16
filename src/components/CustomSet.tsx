import { useState } from "react";
import { Check, MessageCircle } from "lucide-react";
import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

// Discord icon component
const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

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
              <span className="text-mint font-bold">{selectedPoints.length}</span><span className="text-muted-foreground ml-2">puntos seleccionados</span>
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
              <a 
                href="https://discord.gg/juaniconn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative w-full bg-background hover:bg-card font-semibold py-5 text-lg rounded-full border border-mint/50 flex items-center justify-center gap-3 transition-all"
              >
                <DiscordIcon className="h-6 w-6 text-[#5865F2]" />
                <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">Solicitar cotización personalizada en Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
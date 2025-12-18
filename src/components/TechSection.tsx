import { Cpu, Battery, Wifi, Zap, Settings, Globe } from "lucide-react";
import trackerInternal from "@/assets/tracker-internal.webp";

const specs = [
  { icon: Cpu, title: "Sensor ICM-45686", description: "Tracking fluido y estable" },
  { icon: Battery, title: "+50 Horas", description: "Batería de larga duración" },
  { icon: Zap, title: "Solo 10 Gramos", description: "Ultra ligero" },
  { icon: Wifi, title: "NRF52840 StableLink", description: "Latencia 25-35 dBi" },
  { icon: Settings, title: "Firmware Optimizado", description: "Actualizaciones constantes" },
  { icon: Globe, title: "Compatibilidad Total", description: "SlimeVR, SteamVR, VRChat" }
];

export const TechSection = () => (
  <section id="tech" className="section-padding bg-card relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-soft-blue/10 rounded-full blur-[150px]" />
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-16 animate-fade-in">
        <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Conectividad</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display">CONECTIVIDAD <span className="text-mint">ESTABLE</span></h2>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative animate-fade-in">
          <div className="absolute -inset-4 bg-gradient-to-br from-mint/20 to-soft-blue/20 rounded-3xl blur-2xl" />
          <img src={trackerInternal} alt="Vista interna del tracker" className="relative w-full rounded-2xl" />
        </div>
        <div className="space-y-8 animate-fade-in">
          <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h3 className="text-lg font-semibold mb-4 text-mint">Nuestros Trackers</h3>
            <p className="text-foreground/90">
              Nuestros trackers usan un enlace dedicado que asegura comunicación estable en espacios de juego de 3×5m a 5×5m.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid md:grid-cols-2 gap-6">
        {specs.slice(0, 4).map((spec, i) => (
          <div key={i} className="group relative bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 hover:border-mint/30 transition-all animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-mint/20 to-soft-blue/20 flex items-center justify-center mb-4">
              <spec.icon className="w-6 h-6 text-mint" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{spec.title}</h3>
            <p className="text-sm text-muted-foreground">{spec.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
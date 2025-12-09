import { Cpu, Battery, Wifi, Zap, Monitor, Settings } from "lucide-react";
import trackerImage from "@/assets/tracker-detail.jpg";

const specs = [
  {
    icon: Cpu,
    title: "Sensor ICM-45686",
    description: "6 ejes de alta precisión para tracking fluido y natural"
  },
  {
    icon: Battery,
    title: "16 gramos · 50+ horas",
    description: "Ultraligero con batería de larga duración para sesiones extensas"
  },
  {
    icon: Settings,
    title: "Firmware optimizado",
    description: "Software constantemente actualizado para máximo rendimiento"
  },
  {
    icon: Wifi,
    title: "NRF52840 Dongle StableLink",
    description: "Conexión inalámbrica estable y de baja latencia"
  },
  {
    icon: Zap,
    title: "Latencia 25-35 dBi",
    description: "Respuesta instantánea para movimientos precisos"
  },
  {
    icon: Monitor,
    title: "Compatibilidad total",
    description: "SlimeVR, SteamVR, VRChat y más plataformas"
  }
];

export const TechSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-spotlight opacity-20" />
      <div className="bokeh-light w-64 h-64 bg-blue/20 top-20 left-[10%]" />
      <div className="bokeh-light w-48 h-48 bg-mint/15 bottom-20 right-[15%]" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Hardware de Alta Gama
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            TECNOLOGÍA <span className="text-gradient-rainbow">JUANICONN</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Cada componente está diseñado y ensamblado para ofrecerte la mejor experiencia de Full Body Tracking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="rainbow-border rainbow-border-glow p-1 rounded-3xl">
              <img 
                src={trackerImage}
                alt="Interior del Juaniconn Tracker"
                className="rounded-3xl w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 premium-card p-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl btn-rainbow-solid flex items-center justify-center">
                  <Cpu className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">ICM-45686</p>
                  <p className="text-sm text-muted-foreground">Sensor Premium</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Specs */}
          <div className="space-y-4 order-1 lg:order-2">
            {specs.map((spec, index) => {
              const Icon = spec.icon;
              return (
                <div 
                  key={index}
                  className="premium-card p-5 flex items-start gap-4 transition-smooth hover:scale-[1.01] animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl tracking-wide mb-1">{spec.title}</h3>
                    <p className="text-muted-foreground text-sm font-light">{spec.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Wifi, Monitor, Code, Package, Zap } from "lucide-react";

const EspecificacionesTecnicas = () => {
  const specs = [
    {
      icon: Cpu,
      title: "Hardware",
      items: [
        "IMU: ICM-45686",
        "Magnetómetro: QMC6309",
        "MCU: nRF52840",
        "Peso: 10g",
        "Autonomía: +50h",
        "LEDs de estado",
        "Carcasa compacta optimizada"
      ]
    },
    {
      icon: Wifi,
      title: "Conectividad",
      items: [
        "Bluetooth Low Energy 5.0",
        "Protocolo SlimeVR nativo",
        "Latencia: 25–35 dBi",
        "Rango: 6–10 m en interiores"
      ]
    },
    {
      icon: Monitor,
      title: "Compatibilidad",
      items: [
        "SlimeVR",
        "VRChat (SteamVR)",
        "Windows / Linux",
        "Juegos con FBT"
      ]
    },
    {
      icon: Code,
      title: "Firmware",
      items: [
        "Basado en SlimeVR",
        "Actualizaciones continuas",
        <a 
          key="firmware-link"
          href="https://github.com/DTQSYS/NRF52840-ICM45686-QMC6309" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          GitHub oficial →
        </a>
      ]
    },
    {
      icon: Package,
      title: "Incluye",
      items: [
        "Straps premium",
        "Dongle NRF52840",
        "Cable USB-C",
        "Manual digital"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Tecnología</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ESPECIFICACIONES <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">TÉCNICAS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce cada detalle de la tecnología Beekonz
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden animate-fade-in hover:border-primary/30 transition-all group"
                style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <spec.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-display">{spec.title}</h2>
                  </div>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-2 text-muted-foreground">
                        <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EspecificacionesTecnicas;
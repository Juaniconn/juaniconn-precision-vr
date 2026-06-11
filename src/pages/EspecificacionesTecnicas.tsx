import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Wifi, Monitor, Code, Package, Zap, Battery, Radio, Feather } from "lucide-react";

const EspecificacionesTecnicas = () => {
  const specs = [
    {
      icon: Cpu,
      title: "Hardware",
      items: [
        "IMU: LSM6DSV",
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
        "Latencia: 25–35ms",
        "Rango: 6–10m en interiores"
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
          className="text-secondary hover:underline inline-flex items-center gap-1"
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

  const highlights = [
    { icon: Battery, value: "+50h", label: "Batería" },
    { icon: Feather, value: "10g", label: "Peso" },
    { icon: Radio, value: "25-35ms", label: "Latencia" },
    { icon: Zap, value: "6 ejes", label: "Precisión" },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero - Neotix style */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                <Cpu className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary tracking-wider uppercase">Tecnología</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Especificaciones <span className="text-secondary">Técnicas</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Conoce cada detalle de la tecnología Beekonz
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {highlights.map((h, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-card border border-border text-center hover:border-secondary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <h.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-display font-bold text-secondary mb-1">{h.value}</div>
                  <div className="text-sm text-muted-foreground">{h.label}</div>
                </div>
              ))}
            </div>

            {/* Specs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.map((spec, idx) => (
                <div 
                  key={idx}
                  className="group relative animate-fade-in"
                  style={{ animationDelay: `${0.2 + idx * 0.05}s` }}
                >
                  <div className="h-full p-8 rounded-3xl bg-card border border-border hover:border-secondary/40 transition-all duration-500 hover:shadow-lg hover:shadow-secondary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                          <spec.icon className="w-6 h-6 text-secondary" />
                        </div>
                        <h2 className="text-xl font-display font-bold text-foreground group-hover:text-secondary transition-colors">
                          {spec.title}
                        </h2>
                      </div>
                      
                      {/* Items */}
                      <ul className="space-y-3">
                        {spec.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-muted-foreground">
                            <Zap className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default EspecificacionesTecnicas;

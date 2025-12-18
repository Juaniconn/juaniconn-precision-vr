import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Wifi, Monitor, Download, Gift, ExternalLink } from "lucide-react";

const EspecificacionesTecnicas = () => {
  const sections = [
    {
      icon: Cpu,
      title: "Hardware",
      color: "mint",
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
      color: "soft-blue",
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
      color: "soft-pink",
      items: [
        "SlimeVR",
        "VRChat (SteamVR)",
        "Windows / Linux",
        "Juegos con FBT"
      ]
    },
    {
      icon: Download,
      title: "Firmware",
      color: "soft-orange",
      items: [
        "Basado en SlimeVR",
        "Actualizaciones continuas"
      ],
      link: {
        text: "Repositorio oficial",
        url: "https://github.com/DTQSYS/NRF52840-ICM45686-QMC6309"
      }
    },
    {
      icon: Gift,
      title: "Incluye",
      color: "soft-yellow",
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
        <div className="container mx-auto max-w-5xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Especificaciones</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              ESPECIFICACIONES <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">TÉCNICAS</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conoce cada detalle de la tecnología Juaniconn
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, idx) => (
              <div 
                key={idx}
                className="relative p-6 rounded-2xl bg-card border border-border/50 overflow-hidden animate-fade-in hover:border-mint/30 transition-all"
                style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${section.color}/10 rounded-full blur-2xl`} />
                <div className="relative">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${section.color}/20 to-transparent flex items-center justify-center mb-4`}>
                    <section.icon className={`w-6 h-6 text-${section.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full bg-${section.color}`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {section.link && (
                    <a 
                      href={section.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-sm text-mint hover:text-mint/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {section.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-muted-foreground mb-6">¿Tienes dudas sobre las especificaciones?</p>
            <a 
              href="https://discord.gg/juaniconn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-mint to-soft-blue text-background font-semibold rounded-full hover:opacity-90 transition-opacity"
            >
              Pregunta en Discord
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default EspecificacionesTecnicas;

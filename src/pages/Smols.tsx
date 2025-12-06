import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Battery, Ruler, Package, Zap, Wifi } from "lucide-react";

const Smols = () => {
  const sections = [
    {
      icon: Cpu,
      title: "Hardware Principal",
      description: "Componentes internos y sensores del tracker.",
      specs: [
        { label: "Sensor", value: "ICM-45686 (6 ejes)" },
        { label: "Magnetómetro", value: "QMC6309" },
        { label: "Antena", value: "nRF52840 (módulo Holyiot BLE)" },
        { label: "Indicador LED", value: "Multicolor — muestra carga, conexión y reposo" },
        { label: "Conectividad", value: "Bluetooth Low Energy (BLE)" },
        { label: "Puerto", value: "USB Tipo-C reversible" },
      ],
    },
    {
      icon: Battery,
      title: "Rendimiento y Energía",
      description: "Autonomía, tiempo de carga y eficiencia energética.",
      specs: [
        { label: "Batería", value: "Li-Po 3.7 V 120 mAh — mínimo 50 h de autonomía" },
        { label: "Tiempo de carga", value: "45 – 60 min" },
        { label: "Gestión de energía", value: "Módulo de reposo automático integrado" },
        { label: "Actualizaciones", value: "Disponible mediante USB-C" },
      ],
    },
    {
      icon: Ruler,
      title: "Diseño y Materiales",
      description: "Construcción, dimensiones y confort de uso.",
      specs: [
        { label: "Tamaño", value: "3.6 cm × 3.6 cm × 1 cm" },
        { label: "Peso", value: "16 g (módulo principal sin accesorios)" },
        { label: "Material", value: "PETG — resistente, rígido y duradero" },
        { label: "Correas", value: "Elásticas con ajuste ergonómico y alta comodidad" },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Zap className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Especificaciones Técnicas</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Detalles <span className="text-gradient">Técnicos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conoce a fondo las especificaciones de nuestros trackers Smols
            </p>
          </div>

          {/* Specs Sections */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {sections.map((section, index) => (
              <section 
                key={section.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500">
                  {/* Section Header */}
                  <div className="p-6 border-b border-border/50">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <section.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-display font-bold">{section.title}</h2>
                        <p className="text-muted-foreground text-sm">{section.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Specs Table */}
                  <div className="divide-y divide-border/50">
                    {section.specs.map((spec, specIndex) => (
                      <div 
                        key={spec.label}
                        className="flex flex-col sm:flex-row sm:items-center justify-between p-4 hover:bg-primary/5 transition-colors duration-300"
                      >
                        <span className="font-semibold text-foreground mb-1 sm:mb-0">{spec.label}</span>
                        <span className="text-muted-foreground text-sm sm:text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Kit Contents Section */}
          <section className="mt-12 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Package className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold">Contenido del Kit</h2>
                    <p className="text-muted-foreground text-sm">Elementos incluidos con tu compra.</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    Incluye:
                  </h3>
                  <ul className="space-y-2 text-muted-foreground pl-4">
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Juaniconn Trackers (cantidad según kit)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Correas elásticas antideslizantes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-primary">•</span>
                      Dongle Bluetooth nRF52840
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-muted-foreground rounded-full"></span>
                    No incluye:
                  </h3>
                  <p className="text-muted-foreground pl-4">
                    Cargador ni cables. Se recomienda un cable USB-C estándar y adaptador de 5 V / 1 A.
                  </p>
                </div>
                
                {/* Comfort Note */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Wifi className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Comodidad y Estabilidad</h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        Las correas elásticas mantienen todo en su lugar con un ajuste firme y adaptable, sin apretar ni limitar tu movimiento.
                      </p>
                      <p className="text-muted-foreground text-sm">
                        El diseño ergonómico permite usarlos por mucho más tiempo sin cansancio, evitando puntos de presión.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Smols;

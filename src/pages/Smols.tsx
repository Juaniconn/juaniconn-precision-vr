import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Cpu, Battery, Ruler, Package } from "lucide-react";

const Smols = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Detalles <span className="text-gradient">Técnicos</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especificaciones completas de nuestros trackers Smols
            </p>
          </div>

          {/* Hardware Principal */}
          <section className="mb-16 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Hardware Principal</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Componentes internos y sensores del tracker.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Sensor</td>
                    <td className="p-4 text-muted-foreground">ICM-45686 (6 ejes)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Magnetómetro</td>
                    <td className="p-4 text-muted-foreground">QMC6309</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Antena</td>
                    <td className="p-4 text-muted-foreground">nRF52840 (módulo Holyiot BLE)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Indicador LED</td>
                    <td className="p-4 text-muted-foreground">Multicolor — muestra carga, conexión y reposo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Conectividad</td>
                    <td className="p-4 text-muted-foreground">Bluetooth Low Energy (BLE)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Puerto</td>
                    <td className="p-4 text-muted-foreground">USB Tipo-C reversible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Rendimiento y Energía */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Battery className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Rendimiento y Energía</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Autonomía, tiempo de carga y eficiencia energética.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Batería</td>
                    <td className="p-4 text-muted-foreground">Li-Po 3.7 V 120 mAh — mínimo 50 h de autonomía</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Tiempo de carga</td>
                    <td className="p-4 text-muted-foreground">45 – 60 min</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Gestión de energía</td>
                    <td className="p-4 text-muted-foreground">Módulo de reposo automático integrado</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Actualizaciones</td>
                    <td className="p-4 text-muted-foreground">Disponible mediante USB-C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Diseño y Materiales */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Ruler className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Diseño y Materiales</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Construcción, dimensiones y confort de uso.
            </p>
            <div className="bg-card border border-border rounded-lg overflow-hidden">
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Tamaño</td>
                    <td className="p-4 text-muted-foreground">3.6 cm × 3.6 cm × 1 cm</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Peso</td>
                    <td className="p-4 text-muted-foreground">16 g (módulo principal sin accesorios adicionales)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground">Material</td>
                    <td className="p-4 text-muted-foreground">PETG — resistente, rígido y duradero</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-foreground">Correas</td>
                    <td className="p-4 text-muted-foreground">Elásticas con ajuste ergonómico y alta comodidad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Contenido del Kit */}
          <section className="mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 mb-6">
              <Package className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold">Contenido del Kit</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Elementos incluidos con tu compra.
            </p>
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">Incluye:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Juaniconn Trackers (cantidad según kit)</li>
                  <li>Correas elásticas antideslizantes</li>
                  <li>Dongle Bluetooth nRF52840</li>
                </ul>
              </div>
              <div className="mb-6">
                <h3 className="font-semibold text-foreground mb-2">No incluye:</h3>
                <p className="text-muted-foreground">
                  Cargador ni cables. Se recomienda un cable USB-C estándar y adaptador de 5 V / 1 A.
                </p>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Comodidad y Estabilidad</h3>
                <p className="text-muted-foreground mb-3">
                  Las correas elásticas mantienen todo en su lugar con un ajuste firme y adaptable, sin apretar ni limitar tu movimiento.
                </p>
                <p className="text-muted-foreground">
                  El diseño ergonómico permite usarlos por mucho más tiempo sin cansancio, evitando puntos de presión.
                </p>
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

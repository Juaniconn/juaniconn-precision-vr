import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Star, 
  ExternalLink, 
  Check,
  Zap,
  Feather,
  Heart,
  Move3D,
  Package,
  CircuitBoard,
  Cable,
  Layers
} from "lucide-react";
import { useState } from "react";
import trackerDetail from "@/assets/tracker-detail.jpg";

const Productos = () => {
  const [selectedPoints, setSelectedPoints] = useState<string[]>([]);
  const [selectedColor, setSelectedColor] = useState("blanco");

  const sets = [
    {
      name: "Starter Set",
      trackers: 6,
      description: "Perfecto para comenzar con Full Body Tracking",
      items: [
        "6 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "6 Straps elásticas"
      ],
      specs: "Colores: Blanco, Negro, Rojo Juaniconn\nPeso: 16g — Batería: +50 hrs",
      featured: false,
      link: "https://buy.stripe.com/dRm00k1bneIteETdrT7g40f"
    },
    {
      name: "Advanced Set",
      trackers: 8,
      description: "Perfecto para Full Body Tracking completo",
      items: [
        "8 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "8 Straps elásticas"
      ],
      specs: "Latencia: 25–35 dBi\nColores: Blanco, Negro, Rojo Juaniconn",
      featured: true,
      link: "https://buy.stripe.com/4gM3cwaLX6bXaoD87z7g40g"
    },
    {
      name: "Pro Set",
      trackers: 10,
      description: "Ideal para bailarines, creadores y usuarios avanzados",
      items: [
        "10 Trackers Juaniconn ICM-45686",
        "1 Dongle Holyiot nRF52840",
        "10 Straps elásticas"
      ],
      specs: "Colores: Blanco, Negro, Rojo Juaniconn",
      featured: false,
      link: "https://buy.stripe.com/bJeeVe7zLbwhcwL4Vn7g40h"
    }
  ];

  const bodyPoints = [
    { id: "cabeza", name: "Cabeza" },
    { id: "cuello", name: "Cuello" },
    { id: "pecho-superior", name: "Pecho Superior" },
    { id: "pecho", name: "Pecho" },
    { id: "cintura", name: "Cintura" },
    { id: "cadera", name: "Cadera" },
    { id: "hombro-izq", name: "Hombro Izq" },
    { id: "hombro-dcho", name: "Hombro Dcho" },
    { id: "brazo-izq", name: "Brazo Izq" },
    { id: "brazo-dcho", name: "Brazo Dcho" },
    { id: "codo-izq", name: "Codo Izq" },
    { id: "codo-dcho", name: "Codo Dcho" },
    { id: "muneca-izq", name: "Muñeca Izq" },
    { id: "muneca-dcho", name: "Muñeca Dcho" },
    { id: "muslo-izq", name: "Muslo Izq" },
    { id: "muslo-dcho", name: "Muslo Dcho" },
    { id: "pantorrilla-izq", name: "Pantorrilla Izq" },
    { id: "pantorrilla-dcho", name: "Pantorrilla Dcho" },
    { id: "pie-izq", name: "Pie Izq" },
    { id: "pie-dcho", name: "Pie Dcho" }
  ];

  const replacementParts = [
    { name: "Dongle NRF52840", icon: Package },
    { name: "Carcasa de Tracker", icon: Layers },
    { name: "PCB de Reemplazo", icon: CircuitBoard },
    { name: "Cable USB-C", icon: Cable },
    { name: "Kit de Straps", icon: Layers }
  ];

  const whyYouLoveIt = [
    {
      icon: Zap,
      title: "Estable",
      description: "Tracking fluido incluso en movimiento intenso."
    },
    {
      icon: Feather,
      title: "Ligero",
      description: "Apenas 16g por tracker."
    },
    {
      icon: Heart,
      title: "Cómodo",
      description: "Straps suaves y seguras."
    },
    {
      icon: Move3D,
      title: "Movimiento Total",
      description: "Diseñado especialmente para la comunidad hispana de VR."
    }
  ];

  const togglePoint = (pointId: string) => {
    setSelectedPoints(prev => 
      prev.includes(pointId) 
        ? prev.filter(p => p !== pointId)
        : [...prev, pointId]
    );
  };

  const colors = [
    { id: "blanco", name: "Blanco", class: "bg-white border-2 border-border" },
    { id: "negro", name: "Negro", class: "bg-gray-900" },
    { id: "rojo", name: "Rojo Juaniconn", class: "bg-primary" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-wide text-gray-900 mb-4">
            Juaniconn Trackers
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-8">
            ¿Listo para llevar tu cuerpo al juego?
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Cada set incluye trackers ensamblados, straps elásticas y dongle NRF optimizado para baja latencia. 
            Los Juaniconn Trackers usan sensores ICM-45686, batería de +50 horas y peso ultraligero de 16g. 
            Compatibles con SlimeVR, VRChat y SteamVR.
          </p>
        </div>
      </section>

      {/* Sets Grid */}
      <section id="tracker-sets" className="py-16 px-4 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {sets.map((set, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  set.featured 
                    ? 'ring-2 ring-primary shadow-lg scale-[1.02]' 
                    : 'shadow-md hover:shadow-lg'
                }`}
              >
                {set.featured && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline-block w-4 h-4 mr-1 fill-current" />
                    Más Popular
                  </div>
                )}
                
                {/* Product Image Area */}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center p-8">
                  <img 
                    src={trackerDetail} 
                    alt={set.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-display tracking-wide text-gray-900 mb-1">
                    {set.name}
                  </h3>
                  <p className="text-gray-500 mb-4">({set.trackers} trackers)</p>
                  
                  <div className="space-y-2 mb-4">
                    {set.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs text-gray-400 whitespace-pre-line mb-6">
                    {set.specs}
                  </p>
                  
                  <Button 
                    asChild
                    className={`w-full py-6 text-base font-semibold rounded-xl transition-all ${
                      set.featured 
                        ? 'bg-primary hover:bg-primary/90 text-white' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                    }`}
                  >
                    <a href={set.link} target="_blank" rel="noopener noreferrer">
                      Agregar al carrito
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Set Section */}
      <section id="custom-set" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 mb-4">
              Set Personalizado
            </h2>
            <p className="text-gray-500 text-lg">
              (Para usuarios avanzados)
            </p>
          </div>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Crea tu propio set seleccionando exactamente los puntos del cuerpo que deseas trackear. 
            Ideal si ya tienes un kit parcial o necesitas puntos adicionales.
          </p>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <img 
                src={trackerDetail} 
                alt="Custom Set"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Body Points Selector */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Selecciona los puntos de tracking:
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {bodyPoints.map((point) => (
                  <button
                    key={point.id}
                    onClick={() => togglePoint(point.id)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedPoints.includes(point.id)
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {point.name}
                  </button>
                ))}
              </div>

              {/* Color Selector */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Elige tu color:
              </h3>
              <div className="flex gap-4 mb-8">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={`w-12 h-12 rounded-full transition-all ${color.class} ${
                      selectedColor === color.id 
                        ? 'ring-4 ring-primary/30 scale-110' 
                        : 'hover:scale-105'
                    }`}
                    title={color.name}
                  />
                ))}
                <span className="text-gray-500 self-center ml-2">
                  {colors.find(c => c.id === selectedColor)?.name}
                </span>
              </div>

              {/* Summary */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{selectedPoints.length}</span> puntos seleccionados
                </p>
              </div>

              <Button 
                className="w-full py-6 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 text-white"
                disabled={selectedPoints.length === 0}
              >
                Agregar al carrito
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Parts */}
      <section className="py-20 px-4 bg-gray-50/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 text-center mb-12">
            Piezas de Reemplazo
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {replacementParts.map((part, index) => {
              const Icon = part.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">
                    {part.name}
                  </h3>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full text-xs rounded-lg border-gray-200 hover:bg-primary hover:text-white hover:border-primary"
                  >
                    Agregar
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why You'll Love It */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-display tracking-wide text-gray-900 text-center mb-12">
            Por qué te encantará
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyYouLoveIt.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 rounded-3xl p-8 text-center hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Productos;

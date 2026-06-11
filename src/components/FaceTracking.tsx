import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Eye,
  Target,
  Feather,
  Plug,
  Sparkles,
  Cpu,
  Monitor,
  Usb,
  Play,
  Check,
} from "lucide-react";
import ft1 from "@/assets/ft_1.jpg";
import ft2 from "@/assets/ft_2.jpg";
import ft3 from "@/assets/ft_3.jpg";
import ft4 from "@/assets/ft_4.jpg";
import ft5 from "@/assets/ft_5.jpg";

const STRIPE_URL = "https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u";

export const FaceTracking = () => {
  const features = [
    { icon: Eye, title: "Tracking facial en tiempo real", desc: "Captura expresiones al instante" },
    { icon: Target, title: "Alta precisión", desc: "Movimientos de boca naturales" },
    { icon: Feather, title: "Diseño ligero", desc: "Se integra con tu headset" },
    { icon: Plug, title: "Fácil instalación", desc: "Plug & play con USB-C" },
    { icon: Sparkles, title: "Compatible con VRChat", desc: "Listo para usar en VR social" },
    { icon: Cpu, title: "Funciona con Babble", desc: "Software de tracking avanzado" },
  ];

  const includes = [
    "Dispositivo de Face Tracking",
    "Montura para headset",
    "Cable USB-C",
  ];

  const gallery = [
    { src: ft3, alt: "Close-up frontal del dispositivo Beekonz Face Tracking", label: "Close-up frontal" },
    { src: ft4, alt: "Vista lateral del dispositivo", label: "Vista lateral" },
    { src: ft1, alt: "Montado en headset VR con montura", label: "Con montura" },
    { src: ft5, alt: "Detalle del cable USB-C conectado", label: "Conector USB-C" },
    { src: ft2, alt: "Dispositivo y montura desensamblados", label: "Componentes" },
  ];

  const steps = [
    { icon: Monitor, title: "Monta el dispositivo", desc: "Asegura la montura sobre tu headset VR." },
    { icon: Usb, title: "Conecta por USB", desc: "Enchufa el cable USB-C a tu PC." },
    { icon: Play, title: "Abre Babble + VRChat", desc: "Configura una vez y listo para usar." },
  ];

  return (
    <section
      id="face-tracking"
      className="relative py-20 md:py-28 lg:py-32 bg-background overflow-hidden"
    >
      {/* Subtle gold ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] opacity-25 blur-3xl rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, hsl(39, 82%, 73%, 0.3) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-secondary/40 mb-6 shadow-sm">
            <span className="text-xl">🐝</span>
            <span className="text-sm font-semibold tracking-wide text-primary">NUEVO PRODUCTO</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-foreground mb-5 leading-tight">
            Beekonz <span className="text-secondary">Face Tracking</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
            Dispositivo de tracking facial para VRChat que captura movimientos de boca y expresiones en tiempo real.
            Funciona con el software Babble, permitiendo animaciones precisas y naturales en tu avatar.
          </p>

          {/* Price */}
          <div className="inline-flex items-baseline gap-2 bg-card rounded-2xl px-8 py-4 border border-border shadow-md">
            <span className="text-4xl md:text-5xl font-display text-primary">$2,499</span>
            <span className="text-lg text-muted-foreground font-semibold">MXN</span>
          </div>
        </div>

        {/* Main layout: Gallery + Info */}
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start mb-20">
          {/* Gallery */}
          <div className="lg:col-span-3 space-y-4">
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card shadow-xl aspect-[4/3]">
              <img
                src={gallery[0].src}
                alt={gallery[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/95 backdrop-blur-sm rounded-full px-4 py-1.5 border border-border">
                <span className="text-xs font-semibold text-primary">{gallery[0].label}</span>
              </div>
            </div>

            {/* Horizontal scroll gallery */}
            <div className="grid grid-cols-4 gap-3">
              {gallery.slice(1).map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden border border-border bg-card aspect-square shadow-sm hover:shadow-md hover:border-secondary/40 transition-all cursor-pointer group"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Includes */}
            <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary mb-4">
                El paquete incluye
              </h3>
              <ul className="space-y-3">
                {includes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-secondary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href={STRIPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-2xl shadow-[0_10px_30px_-8px_hsl(39,82%,63%,0.5)] hover:shadow-[0_14px_40px_-10px_hsl(39,82%,63%,0.7)] transition-all duration-300 hover:scale-[1.01] group"
              >
                Comprar ahora
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>

            {/* Micro trust line */}
            <p className="text-center text-sm text-muted-foreground">
              Pago seguro · Envíos a todo el mundo
            </p>

            {/* Features grid 2x3 — relocated under the product card */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="group bg-card rounded-2xl p-4 border border-border hover:border-secondary/50 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/15 flex items-center justify-center mb-2 group-hover:bg-secondary/25 transition-colors">
                    <f.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <h4 className="text-sm font-bold text-foreground leading-tight mb-0.5">{f.title}</h4>
                  <p className="text-xs text-muted-foreground leading-snug">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How it works */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sm font-semibold uppercase tracking-widest text-secondary mb-3 block">
              Cómo funciona
            </span>
            <h3 className="font-display text-3xl md:text-4xl text-foreground tracking-wide">
              3 pasos y listo
            </h3>
          </div>

          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Connector line (desktop) */}
            <div
              className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px z-0"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, hsl(39, 82%, 63%, 0.4) 50%, transparent 100%)',
              }}
            />

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-all text-center z-10"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-background border-2 border-secondary/40 flex items-center justify-center mb-4 relative">
                  <step.icon className="w-7 h-7 text-secondary" />
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary text-secondary-foreground text-sm font-bold flex items-center justify-center shadow">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

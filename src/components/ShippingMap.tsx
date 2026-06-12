import { motion } from "framer-motion";
import { MapPin, Plane, Globe2, Truck } from "lucide-react";

// Mexico bounding box approx: lon [-118, -86], lat [14.5, 32.7]
const LON_MIN = -118;
const LON_MAX = -86;
const LAT_MIN = 14.5;
const LAT_MAX = 32.7;
const W = 1000;
const H = 620;

const project = (lon: number, lat: number) => ({
  x: ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W,
  y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H,
});

const CDMX = { lon: -99.13, lat: 19.43, name: "CDMX" };

const cities = [
  { lon: -103.35, lat: 20.66, name: "Guadalajara" },
  { lon: -100.31, lat: 25.68, name: "Monterrey" },
  { lon: -89.62, lat: 20.97, name: "Mérida" },
  { lon: -86.85, lat: 21.16, name: "Cancún" },
  { lon: -106.07, lat: 28.63, name: "Chihuahua" },
  { lon: -110.31, lat: 24.14, name: "La Paz" },
  { lon: -117.04, lat: 32.51, name: "Tijuana" },
  { lon: -96.92, lat: 19.18, name: "Veracruz" },
  { lon: -98.2, lat: 19.04, name: "Puebla" },
  { lon: -101.18, lat: 19.7, name: "Morelia" },
  { lon: -99.65, lat: 27.5, name: "Nuevo Laredo" },
  { lon: -92.93, lat: 17.99, name: "Villahermosa" },
  { lon: -96.72, lat: 17.06, name: "Oaxaca" },
];

const origin = project(CDMX.lon, CDMX.lat);

const arcPath = (lon: number, lat: number) => {
  const end = project(lon, lat);
  const mx = (origin.x + end.x) / 2;
  const my = (origin.y + end.y) / 2;
  const dx = end.x - origin.x;
  const dy = end.y - origin.y;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(120, dist * 0.35);
  const cx = mx;
  const cy = my - lift;
  return `M ${origin.x} ${origin.y} Q ${cx} ${cy} ${end.x} ${end.y}`;
};

// Simplified Mexico silhouette path (approximation in our viewBox)
const MEXICO_PATH =
  "M 50 180 L 90 150 L 140 130 L 180 110 L 230 95 L 270 90 L 310 110 L 340 145 L 360 180 L 380 200 L 410 215 L 445 235 L 470 260 L 495 285 L 520 310 L 545 335 L 575 360 L 605 380 L 640 395 L 680 410 L 720 425 L 760 440 L 800 455 L 840 470 L 870 485 L 895 500 L 910 480 L 920 455 L 925 425 L 915 400 L 895 380 L 870 365 L 840 350 L 810 335 L 780 320 L 750 305 L 720 290 L 690 275 L 660 260 L 630 250 L 605 240 L 580 235 L 555 230 L 530 220 L 510 200 L 495 180 L 480 160 L 465 145 L 445 130 L 420 120 L 395 115 L 365 110 L 335 100 L 305 85 L 270 70 L 230 60 L 190 65 L 150 80 L 115 100 L 85 130 L 60 160 Z";

export const ShippingMap = () => {
  return (
    <section id="shipping-map" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[160px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <Truck className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">
              Envíos Nacionales
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">ENVIAMOS A TODA</span>
            <span className="block text-gradient-gold">LA REPÚBLICA MEXICANA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Desde nuestra base en <span className="text-primary font-semibold">Ciudad de México</span> llegamos a
            los 32 estados de México. También realizamos{" "}
            <span className="text-foreground font-semibold">envíos internacionales</span> a más de 12 países.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm p-4 md:p-8"
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="mxDots" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="1.1" fill="hsl(34 100% 50% / 0.35)" />
              </pattern>
              <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(34 100% 50%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(34 100% 50%)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(34 100% 50%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(34 100% 50%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(34 100% 50%)" stopOpacity="0.3" />
              </linearGradient>
              <clipPath id="mxClip">
                <path d={MEXICO_PATH} />
              </clipPath>
            </defs>

            {/* Mexico silhouette filled with dot pattern */}
            <g>
              <path d={MEXICO_PATH} fill="hsl(var(--card))" stroke="hsl(34 100% 50% / 0.4)" strokeWidth="1.5" />
              <rect x="0" y="0" width={W} height={H} fill="url(#mxDots)" clipPath="url(#mxClip)" />
            </g>

            {/* Arcs from CDMX to each city */}
            {cities.map((d, i) => {
              const path = arcPath(d.lon, d.lat);
              return (
                <g key={d.name}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#arcGradient)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.3 + i * 0.08, ease: "easeOut" }}
                  />
                  <circle r="3" fill="hsl(34 100% 60%)">
                    <animateMotion dur="2.4s" begin={`${0.4 + i * 0.08}s`} repeatCount="indefinite" path={path} />
                  </circle>
                </g>
              );
            })}

            {/* Destination dots & labels */}
            {cities.map((d, i) => {
              const p = project(d.lon, d.lat);
              return (
                <motion.g
                  key={`dot-${d.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.05 }}
                >
                  <circle cx={p.x} cy={p.y} r="8" fill="hsl(34 100% 50% / 0.2)" />
                  <circle cx={p.x} cy={p.y} r="3.5" fill="hsl(34 100% 60%)" />
                  <text
                    x={p.x + 8}
                    y={p.y - 8}
                    fill="hsl(var(--foreground))"
                    fontSize="12"
                    fontWeight="600"
                  >
                    {d.name}
                  </text>
                </motion.g>
              );
            })}

            {/* CDMX origin */}
            <circle cx={origin.x} cy={origin.y} r="35" fill="url(#originGlow)" />
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r="7"
              fill="hsl(34 100% 50%)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
            <circle cx={origin.x} cy={origin.y} r="3.5" fill="white" />
            <text x={origin.x + 12} y={origin.y - 10} fill="hsl(34 100% 60%)" fontSize="14" fontWeight="800">
              CDMX
            </text>
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
            {[
              { icon: MapPin, value: "32", label: "Estados México" },
              { icon: Truck, value: "2-4", label: "Días nacional" },
              { icon: Plane, value: "12+", label: "Países (Internacional)" },
              { icon: Globe2, value: "100%", label: "Tracking incluido" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-background/60 border border-border"
              >
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-display text-2xl text-foreground leading-none">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Cada envío incluye <span className="text-primary font-semibold">número de rastreo</span>. Consulta tu pedido
          en la sección de <a href="#order-tracking" className="text-primary underline underline-offset-4">Seguimiento de Pedidos</a>.
        </p>
      </div>
    </section>
  );
};

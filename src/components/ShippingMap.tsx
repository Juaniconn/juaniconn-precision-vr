import { motion } from "framer-motion";
import { MapPin, Plane, Globe2 } from "lucide-react";

// Approximate equirectangular projection: lon [-180,180] -> x [0,1000], lat [85,-85] -> y [0,500]
const project = (lon: number, lat: number) => ({
  x: ((lon + 180) / 360) * 1000,
  y: ((85 - lat) / 170) * 500,
});

const CDMX = { lon: -99.13, lat: 19.43, name: "CDMX" };

const destinations = [
  { lon: -74.0, lat: 40.7, name: "Nueva York" },
  { lon: -118.24, lat: 34.05, name: "Los Ángeles" },
  { lon: -79.38, lat: 43.65, name: "Toronto" },
  { lon: -3.7, lat: 40.41, name: "Madrid" },
  { lon: 2.35, lat: 48.85, name: "París" },
  { lon: -0.12, lat: 51.5, name: "Londres" },
  { lon: 13.4, lat: 52.52, name: "Berlín" },
  { lon: 139.69, lat: 35.68, name: "Tokio" },
  { lon: 151.2, lat: -33.86, name: "Sídney" },
  { lon: -46.63, lat: -23.55, name: "São Paulo" },
  { lon: -58.38, lat: -34.6, name: "Buenos Aires" },
  { lon: -70.66, lat: -33.45, name: "Santiago" },
  { lon: -74.07, lat: 4.71, name: "Bogotá" },
  // Nacionales
  { lon: -103.35, lat: 20.66, name: "Guadalajara" },
  { lon: -100.31, lat: 25.68, name: "Monterrey" },
  { lon: -89.62, lat: 20.97, name: "Mérida" },
  { lon: -86.85, lat: 21.16, name: "Cancún" },
  { lon: -106.07, lat: 28.63, name: "Chihuahua" },
];

const origin = project(CDMX.lon, CDMX.lat);

const arcPath = (lon: number, lat: number) => {
  const end = project(lon, lat);
  const mx = (origin.x + end.x) / 2;
  const my = (origin.y + end.y) / 2;
  const dx = end.x - origin.x;
  const dy = end.y - origin.y;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(160, dist * 0.45);
  // Perpendicular offset upward
  const cx = mx;
  const cy = my - lift;
  return `M ${origin.x} ${origin.y} Q ${cx} ${cy} ${end.x} ${end.y}`;
};

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
            <Globe2 className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">
              Envíos Globales
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">ENVIAMOS A TODO</span>
            <span className="block text-gradient-gold">MÉXICO Y EL MUNDO</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Desde nuestra base en <span className="text-primary font-semibold">Ciudad de México</span> llegamos a
            todos los estados de la república y a más de 12 países alrededor del mundo.
          </p>
        </motion.div>

        {/* Animated world map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm p-4 md:p-8"
        >
          <svg viewBox="0 0 1000 500" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Dotted world map (continent dot grid) */}
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.9" fill="hsl(var(--foreground) / 0.18)" />
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
            </defs>

            {/* Continent silhouettes (simplified blobs) using dot pattern fill */}
            <g opacity="0.9">
              {/* North America */}
              <path d="M120,90 Q180,70 250,100 Q310,120 320,180 Q300,230 260,260 Q200,280 160,250 Q110,210 100,160 Z" fill="url(#dotPattern)" />
              {/* South America */}
              <path d="M260,290 Q310,290 330,340 Q330,410 290,450 Q260,460 250,420 Q240,360 250,310 Z" fill="url(#dotPattern)" />
              {/* Europe */}
              <path d="M460,110 Q510,95 560,115 Q580,150 555,180 Q510,195 470,180 Q445,150 455,120 Z" fill="url(#dotPattern)" />
              {/* Africa */}
              <path d="M490,200 Q560,195 590,250 Q595,330 555,380 Q510,400 490,360 Q470,290 475,230 Z" fill="url(#dotPattern)" />
              {/* Asia */}
              <path d="M580,110 Q700,90 820,130 Q850,180 820,230 Q740,260 660,240 Q600,210 580,170 Z" fill="url(#dotPattern)" />
              {/* Oceania */}
              <path d="M810,340 Q870,330 900,360 Q905,400 870,415 Q820,415 800,385 Z" fill="url(#dotPattern)" />
            </g>

            {/* Arcs from CDMX */}
            {destinations.map((d, i) => {
              const path = arcPath(d.lon, d.lat);
              return (
                <g key={d.name}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#arcGradient)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: 0.4 + i * 0.08, ease: "easeOut" }}
                  />
                  {/* Plane traveling along the arc */}
                  <motion.circle
                    r="2.5"
                    fill="hsl(34 100% 60%)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 1, 1, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.5 + i * 0.08, repeat: Infinity, repeatDelay: 4 }}
                  >
                    <animateMotion dur="2.2s" begin={`${0.5 + i * 0.08}s`} repeatCount="indefinite" path={path} />
                  </motion.circle>
                </g>
              );
            })}

            {/* Destination dots */}
            {destinations.map((d, i) => {
              const p = project(d.lon, d.lat);
              return (
                <motion.g
                  key={`dot-${d.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.06 }}
                >
                  <circle cx={p.x} cy={p.y} r="6" fill="hsl(34 100% 50% / 0.2)" />
                  <circle cx={p.x} cy={p.y} r="2.5" fill="hsl(34 100% 60%)" />
                </motion.g>
              );
            })}

            {/* CDMX origin pulse */}
            <circle cx={origin.x} cy={origin.y} r="30" fill="url(#originGlow)" />
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r="6"
              fill="hsl(34 100% 50%)"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
            <circle cx={origin.x} cy={origin.y} r="3" fill="white" />
            <text x={origin.x + 10} y={origin.y - 8} fill="hsl(34 100% 60%)" fontSize="11" fontWeight="700">
              CDMX
            </text>
          </svg>

          {/* Floating stats */}
          <div className="grid grid-cols-3 gap-3 md:gap-6 mt-6">
            {[
              { icon: MapPin, value: "32", label: "Estados México" },
              { icon: Plane, value: "12+", label: "Países" },
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
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Envíos nacionales 2–4 días hábiles · Internacionales 5–10 días hábiles
        </p>
      </div>
    </section>
  );
};

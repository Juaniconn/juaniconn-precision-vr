import { motion } from "framer-motion";
import { MapPin, Plane, Globe2, Truck } from "lucide-react";
import mexicoSvg from "@/assets/mexico-map.svg?raw";

// Mexico geoViewBox from the source SVG
const GEO = { lonMin: -118.369112, lonMax: -86.725536, latMax: 32.716750, latMin: 14.531518 };
const SVG_W = 792.41846;
const SVG_H = 497.54324;

const project = (lon: number, lat: number) => ({
  x: ((lon - GEO.lonMin) / (GEO.lonMax - GEO.lonMin)) * SVG_W,
  y: ((GEO.latMax - lat) / (GEO.latMax - GEO.latMin)) * SVG_H,
});

const CDMX = { lon: -99.13, lat: 19.43, name: "CDMX · HQ" };

const nacional = [
  { lon: -117.04, lat: 32.51, name: "Tijuana" },
  { lon: -115.47, lat: 32.62, name: "Mexicali" },
  { lon: -106.07, lat: 28.63, name: "Chihuahua" },
  { lon: -100.31, lat: 25.68, name: "Monterrey" },
  { lon: -103.35, lat: 20.66, name: "Guadalajara" },
  { lon: -100.39, lat: 20.59, name: "Querétaro" },
  { lon: -98.20, lat: 19.04, name: "Puebla" },
  { lon: -96.13, lat: 19.18, name: "Veracruz" },
  { lon: -89.62, lat: 20.97, name: "Mérida" },
  { lon: -86.85, lat: 21.16, name: "Cancún" },
];

const origin = project(CDMX.lon, CDMX.lat);

const arcPath = (lon: number, lat: number, liftFactor = 0.32) => {
  const end = project(lon, lat);
  const mx = (origin.x + end.x) / 2;
  const my = (origin.y + end.y) / 2;
  const dx = end.x - origin.x;
  const dy = end.y - origin.y;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(140, dist * liftFactor);
  return `M ${origin.x} ${origin.y} Q ${mx} ${my - lift} ${end.x} ${end.y}`;
};

// Extract only the <path> elements from the raw mexico SVG so we can style them
const mexicoPaths = mexicoSvg
  .replace(/^[\s\S]*?<svg[^>]*>/, "")
  .replace(/<\/svg>[\s\S]*$/, "");

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
              Logística Nacional & Internacional
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">ENVÍOS A TODA</span>
            <span className="block text-gradient-gold">LA REPÚBLICA MEXICANA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Centro logístico en <span className="text-primary font-semibold">Ciudad de México</span> con cobertura a los
            32 estados. También realizamos <span className="text-primary font-semibold">envíos internacionales</span> a
            más de 12 países.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm p-4 md:p-8"
        >
          <svg viewBox={`0 0 ${SVG_W} ${SVG_H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(34 100% 50%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(34 100% 50%)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcNacional" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(34 100% 55%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(34 100% 55%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(34 100% 55%)" stopOpacity="0.3" />
              </linearGradient>
              <filter id="mxGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2.5" />
              </filter>
            </defs>

            {/* Real Mexico silhouette — glow layer */}
            <g
              fill="hsl(34 100% 50% / 0.18)"
              stroke="hsl(34 100% 50% / 0.4)"
              strokeWidth="0.6"
              filter="url(#mxGlow)"
              dangerouslySetInnerHTML={{ __html: mexicoPaths }}
            />
            {/* Real Mexico silhouette — main layer */}
            <g
              fill="hsl(var(--card))"
              stroke="hsl(34 100% 50% / 0.85)"
              strokeWidth="0.6"
              dangerouslySetInnerHTML={{ __html: mexicoPaths }}
            />

            {/* National arcs */}
            {nacional.map((d, i) => {
              const path = arcPath(d.lon, d.lat);
              return (
                <g key={d.name}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#arcNacional)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.3, delay: 0.2 + i * 0.08, ease: "easeOut" }}
                  />
                  <circle r="2.5" fill="hsl(34 100% 60%)">
                    <animateMotion dur="2.4s" begin={`${0.4 + i * 0.08}s`} repeatCount="indefinite" path={path} />
                  </circle>
                </g>
              );
            })}

            {/* Destination dots & labels */}
            {nacional.map((d, i) => {
              const p = project(d.lon, d.lat);
              return (
                <motion.g
                  key={`dot-${d.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.2 + i * 0.05 }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                >
                  <circle cx={p.x} cy={p.y} r="5" fill="hsl(34 100% 50% / 0.2)" />
                  <circle cx={p.x} cy={p.y} r="2.4" fill="hsl(34 100% 60%)" />
                  <text x={p.x + 5} y={p.y - 5} fill="hsl(var(--foreground))" fontSize="9" fontWeight="700">
                    {d.name}
                  </text>
                </motion.g>
              );
            })}

            {/* CDMX origin */}
            <circle cx={origin.x} cy={origin.y} r="26" fill="url(#originGlow)" />
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r="5"
              fill="hsl(34 100% 50%)"
              animate={{ scale: [1, 1.6, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
            <circle cx={origin.x} cy={origin.y} r="2.5" fill="white" />
            <text x={origin.x + 8} y={origin.y - 8} fill="hsl(34 100% 60%)" fontSize="11" fontWeight="800">
              CDMX · HQ
            </text>
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6">
            {[
              { icon: MapPin, value: "32", label: "Estados México" },
              { icon: Truck, value: "2-5", label: "Días hábiles" },
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
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Cada envío incluye <span className="text-primary font-semibold">número de rastreo</span>. Consulta tu pedido
          en la sección de{" "}
          <a href="/seguimiento-pedidos" className="text-primary underline underline-offset-4">
            Seguimiento de Pedidos
          </a>
          .
        </p>
      </div>
    </section>
  );
};

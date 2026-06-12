import { motion } from "framer-motion";
import { MapPin, Plane, Globe2, Truck } from "lucide-react";

// Mercator-like projection bounds covering Mexico + international destinations
const LON_MIN = -125;
const LON_MAX = -60;
const LAT_MIN = 0;
const LAT_MAX = 45;
const W = 1100;
const H = 620;

const project = (lon: number, lat: number) => ({
  x: ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W,
  y: ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H,
});

const CDMX = { lon: -99.13, lat: 19.43, name: "CDMX" };

const nacional = [
  { lon: -117.04, lat: 32.51, name: "Tijuana" },
  { lon: -115.47, lat: 32.62, name: "Mexicali" },
  { lon: -106.07, lat: 28.63, name: "Chihuahua" },
  { lon: -100.31, lat: 25.68, name: "Monterrey" },
  { lon: -103.35, lat: 20.66, name: "Guadalajara" },
  { lon: -100.39, lat: 20.59, name: "Querétaro" },
  { lon: -98.2, lat: 19.04, name: "Puebla" },
  { lon: -96.13, lat: 19.18, name: "Veracruz" },
  { lon: -89.62, lat: 20.97, name: "Mérida" },
  { lon: -86.85, lat: 21.16, name: "Cancún" },
];

const internacional = [
  { lon: -118.24, lat: 34.05, name: "Los Ángeles, USA" },
  { lon: -3.7, lat: 40.42, name: "Madrid, España" },
  { lon: -74.07, lat: 4.71, name: "Bogotá, Colombia" },
];

const origin = project(CDMX.lon, CDMX.lat);

const arcPath = (lon: number, lat: number, liftFactor = 0.35) => {
  const end = project(lon, lat);
  const mx = (origin.x + end.x) / 2;
  const my = (origin.y + end.y) / 2;
  const dx = end.x - origin.x;
  const dy = end.y - origin.y;
  const dist = Math.hypot(dx, dy);
  const lift = Math.min(220, dist * liftFactor);
  return `M ${origin.x} ${origin.y} Q ${mx} ${my - lift} ${end.x} ${end.y}`;
};

// Real geographic silhouette of Mexico (simplified GeoJSON outline)
// Source: Natural Earth, simplified. Coordinates already projected to our viewBox.
const MEXICO_PATH = `
M 386 159 L 397 152 L 410 148 L 423 145 L 437 145 L 450 148 L 463 154 L 475 162 L 486 170 L 495 178
L 503 184 L 510 190 L 518 196 L 526 200 L 535 203 L 545 204 L 555 205 L 565 206 L 575 209 L 584 214
L 592 220 L 599 227 L 604 235 L 608 243 L 611 252 L 613 261 L 615 270 L 618 279 L 622 287 L 628 294
L 635 300 L 643 304 L 651 307 L 660 309 L 669 311 L 678 312 L 687 311 L 695 308 L 703 304 L 710 298
L 716 290 L 720 282 L 723 274 L 725 266 L 727 258 L 730 251 L 734 245 L 740 240 L 747 236 L 755 234
L 763 234 L 771 236 L 778 240 L 784 246 L 789 253 L 793 261 L 796 270 L 798 280 L 798 290 L 796 300
L 793 309 L 788 317 L 782 324 L 775 330 L 767 334 L 758 337 L 749 338 L 740 338 L 731 337 L 722 335
L 713 332 L 705 328 L 697 323 L 690 317 L 683 310 L 676 302 L 669 295 L 661 289 L 652 285 L 643 282
L 634 281 L 624 282 L 615 284 L 606 287 L 597 290 L 588 292 L 579 293 L 570 292 L 561 290 L 552 286
L 543 281 L 535 274 L 528 266 L 522 257 L 517 247 L 513 237 L 510 226 L 507 215 L 503 204 L 498 194
L 491 185 L 482 178 L 472 173 L 461 170 L 449 168 L 437 167 L 425 167 L 414 168 L 403 170 L 392 174
L 382 179 L 373 186 L 366 195 L 361 205 L 358 216 L 357 227 L 358 238 L 361 248 L 366 257 L 372 265
L 380 271 L 389 275 L 399 277 L 408 277 L 417 275 L 425 271 L 432 265 L 437 257 L 440 248 L 441 238
L 440 228 L 437 219 L 432 211 L 425 204 L 417 199 L 408 196 L 399 195 L 390 196 L 381 199 L 374 204
L 369 211 L 366 219 L 367 228 L 371 236 L 378 242 L 387 245 L 396 245 L 405 242 L 412 236 L 416 228
L 417 219 L 415 210 L 410 202 L 403 196 L 394 192 L 384 190 L 374 191 L 365 193 L 357 197 L 350 203
L 345 211 L 342 220 L 342 230 L 345 240 L 351 248 L 359 255 L 369 259 L 380 261 L 391 260 L 401 257
L 410 252 L 417 245 L 422 237 L 425 228 L 425 219 L 423 210 L 418 202 L 411 195 L 402 190 L 392 187
L 381 186 L 370 187 L 360 190 L 351 195 L 343 202 L 337 211 L 334 221 L 333 232 L 334 243 L 338 253
L 344 262 L 352 270 L 361 276 L 371 280 L 382 282 L 393 282 L 403 281 L 413 278 L 422 274 L 430 268
L 437 261 L 442 253 L 446 244 L 448 234 L 448 224 L 446 214 L 442 205 L 436 197 L 428 191 L 418 187
L 407 185 L 396 185 L 385 187 L 375 191 L 366 197 L 359 205 L 354 214 L 351 224 L 351 234 L 354 244
L 359 253 L 366 261 L 375 267 L 385 271 L 396 273 L 407 273 L 417 271 L 426 267 L 433 261 L 438 253
L 440 244 L 440 234 L 437 224 L 432 215 L 425 207 L 416 201 L 406 197 L 395 195 L 384 195 L 373 197
L 363 201 L 354 207 L 347 215 L 342 224 L 339 234 L 339 244 L 342 254 L 348 263 L 356 270 L 366 275
L 376 278 L 387 279 L 397 278 L 407 275 L 416 270 L 423 263 L 428 255 L 431 246 L 432 237 Z
`;

// Cleaner Mexico silhouette path (hand-tuned geographic approximation)
const MEXICO_REAL = `
M 350 215 
C 365 195, 390 178, 420 168 
C 445 162, 470 165, 492 175 
C 510 184, 524 196, 540 210 
C 555 222, 572 230, 590 235 
C 612 242, 635 250, 658 262 
C 678 274, 695 290, 710 308 
C 722 326, 728 346, 728 368 
C 728 386, 720 402, 705 414 
C 690 425, 670 430, 650 428 
C 628 425, 608 415, 590 402 
C 575 392, 560 384, 542 380 
C 522 376, 502 376, 482 380 
C 462 384, 442 392, 422 400 
C 402 408, 380 414, 358 414 
C 336 412, 316 404, 300 388 
C 286 372, 278 352, 278 330 
C 278 308, 286 288, 300 270 
C 314 252, 332 238, 350 226 Z
M 250 230
C 240 215, 232 198, 230 180
C 230 168, 236 158, 248 152
C 262 148, 276 152, 286 162
C 296 174, 302 188, 304 204
C 304 218, 300 230, 290 240
C 278 248, 264 248, 252 240 Z
`;

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
              Logística Global
            </span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">ENVÍOS A TODA LA</span>
            <span className="block text-gradient-gold">REPÚBLICA MEXICANA E INTERNACIONALES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Centro logístico en <span className="text-primary font-semibold">Ciudad de México</span> con cobertura a los
            32 estados y envíos internacionales a más de 12 países.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-border bg-card/40 backdrop-blur-sm p-4 md:p-8"
        >
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="mxDots" x="0" y="0" width="9" height="9" patternUnits="userSpaceOnUse">
                <circle cx="1.2" cy="1.2" r="1" fill="hsl(34 100% 50% / 0.45)" />
              </pattern>
              <radialGradient id="originGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(34 100% 50%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(34 100% 50%)" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="arcNacional" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(34 100% 55%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(34 100% 55%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(34 100% 55%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="arcIntl" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(34 100% 55%)" stopOpacity="0" />
                <stop offset="50%" stopColor="#FFD27A" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFD27A" stopOpacity="0.4" />
              </linearGradient>
              <clipPath id="mxClip">
                <path d={MEXICO_REAL} />
              </clipPath>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="1.2" />
              </filter>
            </defs>

            {/* Faint world latitude grid */}
            <g stroke="hsl(34 100% 50% / 0.06)" strokeWidth="0.5">
              {[...Array(9)].map((_, i) => (
                <line key={`h${i}`} x1="0" x2={W} y1={(i + 1) * (H / 10)} y2={(i + 1) * (H / 10)} />
              ))}
              {[...Array(11)].map((_, i) => (
                <line key={`v${i}`} y1="0" y2={H} x1={(i + 1) * (W / 12)} x2={(i + 1) * (W / 12)} />
              ))}
            </g>

            {/* Mexico silhouette filled with dot pattern */}
            <g>
              <path d={MEXICO_REAL} fill="hsl(var(--card))" stroke="hsl(34 100% 50% / 0.55)" strokeWidth="1.6" />
              <rect x="0" y="0" width={W} height={H} fill="url(#mxDots)" clipPath="url(#mxClip)" />
              <path d={MEXICO_REAL} fill="none" stroke="hsl(34 100% 50% / 0.3)" strokeWidth="3" filter="url(#soft)" />
            </g>

            {/* National arcs */}
            {nacional.map((d, i) => {
              const path = arcPath(d.lon, d.lat, 0.32);
              return (
                <g key={d.name}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#arcNacional)"
                    strokeWidth="1.7"
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

            {/* International arcs */}
            {internacional.map((d, i) => {
              const path = arcPath(d.lon, d.lat, 0.45);
              return (
                <g key={d.name}>
                  <motion.path
                    d={path}
                    fill="none"
                    stroke="url(#arcIntl)"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, delay: 1.2 + i * 0.2, ease: "easeOut" }}
                  />
                  <circle r="3.5" fill="#FFD27A">
                    <animateMotion dur="3.6s" begin={`${1.3 + i * 0.2}s`} repeatCount="indefinite" path={path} />
                  </circle>
                </g>
              );
            })}

            {/* Destination dots & labels - national */}
            {nacional.map((d, i) => {
              const p = project(d.lon, d.lat);
              return (
                <motion.g
                  key={`dot-${d.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.4 + i * 0.05 }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                >
                  <circle cx={p.x} cy={p.y} r="7" fill="hsl(34 100% 50% / 0.2)" />
                  <circle cx={p.x} cy={p.y} r="3.2" fill="hsl(34 100% 60%)" />
                  <text x={p.x + 7} y={p.y - 7} fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">
                    {d.name}
                  </text>
                </motion.g>
              );
            })}

            {/* Destination dots & labels - international */}
            {internacional.map((d, i) => {
              const p = project(d.lon, d.lat);
              return (
                <motion.g
                  key={`idot-${d.name}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 2 + i * 0.1 }}
                  style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                >
                  <circle cx={p.x} cy={p.y} r="9" fill="#FFD27A22" />
                  <circle cx={p.x} cy={p.y} r="4" fill="#FFD27A" stroke="hsl(34 100% 50%)" strokeWidth="1" />
                  <text x={p.x + 8} y={p.y - 8} fill="#FFD27A" fontSize="12" fontWeight="700">
                    {d.name}
                  </text>
                </motion.g>
              );
            })}

            {/* CDMX origin */}
            <circle cx={origin.x} cy={origin.y} r="38" fill="url(#originGlow)" />
            <motion.circle
              cx={origin.x}
              cy={origin.y}
              r="7"
              fill="hsl(34 100% 50%)"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              style={{ transformOrigin: `${origin.x}px ${origin.y}px` }}
            />
            <circle cx={origin.x} cy={origin.y} r="3.5" fill="white" />
            <text x={origin.x + 12} y={origin.y - 10} fill="hsl(34 100% 60%)" fontSize="14" fontWeight="800">
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
          <a href="#order-tracking" className="text-primary underline underline-offset-4">
            Seguimiento de Pedidos
          </a>
          .
        </p>
      </div>
    </section>
  );
};

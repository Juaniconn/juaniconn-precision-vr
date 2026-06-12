import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, Truck, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroTracker from "@/assets/hero-tracker.jpg";
import { Tracker3D } from "@/components/Tracker3D";

const STRIPE_URL = "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o";

const useCount = (target: number, duration = 1800) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
};

const Stat = ({ value, suffix, label, icon: Icon }: { value: number; suffix?: string; label: string; icon: any }) => {
  const n = useCount(value);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-2xl md:text-3xl font-display text-foreground leading-none">
          {n.toLocaleString()}{suffix}
        </div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{label}</div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  const [introDone, setIntroDone] = useState(false);
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-20">
      {/* Cinematic intro overlay */}
      <motion.div
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.1, delay: 0.6, ease: [0.85, 0, 0.15, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 z-30 bg-background pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none"
      >
        <motion.span
          initial={{ letterSpacing: "1em", opacity: 0 }}
          animate={{ letterSpacing: "0.3em", opacity: introDone ? 0 : 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-display text-primary text-3xl md:text-6xl tracking-[0.3em]"
        >
          BEEKONZ
        </motion.span>
      </motion.div>

      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          src={heroTracker}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, hsl(34 100% 50% / 0.4), transparent 60%)" }} />
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/90">
                Tracking VR de Nueva Generación
              </span>
            </motion.div>

            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.9] tracking-tight overflow-hidden">
              {["FULL BODY", "TRACKING", "SIN LÍMITES."].map((line, i) => (
                <motion.span
                  key={line}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 1.7 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className={`block ${i === 2 ? "text-gradient-gold" : "text-foreground"}`}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light"
            >
              Captura cada movimiento con precisión cinematográfica. Trackers Beekonz y Face Tracking diseñados para
              creadores serios de <span className="text-foreground font-medium">VRChat</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-7 text-base rounded-full group glow-gold"
                >
                  Comprar Ahora
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("face-tracking")}
                className="font-semibold px-8 py-7 text-base rounded-full bg-white/5 backdrop-blur-md border-white/20 hover:bg-white/10 text-foreground"
              >
                <Play className="mr-2 h-4 w-4" />
                Cómo Funciona
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              <Stat value={50000} suffix="+" label="Horas Trackeadas" icon={Zap} />
              <Stat value={32} suffix="" label="Estados Enviados" icon={Truck} />
              <Stat value={12} suffix="" label="Países" icon={Globe} />
              <Stat value={100} suffix="%" label="Listo VRChat" icon={Gamepad2} />
            </motion.div>
          </div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="absolute -inset-12 rounded-full blur-3xl opacity-60 animate-pulse-glow"
              style={{ background: "radial-gradient(circle, hsl(34 100% 50% / 0.5), transparent 70%)" }} />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
              <img
                src={trackerLifestyle}
                alt="Beekonz tracker en uso"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10">
                <span className="text-xs uppercase tracking-widest font-semibold text-primary">● En Vivo</span>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.6, duration: 0.6 }}
                className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl bg-background/80 backdrop-blur-xl border border-white/10"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">Beekonz Pro Kit</div>
                    <div className="font-display text-2xl text-foreground mt-1">10 TRACKERS</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Desde</div>
                    <div className="font-display text-2xl text-primary">$8,999</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Desliza</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

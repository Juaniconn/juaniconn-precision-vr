import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Zap, Globe, Truck, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroTracker from "@/assets/hero-tracker.jpg";
import trackerLifestyle from "@/assets/tracker-lifestyle.jpg";

const STRIPE_URL = "https://buy.stripe.com/eVq4gA6vHasdeETafH7g40s";

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
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-28 pb-20">
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <img
          src={heroTracker}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        {/* Multi-layer cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        {/* Orange ambient light */}
        <div className="absolute top-1/4 right-0 w-[60vw] h-[60vw] rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, hsl(34 100% 50% / 0.4), transparent 60%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left column - copy */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-foreground/90">
                Next-Gen VR Tracking
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] leading-[0.9] tracking-tight"
            >
              <span className="block text-foreground">FULL BODY</span>
              <span className="block text-foreground">TRACKING</span>
              <span className="block text-gradient-gold">WITHOUT LIMITS.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed font-light"
            >
              Captura cada movimiento con precisión cinematográfica. Trackers Beekonz y Face Tracking diseñados para
              creators serios de <span className="text-foreground font-medium">VRChat</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href={STRIPE_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-7 text-base rounded-full group glow-gold"
                >
                  Shop Now
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
                See How It Works
              </Button>
            </motion.div>

            {/* Animated stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              <Stat value={50000} suffix="+" label="Hours Tracked" icon={Zap} />
              <Stat value={32} suffix="" label="States Shipped" icon={Truck} />
              <Stat value={12} suffix="" label="Countries" icon={Globe} />
              <Stat value={100} suffix="%" label="VRChat Ready" icon={Gamepad2} />
            </motion.div>
          </div>

          {/* Right column - cinematic product reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            {/* Orange glow behind product */}
            <div className="absolute -inset-12 rounded-full blur-3xl opacity-60 animate-pulse-glow"
              style={{ background: "radial-gradient(circle, hsl(34 100% 50% / 0.5), transparent 70%)" }} />

            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-card/50 backdrop-blur-sm">
              <img
                src={trackerLifestyle}
                alt="Beekonz tracker en uso"
                className="w-full h-[600px] object-cover"
              />
              {/* Top badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-md border border-white/10">
                <span className="text-xs uppercase tracking-widest font-semibold text-primary">● Live</span>
              </div>
              {/* Bottom spec card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

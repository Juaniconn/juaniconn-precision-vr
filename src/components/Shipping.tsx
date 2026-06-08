import { Truck, Globe, Shield, MessageCircle, Clock, Package } from "lucide-react";
import { motion } from "framer-motion";

export const Shipping = () => {
  const features = [
    { icon: Truck, title: "Envíos a todo el mundo", description: "Rápido y rastreable", detail: "Entregas internacionales seguras" },
    { icon: Globe, title: "Internacional", description: "5–7 días hábiles", detail: "A toda Latinoamérica y más" },
    { icon: MessageCircle, title: "Soporte 24/7", description: "En Discord", detail: "Respuestas rápidas en español" },
    { icon: Shield, title: "Garantía", description: "En todos los productos", detail: "Respaldamos tu compra" },
  ];

  return (
    <section id="shipping" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Logística & Soporte</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">ENVÍOS Y</span>
            <span className="block text-gradient-gold">SOPORTE</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Envíos seguros y rastreables a todo el mundo. Soporte dedicado en español.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative h-full bg-card border border-border rounded-2xl p-8 text-center transition-colors hover:border-primary/40 overflow-hidden"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(400px circle at 50% 0%, hsl(34 100% 50% / 0.12), transparent 60%)" }} />
              <div className="relative">
                <div className="mb-6 inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1.5">{f.title}</h3>
                <p className="text-primary font-medium text-sm mb-1.5">{f.description}</p>
                <p className="text-sm text-muted-foreground">{f.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm">
            <div className="flex items-center gap-3"><Package className="h-5 w-5 text-primary" /><span className="text-muted-foreground">Empaque seguro</span></div>
            <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-primary" /><span className="text-muted-foreground">Tracking incluido</span></div>
            <div className="flex items-center gap-3"><Shield className="h-5 w-5 text-primary" /><span className="text-muted-foreground">Garantía completa</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

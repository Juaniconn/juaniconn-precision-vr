import { Users, Package, Sparkles, Clock } from "lucide-react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  const stats = [
    { value: "700+", label: "Trackers vendidos", icon: Package, description: "En toda Latinoamérica" },
    { value: "150+", label: "Clientes satisfechos", icon: Users, description: "Comunidad activa en Discord" },
    { value: "3+", label: "Años de experiencia", icon: Clock, description: "En la industria VR" },
    { value: "20+", label: "Sets personalizados", icon: Sparkles, description: "Configuraciones únicas" },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Experiencia & Trayectoria</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]">
              <span className="block text-foreground">MÁS DE</span>
              <span className="block text-gradient-gold">3 AÑOS DE EXPERIENCIA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
              Beekonz se ha consolidado como una marca confiable y apreciada en la comunidad VR.
              Nuestros clientes nos eligen por nuestra precisión, atención humana y personalización avanzada.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-primary/40 text-center transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-display text-5xl md:text-6xl text-gradient-gold mb-2">{stat.value}</div>
                <p className="text-base font-semibold text-foreground mb-1">{stat.label}</p>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

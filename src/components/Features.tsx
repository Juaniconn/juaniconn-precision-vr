import { Battery, Cpu, Zap, Feather, Wifi, Radio, Gamepad2, Signal } from "lucide-react";
import { motion } from "framer-motion";

export const Features = () => {
  const features = [
    { icon: Battery, title: "+50 Horas de Batería", value: "+50h", description: "Sesiones largas sin interrupciones" },
    { icon: Feather, title: "Peso Ultraligero", value: "10g", description: "Olvidarás que los llevas puestos" },
    { icon: Cpu, title: "Sensor ICM-45686", value: "6 ejes", description: "Alta estabilidad en cada movimiento" },
    { icon: Zap, title: "Latencia Ultra Baja", value: "25-35ms", description: "Respuesta fluida en tiempo real" },
    { icon: Wifi, title: "Compatible SlimeVR", value: "100%", description: "Nativo con el ecosistema SlimeVR" },
    { icon: Radio, title: "Dongle nRF52840", value: "Holyiot", description: "Dongle de alto rendimiento incluido" },
    { icon: Gamepad2, title: "VRChat & SteamVR", value: "Ready", description: "Sincronización perfecta" },
    { icon: Signal, title: "Conexión NRF", value: "Estable", description: "Bajo consumo, máxima estabilidad" }
  ];

  return (
    <section id="features" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Especificaciones</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">CARACTERÍSTICAS</span>
            <span className="block text-gradient-gold">PRINCIPALES</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light mt-6">
            Especificaciones que marcan la diferencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card border border-border rounded-2xl p-6 overflow-hidden transition-colors hover:border-primary/40"
            >
              <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(400px circle at 50% 0%, hsl(34 100% 50% / 0.12), transparent 60%)" }} />
              <div className="relative">
                <div className="mb-5 inline-flex p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="font-display text-4xl text-gradient-gold leading-none mb-3">{f.value}</div>
                <h3 className="font-semibold text-foreground mb-1.5 text-base">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

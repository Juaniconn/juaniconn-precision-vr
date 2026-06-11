import { motion } from "framer-motion";
import { Check, X, ExternalLink, Cpu, Zap, Battery, Target } from "lucide-react";

const imus = [
  {
    name: "LSM6DSV",
    badge: "Recomendado Beekonz",
    highlight: true,
    pros: ["Fusión interna (sensor fusion on-chip)", "Drift ultra bajo", "Bajo consumo · +50h batería", "Ideal para FBT y baile en VRChat"],
    cons: [],
  },
  {
    name: "ICM-45686",
    badge: "Premium Beekonz",
    highlight: true,
    pros: ["6 ejes de alta precisión", "Latencia 25–35ms", "Excelente estabilidad rotacional", "Recomendado por SlimeVR"],
    cons: [],
  },
  {
    name: "BMI160 / BMI270",
    badge: "Generación anterior",
    highlight: false,
    pros: ["Bajo costo", "Compatibilidad amplia"],
    cons: ["Drift notable tras minutos de uso", "Recalibración frecuente"],
  },
  {
    name: "MPU-6050 / 9250",
    badge: "Obsoleto",
    highlight: false,
    pros: ["Muy económico"],
    cons: ["Descontinuado", "Drift alto", "No recomendado para FBT moderno"],
  },
];

export const IMUComparison = () => {
  return (
    <section id="imu-comparison" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-6">
            <Cpu className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Comparativa IMU</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">EL SENSOR</span>
            <span className="block text-gradient-gold">SÍ IMPORTA</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-6">
            Beekonz utiliza los IMUs más recomendados por la documentación oficial de SlimeVR:{" "}
            <span className="text-primary font-semibold">LSM6DSV</span> y{" "}
            <span className="text-primary font-semibold">ICM-45686</span>. Ambos ofrecen fusión interna,
            drift ultra bajo y la mejor estabilidad para Full Body Tracking en VRChat.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {[
            { icon: Target, title: "Drift Mínimo", desc: "Fusión interna que mantiene la orientación estable durante horas." },
            { icon: Zap, title: "Latencia 25–35ms", desc: "Respuesta instantánea para baile y movimientos rápidos." },
            { icon: Battery, title: "Bajo Consumo", desc: "Más de 50 horas de batería en una sola carga." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Comparison cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {imus.map((imu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-6 border transition-all ${
                imu.highlight
                  ? "bg-card border-primary/50 glow-gold-subtle"
                  : "bg-card/40 border-border opacity-90"
              }`}
            >
              <div className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3 ${
                imu.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              }`}>
                {imu.badge}
              </div>
              <h3 className="font-display text-3xl text-foreground mb-4">{imu.name}</h3>
              <ul className="space-y-2.5">
                {imu.pros.map((p, k) => (
                  <li key={k} className="flex items-start gap-2 text-sm text-foreground/90">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
                {imu.cons.map((c, k) => (
                  <li key={`c${k}`} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://docs.slimevr.dev/diy/imu-comparison.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Ver comparativa oficial SlimeVR
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

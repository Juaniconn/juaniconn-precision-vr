import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import green from "@/assets/product-green.jpg.asset.json";
import blackBee from "@/assets/product-black-bee.jpg.asset.json";
import jester from "@/assets/product-jester.jpg.asset.json";

export const Testimonials = () => {
  const testimonials = [
    { name: "Carlos Mendoza", country: "México", image: green.url, text: "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales y fluidos.", role: "Creador de contenido VR" },
    { name: "Sofía Ramírez", country: "Argentina", image: jester.url, text: "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!", role: "Bailarina VR" },
    { name: "Diego Torres", country: "Colombia", image: blackBee.url, text: "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado.", role: "Entusiasta VRChat" },
  ];

  return (
    <section id="testimonials" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-15" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] -translate-y-1/2 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 bg-primary/8 rounded-full blur-[150px]" />

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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Testimonios</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">LO QUE DICEN</span>
            <span className="block text-gradient-gold">NUESTROS USUARIOS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Experiencias reales de nuestra comunidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8 }}
              className="group relative h-full bg-background rounded-3xl p-8 border border-border hover:border-primary/40 transition-colors overflow-hidden"
            >
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ background: "radial-gradient(500px circle at 50% 0%, hsl(34 100% 50% / 0.12), transparent 60%)" }} />
              <div className="relative">
                <Quote className="absolute top-0 right-0 h-12 w-12 text-primary/10" />
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/90 font-light text-lg leading-relaxed mb-8">"{t.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="h-14 w-14 rounded-full overflow-hidden border border-primary/30 flex-shrink-0">
                    <img src={t.image} alt={`Kit Beekonz de ${t.name}`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                    <p className="text-xs text-primary">{t.country}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-2xl bg-background/50 border border-border text-center backdrop-blur-sm">
            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-medium">Próximamente:</span>{" "}
              Videos de testimonios reales y experiencias dentro de VRChat.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

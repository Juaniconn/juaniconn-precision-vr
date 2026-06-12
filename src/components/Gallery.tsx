import { motion } from "framer-motion";
import green from "@/assets/product-green.jpg";
import yellow from "@/assets/product-yellow-hub.jpg";
import pastel from "@/assets/product-pastel.jpg";
import blackBee from "@/assets/product-black-bee.jpg";
import purple from "@/assets/product-purple-bee.jpg";
import jester from "@/assets/product-jester.jpg";

const photos = [
  { src: yellow, label: "Kit Amarillo · Hub USB 3.0 incluido" },
  { src: blackBee, label: "Edición Bee · Negro con dorado" },
  { src: green, label: "Edición Frog · Verde" },
  { src: purple, label: "Edición Bee · Púrpura" },
  { src: jester, label: "Edición Jester · Naranja + Azul" },
  { src: pastel, label: "Edición Pastel · Verde + Morado" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

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
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-foreground/90">Galería</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight">
            <span className="block text-foreground">PRODUCTOS</span>
            <span className="block text-gradient-gold">REALES BEEKONZ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            Fotografías reales de nuestros kits, ediciones especiales y accesorios.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-2xl overflow-hidden border border-border bg-card aspect-[4/5] sm:aspect-square"
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="inline-block text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-primary bg-background/85 backdrop-blur px-2.5 py-1.5 rounded-full border border-primary/30">
                  {p.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import { motion } from "framer-motion";
import green from "@/assets/product-green.jpg.asset.json";
import yellow from "@/assets/product-yellow-hub.jpg.asset.json";
import pastel from "@/assets/product-pastel.jpg.asset.json";
import blackBee from "@/assets/product-black-bee.jpg.asset.json";
import purple from "@/assets/product-purple-bee.jpg.asset.json";
import jester from "@/assets/product-jester.jpg.asset.json";

const photos = [
  { src: green.url, label: "Kit verde · Bee edition", span: "md:col-span-2 md:row-span-2" },
  { src: blackBee.url, label: "Kit completo · Negro", span: "" },
  { src: pastel.url, label: "Edición pastel · Verde + Morado", span: "" },
  { src: yellow.url, label: "Kit amarillo + Hub USB 3.0", span: "md:col-span-2" },
  { src: purple.url, label: "Edición Yoda · Púrpura", span: "" },
  { src: jester.url, label: "Edición Jester · Naranja + Azul", span: "" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {photos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative rounded-2xl overflow-hidden border border-border bg-card aspect-square ${p.span}`}
            >
              <img
                src={p.src}
                alt={p.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary bg-background/80 backdrop-blur px-3 py-1.5 rounded-full border border-primary/30">
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

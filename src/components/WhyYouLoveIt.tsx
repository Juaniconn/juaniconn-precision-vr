import { Zap, Feather, Heart, Globe } from "lucide-react";
import trackerImage from "@/assets/tracker-detail.jpg";

const features = [
  {
    icon: Zap,
    title: "Estable",
    description: "Tracking fluido incluso en movimiento intenso.",
    color: "mint"
  },
  {
    icon: Feather,
    title: "Ligero",
    description: "Apenas 10g por tracker.",
    color: "lime"
  },
  {
    icon: Heart,
    title: "Cómodo",
    description: "Straps suaves y seguras.",
    color: "pink"
  },
  {
    icon: Globe,
    title: "Movimiento total",
    description: "Diseñado especialmente para la comunidad hispana de VR.",
    color: "blue"
  }
];

export const WhyYouLoveIt = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 gradient-spotlight opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            Experiencia Premium
          </span>
          <h2 className="text-4xl md:text-5xl font-display tracking-wide mb-4">
            POR QUÉ TE <span className="text-gradient-rainbow">ENCANTARÁ</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="premium-card p-6 text-center transition-smooth hover:scale-[1.02] animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative w-full aspect-[4/3] mb-6 rounded-xl overflow-hidden">
                  <img 
                    src={trackerImage}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 h-14 w-14 rounded-2xl bg-${feature.color}/20 flex items-center justify-center`}>
                    <Icon className={`h-7 w-7 text-${feature.color}`} />
                  </div>
                </div>
                <h3 className="font-display text-2xl tracking-wide mb-2">{feature.title}</h3>
                <p className="text-muted-foreground font-light">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
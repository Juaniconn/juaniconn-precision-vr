import trackerDetail from "@/assets/tracker-detail.jpg";
import { Check } from "lucide-react";

export const DesignComfort = () => {
  const features = [
    "Diseñados para largas sesiones de VR",
    "Compactos, cómodos, limpios y ligeros",
    "Straps elásticas que se ajustan a cualquier cuerpo",
    "Sin molestias mientras bailas, juegas o haces motion-capture"
  ];

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in order-2 lg:order-1">
            <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full" />
            <img 
              src={trackerDetail} 
              alt="Detalle del tracker Juaniconn mostrando diseño ergonómico" 
              className="relative z-10 rounded-3xl shadow-2xl w-full hover:scale-[1.02] transition-smooth"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div>
              <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
                Diseño y Comodidad
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
                DISEÑADOS PARA <span className="text-gradient">DISFRUTAR</span>
              </h2>
            </div>
            
            <p className="text-xl text-foreground/90 leading-relaxed font-light">
              Diseñados para largas sesiones de VR. Compactos, cómodos, limpios y ligeros. 
              Con straps elásticas que se ajustan a cualquier cuerpo sin molestar mientras 
              bailas, juegas o haces motion-capture.
            </p>
            
            <p className="text-lg text-primary font-medium italic">
              "Juaniconn no solo busca precisión: busca un tracking que disfrutes usar."
            </p>
            
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border/50 transition-smooth hover:border-primary/30"
                >
                  <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import productBlackClose from "@/assets/product_blackclose.png";

export const FinalCTA = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      {/* Warm accent glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative animate-fade-in order-2 lg:order-1">
              {/* Decorative elements */}
              <div className="absolute -inset-8 bg-secondary/10 rounded-3xl blur-3xl" />
              <div className="absolute -inset-4 rounded-3xl border border-secondary/20" />
              
              <div className="relative">
                <img 
                  src={productBlackClose} 
                  alt="Beekonz Tracker - Diseño premium"
                  className="w-full h-auto rounded-2xl drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 30px 80px hsl(39, 82%, 73%, 0.25))',
                  }}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card/95 backdrop-blur-xl rounded-2xl px-5 py-4 border border-secondary/40 glow-gold shadow-xl">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <span className="text-foreground font-semibold">4.9/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="text-center lg:text-left space-y-8 animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm text-secondary font-medium">Hecho para la comunidad hispana</span>
              </div>
              
              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight text-foreground">
                Lleva tu Experiencia VR{" "}
                <span className="text-secondary">al Siguiente Nivel</span>
              </h2>
              
              {/* Description */}
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                Tracking preciso, ligero y accesible. Diseñado especialmente para bailarines, 
                creadores y la comunidad VRChat hispana.
              </p>
              
              {/* CTA Button */}
              <div className="pt-4">
                <a 
                  href="https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground font-semibold px-10 py-7 text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 hover:scale-[1.02] group"
                  >
                    Comprar Ahora
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
              
              {/* Shipping info */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  Envíos 24h México
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  5–7 días Internacional
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

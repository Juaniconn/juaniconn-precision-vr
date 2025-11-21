import trackerDetail from "@/assets/tracker-detail.jpg";

export const DesignComfort = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full" />
            <img 
              src={trackerDetail} 
              alt="Detalle del tracker Juaniconn" 
              className="relative z-10 rounded-2xl shadow-2xl w-full hover:scale-105 transition-smooth"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl md:text-5xl font-bold">
              Diseño y <span className="text-gradient">Comodidad</span>
            </h2>
            
            <p className="text-xl text-foreground/90 leading-relaxed">
              Cada tracker está diseñado pensando en tu comodidad durante largas sesiones de VR. 
              Compactos, limpios y listos para acompañarte en cada aventura.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Ergonomía Premium</h4>
                  <p className="text-muted-foreground">
                    Forma anatómica que se adapta perfectamente a tu cuerpo sin causar molestias.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Diseños Personalizados</h4>
                  <p className="text-muted-foreground">
                    Manufactura cuidada con atención al detalle en cada componente.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary-glow mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg mb-1">Construcción Duradera</h4>
                  <p className="text-muted-foreground">
                    Materiales de alta calidad que resisten el uso intensivo día tras día.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

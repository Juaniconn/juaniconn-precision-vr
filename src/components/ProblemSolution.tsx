import { AlertCircle, CheckCircle, Zap, Battery, Cpu, Feather } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Baja de precisión en el tracking (BNO085, BMI160)",
    "Desconexión por conexión 2.4GHz inconsistente",
    "Latencia alta y tracking inconsistente",
    "Equipos costosos e incómodos"
  ];
  
  const solutions = [
    { icon: Cpu, text: "Ultra precisión gracias al ICM-45686" },
    { icon: Zap, text: "Latencia de 25–35 dBi" },
    { icon: Battery, text: "+50 horas de batería" },
    { icon: Feather, text: "Diseño compacto de 10g" },
  ];
  
  return (
    <section id="problem-solution" className="section-padding bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">
            El Problema y La Solución
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide mb-6">
            LA SOLUCIÓN QUE <span className="text-gradient">NECESITAS</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Problem statement */}
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto">
              "La mayoría de los trackers son imprecisos, pesados o demasiado costosos."
            </p>
          </div>
          
          {/* Solution statement */}
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed max-w-3xl mx-auto">
              Juaniconn ofrece una opción accesible, moderna y precisa diseñada especialmente 
              para la comunidad hispana de VR.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Problems */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-2xl font-display tracking-wide">PROBLEMAS COMUNES</h3>
              </div>
              
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 bg-background/50 rounded-xl border border-border/50 transition-smooth hover:border-destructive/30"
                >
                  <div className="h-2 w-2 rounded-full bg-destructive mt-2.5 flex-shrink-0" />
                  <p className="text-foreground/80 font-light">{problem}</p>
                </div>
              ))}
            </div>
            
            {/* Solutions */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display tracking-wide">SOLUCIÓN JUANICONN</h3>
              </div>
              
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 bg-primary/5 rounded-xl border border-primary/20 transition-smooth hover:border-primary/40 hover:bg-primary/10 group"
                >
                  <div className="h-10 w-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-smooth">
                    <solution.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium mt-2">{solution.text}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compatibility note */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-lg text-muted-foreground">
              <span className="text-primary font-semibold">Compatibles con VRChat y juegos SteamVR</span> — 
              Funciona perfectamente con toda la suite SlimeVR
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
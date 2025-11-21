import { AlertCircle, CheckCircle } from "lucide-react";

export const ProblemSolution = () => {
  const problems = [
    "Baja de precisión en el tracking (BNO085, BMI160)",
    "Desconexión por conexión 2.4GHz inconsistente",
    "Latencia alta y tracking inconsistente",
    "Equipos costosos e incómodos"
  ];
  
  const solutions = [
    "Sensores ICM-45686 de última generación",
    "Dongle nRF con latencia ultra baja (25-35 dBi)",
    "Batería superior a 50 horas de uso continuo",
    "Diseño compacto de solo 16g por tracker"
  ];
  
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            La Solución que <span className="text-gradient">Necesitas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dejamos atrás los problemas del tracking tradicional
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problems */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="h-8 w-8 text-destructive" />
              <h3 className="text-2xl font-bold">Problemas Comunes</h3>
            </div>
            
            {problems.map((problem, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-border/50"
              >
                <div className="h-2 w-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                <p className="text-foreground/80">{problem}</p>
              </div>
            ))}
          </div>
          
          {/* Solutions */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-primary-glow" />
              <h3 className="text-2xl font-bold">Solución Juaniconn</h3>
            </div>
            
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg border border-primary/20 hover:border-primary/40 transition-smooth"
              >
                <CheckCircle className="h-5 w-5 text-primary-glow flex-shrink-0 mt-0.5" />
                <p className="text-foreground font-medium">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

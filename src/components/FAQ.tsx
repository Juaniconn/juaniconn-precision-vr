import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    { q: "¿Son compatibles con SlimeVR?", a: "Sí, 100% compatibles con el software SlimeVR. También funcionan con SteamVR y cualquier juego que soporte Full Body Tracking." },
    { q: "¿Cuánto dura la batería?", a: "Más de 50 horas de uso continuo. Puedes jugar varios días sin necesidad de recargar." },
    { q: "¿Incluyen straps?", a: "Sí, todos los kits incluyen straps elásticos premium de alta calidad, cómodos para sesiones largas." },
    { q: "¿Funciona en VRChat?", a: "Totalmente compatible con VRChat, NeosVR, ChilloutVR y cualquier aplicación de SteamVR." },
    { q: "¿Cuánto tarda el envío?", a: "Envíos a México en 1-2 días. Internacionales en 5-7 días hábiles. Todos los envíos incluyen tracking." },
    { q: "¿Tienen soporte técnico?", a: "Sí, soporte 24/7 en nuestro Discord oficial. Respondemos en español siempre." },
    { q: "¿Cuánto pesa cada tracker?", a: "Solo 16 gramos cada uno. Ultra ligeros para máxima comodidad." },
    { q: "¿Puedo pedir colores personalizados?", a: "Sí, ofrecemos Blanco, Negro y Rojo Juaniconn. Para otros colores, contáctanos en Discord." },
  ];
  
  return (
    <section id="faq" className="section-padding bg-card relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-soft-blue/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-mint/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-mint tracking-widest uppercase mb-4 block">Dudas</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">
            PREGUNTAS <span className="bg-gradient-to-r from-mint via-soft-pink to-soft-blue bg-clip-text text-transparent">FRECUENTES</span>
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="group relative overflow-hidden rounded-xl border-0"
              >
                {/* Rainbow border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-mint/30 via-soft-pink/30 to-soft-blue/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 bg-background rounded-xl" />
                
                <div className="relative bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 data-[state=open]:border-mint/50 transition-all duration-300">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:text-mint hover:no-underline py-5 px-6 [&[data-state=open]]:text-mint">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 px-6 font-light leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    { q: "¿Es compatible con SlimeVR?", a: "Sí, completamente compatible. Nuestros trackers utilizan el protocolo nativo de SlimeVR." },
    { q: "¿Cuánto dura la batería?", a: "Más de 50 horas por carga completa. Puedes jugar varios días sin necesidad de recargar." },
    { q: "¿Cuánto pesa cada tracker?", a: "Solo 10 gramos. Ultra ligeros para máxima comodidad en sesiones largas." },
    { q: "¿Qué incluye cada paquete?", a: "Trackers, straps elásticos premium, dongle NRF52840, cable USB-C y guía digital." },
    { q: "¿Tienen soporte técnico?", a: "Sí, soporte 24/7 vía Discord. Respondemos en español siempre." },
    { q: "¿Hacen envíos internacionales?", a: "Sí, envíos a México en 1-2 días, internacionales en 5-7 días hábiles. Todos incluyen tracking." },
    { q: "¿Funciona con VRChat?", a: "Totalmente compatible con VRChat, NeosVR, ChilloutVR y cualquier aplicación de SteamVR." },
    { q: "¿Puedo pedir colores personalizados?", a: "Sí, ofrecemos Blanco, Negro y Rojo Juaniconn. Para configuraciones especiales, contáctanos en Discord." },
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

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    { q: "¿Son compatibles con SlimeVR?", a: "Sí, 100% compatibles con el software SlimeVR." },
    { q: "¿Incluyen straps?", a: "Sí, todos los kits incluyen straps elásticos premium." },
    { q: "¿Funciona en VRChat?", a: "Totalmente compatible con VRChat y SteamVR." },
    { q: "¿Es fácil configurarlos?", a: "Sí, incluye tutorial guiado paso a paso." },
    { q: "¿Puedo pedir diseño personalizado?", a: "Sí, dependiendo de la disponibilidad." },
    { q: "¿Cuánto pesa cada tracker?", a: "Solo 16g cada uno." },
  ];
  
  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Dudas</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-wide">PREGUNTAS <span className="text-gradient">FRECUENTES</span></h2>
        </div>
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-xl border border-border px-6 data-[state=open]:border-primary/50 transition-smooth">
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-5">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 font-light">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
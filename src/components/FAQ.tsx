import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "¿Funcionan con SlimeVR?",
      answer: "Sí, nuestros trackers están basados en la tecnología SlimeVR Smols con sensores ICM-45686 y son 100% compatibles con el software SlimeVR."
    },
    {
      question: "¿Incluyen straps/correas?",
      answer: "Sí, todos nuestros kits incluyen straps elásticos premium de alta calidad para cada tracker. Son cómodos y ajustables para cualquier tipo de cuerpo."
    },
    {
      question: "¿Se pueden usar en VRChat y SteamVR?",
      answer: "Absolutamente. Los trackers Juaniconn son totalmente compatibles con VRChat, SteamVR y cualquier aplicación que soporte SlimeVR o tracking SteamVR estándar."
    },
    {
      question: "¿De qué material son las correas?",
      answer: "Las correas son de material elástico de alta calidad, diseñadas para ser cómodas durante largas sesiones de uso sin causar irritación o molestias."
    },
    {
      question: "¿Cuánto pesa cada tracker?",
      answer: "Cada tracker pesa únicamente 16 gramos, haciéndolos extremadamente ligeros y cómodos. Prácticamente olvidarás que los llevas puestos."
    },
    {
      question: "¿Qué incluye el dongle nRF52840?",
      answer: "Cada kit incluye 1 dongle Holyiot nRF52840 de alto rendimiento que maneja la comunicación de todos los trackers con latencia ultra baja de 25-35 dBi."
    }
  ];
  
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resolvemos tus dudas más comunes
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-lg border border-border px-6 data-[state=open]:border-primary/50 transition-smooth"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary-glow hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

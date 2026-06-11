import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQPage = () => {
  const faqs = [
    { q: "¿Es compatible con SlimeVR?", a: "Sí, completamente compatible. Nuestros trackers utilizan el protocolo nativo de SlimeVR." },
    { q: "¿Cuánto dura la batería?", a: "Entre 35 y 45 horas por carga completa. Puedes jugar varios días sin necesidad de recargar." },
    { q: "¿Cuánto pesa cada tracker?", a: "Solo 10 gramos. Ultra ligeros para máxima comodidad en sesiones largas." },
    { q: "¿Qué incluye cada paquete?", a: "Trackers, straps elásticos premium, dongle NRF52840, cable USB-C y guía digital." },
    { q: "¿Tienen soporte técnico?", a: "Sí, soporte 24/7 vía Discord. Respondemos en español siempre." },
    { q: "¿Hacen envíos internacionales?", a: "Sí, envíos a México en 1-2 días, internacionales en 5-7 días hábiles. Todos incluyen tracking." },
    { 
      q: "¿Funciona con VRChat?", 
      a: "Totalmente compatible con VRChat, NeosVR, ChilloutVR y cualquier aplicación de SteamVR." 
    },
    { 
      q: "¿Puedo pedir colores personalizados?", 
      a: "Sí, ofrecemos Blanco, Negro y Rojo Beekonz. Para configuraciones especiales, contáctanos en Discord." 
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] -translate-y-1/2 bg-secondary/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] -translate-y-1/2 bg-primary/10 rounded-full blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            {/* Hero - Neotix style */}
            <div className="text-center mb-16 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-6">
                <HelpCircle className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary tracking-wider uppercase">Ayuda</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
                Preguntas <span className="text-secondary">Frecuentes</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Encuentra respuestas a las dudas más comunes sobre nuestros trackers.
              </p>
            </div>

            {/* FAQ Accordion - Clean Neotix style */}
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem 
                    key={i} 
                    value={`item-${i}`} 
                    className="group"
                  >
                    <div className="bg-card rounded-2xl border border-border hover:border-secondary/40 transition-all duration-300 overflow-hidden">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:text-secondary hover:no-underline py-6 px-6 [&[data-state=open]]:text-secondary text-foreground">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-6 px-6 font-light leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 rounded-3xl bg-card border border-border">
                <p className="text-muted-foreground mb-6 text-lg">
                  ¿No encontraste lo que buscabas?
                </p>
                <a 
                  href="https://discord.gg/ekr3ERWJQ6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="bg-secondary hover:bg-bee-gold-hover text-secondary-foreground px-8 py-6 font-semibold rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 group"
                  >
                    <MessageCircle className="mr-3 h-5 w-5" />
                    Pregúntanos en Discord
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default FAQPage;

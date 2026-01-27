import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    { q: "¿Es compatible con SlimeVR?", a: "Sí, completamente compatible. Nuestros trackers utilizan el protocolo nativo de SlimeVR." },
    { q: "¿Cuánto dura la batería?", a: "Más de 50 horas por carga completa. Puedes jugar varios días sin necesidad de recargar." },
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
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-3xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-primary tracking-widest uppercase mb-4 block">Ayuda</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6">
              PREGUNTAS <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">FRECUENTES</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas a las dudas más comunes
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem 
                  key={i} 
                  value={`item-${i}`} 
                  className="group relative overflow-hidden rounded-xl border-0"
                >
                  {/* Neon border effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-background rounded-xl" />
                  
                  <div className="relative bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 data-[state=open]:border-primary/50 transition-all duration-300">
                    <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary hover:no-underline py-5 px-6 [&[data-state=open]]:text-primary">
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

          {/* Contact CTA */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-muted-foreground mb-4">
              ¿No encontraste lo que buscabas?
            </p>
            <a 
              href="https://discord.gg/beekonz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full text-primary font-medium transition-all"
            >
              Pregúntanos en Discord
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default FAQPage;
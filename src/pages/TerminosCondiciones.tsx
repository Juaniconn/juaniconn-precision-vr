import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Scale, CreditCard, Truck, Shield, AlertCircle, Copyright, MapPin } from "lucide-react";

const TerminosCondiciones = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Uso del Sitio Web",
      content: [
        "Al acceder y utilizar el sitio web de Beekonz (beekonz.shop), aceptas cumplir con estos términos y condiciones.",
        "El contenido del sitio es únicamente para uso personal y no comercial.",
        "Está prohibido reproducir, distribuir o modificar cualquier contenido sin autorización previa.",
        "Nos reservamos el derecho de modificar o discontinuar el sitio sin previo aviso.",
        "El uso indebido del sitio puede resultar en la terminación del acceso."
      ]
    },
    {
      icon: CreditCard,
      title: "2. Compras y Pagos",
      content: [
        "Todos los precios están en Pesos Mexicanos (MXN) o Dólares Americanos (USD) según se indique.",
        "Los pagos se procesan de forma segura a través de Stripe.",
        "Al realizar una compra, garantizas que la información proporcionada es veraz y completa.",
        "Nos reservamos el derecho de rechazar o cancelar pedidos por cualquier motivo.",
        "Los precios pueden cambiar sin previo aviso, pero los pedidos confirmados mantienen el precio acordado."
      ]
    },
    {
      icon: Truck,
      title: "3. Envíos y Entregas",
      content: [
        "Los tiempos de envío son estimados: 1-2 días hábiles para México, 5-7 días para envíos internacionales.",
        "Los costos de envío se calculan al momento del checkout.",
        "No somos responsables por retrasos causados por aduanas o servicios de mensajería.",
        "El cliente es responsable de proporcionar una dirección de entrega correcta.",
        "Para envíos internacionales, el cliente es responsable de impuestos y aranceles aduaneros."
      ]
    },
    {
      icon: Shield,
      title: "4. Garantía del Producto",
      content: [
        "Todos los trackers Beekonz incluyen garantía limitada de fabricante.",
        "La garantía cubre defectos de fabricación bajo uso normal.",
        "La garantía no cubre daños por mal uso, accidentes, modificaciones o desgaste normal.",
        "Para reclamaciones de garantía, contacta a través de nuestro Discord oficial.",
        "Las reparaciones o reemplazos se realizarán a nuestra discreción."
      ]
    },
    {
      icon: Scale,
      title: "5. Limitación de Responsabilidad",
      content: [
        "Beekonz no será responsable por daños indirectos, incidentales o consecuentes.",
        "Nuestra responsabilidad máxima se limita al monto pagado por el producto.",
        "No garantizamos compatibilidad con todos los sistemas o configuraciones.",
        "El uso de los productos es bajo tu propio riesgo.",
        "No somos responsables por interrupciones del servicio o errores técnicos."
      ]
    },
    {
      icon: Copyright,
      title: "6. Propiedad Intelectual",
      content: [
        "Todo el contenido del sitio, incluyendo logos, imágenes y textos, es propiedad de Beekonz.",
        "Las marcas registradas no pueden usarse sin autorización escrita.",
        "El software y firmware de los trackers están protegidos por derechos de autor.",
        "Se permite el uso de firmware open-source según las licencias aplicables.",
        "Cualquier uso no autorizado puede resultar en acciones legales."
      ]
    },
    {
      icon: AlertCircle,
      title: "7. Modificaciones",
      content: [
        "Nos reservamos el derecho de modificar estos términos en cualquier momento.",
        "Los cambios entran en vigor inmediatamente después de su publicación.",
        "Es tu responsabilidad revisar periódicamente estos términos.",
        "El uso continuado del sitio después de cambios constituye aceptación.",
        "Te notificaremos cambios significativos a través de nuestros canales oficiales."
      ]
    },
    {
      icon: MapPin,
      title: "8. Jurisdicción",
      content: [
        "Estos términos se rigen por las leyes de México.",
        "Cualquier disputa se resolverá en los tribunales competentes de México.",
        "Si alguna disposición es inválida, las demás permanecen en vigor.",
        "La falta de ejercicio de un derecho no constituye renuncia al mismo.",
        "Para consultas legales, contacta: legal@beekonz.shop"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bee-gradient-soft opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium tracking-widest uppercase mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
              TÉRMINOS Y <span className="text-secondary">CONDICIONES</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Última actualización: Enero 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Introduction */}
            <div className="bg-card border border-border rounded-2xl p-8 animate-fade-in">
              <p className="text-muted-foreground leading-relaxed">
                Bienvenido a Beekonz. Al acceder a nuestro sitio web y realizar compras, aceptas estar sujeto a los siguientes términos y condiciones. Te recomendamos leer cuidadosamente este documento antes de utilizar nuestros servicios.
              </p>
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 animate-fade-in hover:border-secondary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Section */}
            <div className="bg-card border border-secondary/30 rounded-2xl p-8 text-center glow-gold-subtle">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                ¿Tienes preguntas sobre estos términos?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contáctanos a través de nuestro Discord o envía un correo a legal@beekonz.shop
              </p>
              <a 
                href="https://discord.gg/ekr3ERWJQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-bee-gold-hover transition-all duration-300"
              >
                Contactar en Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TerminosCondiciones;

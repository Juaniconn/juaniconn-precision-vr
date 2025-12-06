import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, CheckCircle, Search, RotateCcw, Truck, Mail } from "lucide-react";

const Devoluciones = () => {
  const sections = [
    {
      icon: Shield,
      title: "Garantía de Fabricación",
      content: (
        <>
          Todos nuestros productos cuentan con una garantía contra defectos de fabricación por un periodo de <strong className="text-foreground">30 días</strong> a partir de la fecha de entrega. Esto cubre únicamente fallos que afecten el funcionamiento normal del producto y que no sean consecuencia de un mal uso.
        </>
      )
    },
    {
      icon: CheckCircle,
      title: "Condiciones Para Hacer Válida la Garantía",
      content: (
        <ul className="space-y-2">
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            El producto debe encontrarse en condiciones físicas aceptables.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            No debe presentar daños causados por golpes, humedad o modificaciones.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary mt-1">•</span>
            Debe presentarse el comprobante de compra.
          </li>
        </ul>
      )
    },
    {
      icon: Search,
      title: "Proceso de Revisión",
      content: "Una vez que recibamos el producto para revisión, nuestro equipo lo evaluará. En caso de confirmarse un defecto de fabricación, se realizará la reparación gratuita o el reemplazo del producto, según corresponda."
    },
    {
      icon: RotateCcw,
      title: "Devoluciones",
      content: (
        <>
          Las devoluciones están disponibles únicamente durante los <strong className="text-foreground">7 días naturales</strong> después de haber recibido tu pedido. El producto debe estar en su estado original, sin señales de uso y con todos los accesorios incluidos.
        </>
      )
    },
    {
      icon: Truck,
      title: "Costos de Envío",
      content: "Los costos de envío para devoluciones o revisiones por garantía corren por cuenta del cliente, excepto en los casos donde se confirme un defecto de fabricación."
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tu compra protegida</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Garantía y <span className="text-gradient">Devoluciones</span>
            </h1>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <section 
                key={section.title}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-xl font-display font-bold mb-3">{section.title}</h2>
                    <div className="text-muted-foreground leading-relaxed">
                      {typeof section.content === 'string' ? <p>{section.content}</p> : section.content}
                    </div>
                  </div>
                </div>
              </section>
            ))}

            {/* Contact Section */}
            <section 
              className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 animate-fade-in"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/20 rounded-xl shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-display font-bold mb-3">Contacto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Si necesitas ayuda con una garantía o devolución, por favor contáctanos a través de nuestro{" "}
                    <a 
                      href="https://discord.gg/UE2QDNf3sK" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline font-medium"
                    >
                      Discord
                    </a>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Devoluciones;

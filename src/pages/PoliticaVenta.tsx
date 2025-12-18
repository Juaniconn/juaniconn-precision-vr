import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShoppingBag, DollarSign, CreditCard, Clock, XCircle, Mail } from "lucide-react";

const PoliticaVenta = () => {
  const sections = [
    {
      icon: ShoppingBag,
      title: "Disponibilidad de Productos",
      content: (
        <>
          <p className="mb-3">
            Todos nuestros productos están sujetos a disponibilidad. En caso de no contar con unidades en existencia al momento de tu compra, tu pedido se programará automáticamente para producción.
          </p>
          <p className="mb-3">
            El tiempo estimado para este proceso puede ser de hasta <strong className="text-foreground">30 días naturales</strong>.
          </p>
          <p>
            Se te notificará por correo electrónico si tu pedido se envía inmediatamente desde inventario o si corresponde a un lote en producción.
          </p>
        </>
      )
    },
    {
      icon: DollarSign,
      title: "Precios",
      content: "Los precios publicados en el sitio incluyen impuestos, a menos que se indique lo contrario. Nos reservamos el derecho de modificar los precios en cualquier momento, aunque respetaremos aquellos confirmados al momento de tu compra."
    },
    {
      icon: CreditCard,
      title: "Métodos de Pago",
      content: "Aceptamos diversos métodos de pago seguros. Tu información está protegida mediante procesos de cifrado y verificación."
    },
    {
      icon: Clock,
      title: "Tiempo de Procesamiento",
      content: (
        <>
          El procesamiento de tu pedido se realiza dentro de los <strong className="text-foreground">1 a 3 días hábiles</strong> después de confirmar el pago. Los tiempos de envío pueden variar según tu ubicación.
        </>
      )
    },
    {
      icon: XCircle,
      title: "Cancelaciones",
      content: "Las cancelaciones solo se pueden realizar antes de que el producto sea enviado. Una vez que tu pedido haya sido procesado y entregado al servicio de mensajería, no será posible cancelarlo."
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
              <ShoppingBag className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">Términos de compra</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Política de <span className="text-gradient">Venta</span>
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
                    Si tienes dudas sobre tu compra o necesitas asistencia, estaremos felices de ayudarte a través de nuestro{" "}
                    <a 
                      href="https://discord.gg/juaniconn" 
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

export default PoliticaVenta;

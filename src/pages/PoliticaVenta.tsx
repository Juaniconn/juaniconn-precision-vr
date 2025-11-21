import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PoliticaVenta = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de <span className="text-gradient">Venta</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-4">Disponibilidad de Productos</h2>
              <p className="text-muted-foreground mb-4">
                Todos nuestros productos están sujetos a disponibilidad. En caso de no contar con unidades en existencia al momento de tu compra, tu pedido se programará automáticamente para producción.
              </p>
              <p className="text-muted-foreground mb-4">
                El tiempo estimado para este proceso puede ser de hasta <strong>30 días naturales</strong>.
              </p>
              <p className="text-muted-foreground">
                Se te notificará por correo electrónico si tu pedido se envía inmediatamente desde inventario o si corresponde a un lote en producción. Este proceso es parte normal de nuestro flujo de ventas.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4">Precios</h2>
              <p className="text-muted-foreground">
                Los precios publicados en el sitio incluyen impuestos, a menos que se indique lo contrario. Nos reservamos el derecho de modificar los precios en cualquier momento, aunque respetaremos aquellos confirmados al momento de tu compra.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold mb-4">Métodos de Pago</h2>
              <p className="text-muted-foreground">
                Aceptamos diversos métodos de pago seguros. Tu información está protegida mediante procesos de cifrado y verificación.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-4">Tiempo de Procesamiento</h2>
              <p className="text-muted-foreground">
                El procesamiento de tu pedido se realiza dentro de los <strong>1 a 3 días hábiles</strong> después de confirmar el pago. Los tiempos de envío pueden variar según tu ubicación.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold mb-4">Cancelaciones</h2>
              <p className="text-muted-foreground">
                Las cancelaciones solo se pueden realizar antes de que el producto sea enviado. Una vez que tu pedido haya sido procesado y entregado al servicio de mensajería, no será posible cancelarlo.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                Si tienes dudas sobre tu compra o necesitas asistencia, estaremos felices de ayudarte a través de nuestro{" "}
                <a href="https://discord.gg/UE2QDNf3sK" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Discord
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default PoliticaVenta;

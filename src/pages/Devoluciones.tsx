import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Devoluciones = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Garantía y <span className="text-gradient">Devoluciones</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-4">Garantía de Fabricación</h2>
              <p className="text-muted-foreground">
                Todos nuestros productos cuentan con una garantía contra defectos de fabricación por un periodo de <strong>30 días</strong> a partir de la fecha de entrega. Esto cubre únicamente fallos que afecten el funcionamiento normal del producto y que no sean consecuencia de un mal uso.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4">Condiciones Para Hacer Válida la Garantía</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>El producto debe encontrarse en condiciones físicas aceptables.</li>
                <li>No debe presentar daños causados por golpes, humedad o modificaciones.</li>
                <li>Debe presentarse el comprobante de compra.</li>
              </ul>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold mb-4">Proceso de Revisión</h2>
              <p className="text-muted-foreground">
                Una vez que recibamos el producto para revisión, nuestro equipo lo evaluará. En caso de confirmarse un defecto de fabricación, se realizará la reparación gratuita o el reemplazo del producto, según corresponda.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-4">Devoluciones</h2>
              <p className="text-muted-foreground">
                Las devoluciones están disponibles únicamente durante los <strong>7 días naturales</strong> después de haber recibido tu pedido. El producto debe estar en su estado original, sin señales de uso y con todos los accesorios incluidos.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold mb-4">Costos de Envío</h2>
              <p className="text-muted-foreground">
                Los costos de envío para devoluciones o revisiones por garantía corren por cuenta del cliente, excepto en los casos donde se confirme un defecto de fabricación.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                Si necesitas ayuda con una garantía o devolución, por favor contáctanos a través de nuestro{" "}
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

export default Devoluciones;

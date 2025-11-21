import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Política de <span className="text-gradient">Privacidad</span>
            </h1>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-2xl font-bold mb-4">Información que Recopilamos</h2>
              <p className="text-muted-foreground">
                Podemos recopilar información personal como nombre, dirección de correo electrónico, número de teléfono y dirección de envío cuando realizas una compra o nos contactas directamente.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-2xl font-bold mb-4">Uso de la Información</h2>
              <p className="text-muted-foreground mb-4">
                La información proporcionada se utiliza exclusivamente para procesar pedidos, coordinar envíos, brindar soporte y mejorar la experiencia de compra.
              </p>
              <p className="text-muted-foreground">
                No vendemos, intercambiamos ni compartimos tus datos personales con terceros ajenos a nuestra operación.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-2xl font-bold mb-4">Pagos y Seguridad</h2>
              <p className="text-muted-foreground">
                Los pagos se procesan mediante plataformas seguras y reconocidas que cumplen con estándares de cifrado. Nosotros no almacenamos datos de tarjetas bancarias ni credenciales de pago.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-bold mb-4">Cookies y Datos de Navegación</h2>
              <p className="text-muted-foreground">
                Utilizamos cookies únicamente para mejorar el funcionamiento y la experiencia del sitio, como recordar preferencias o facilitar el uso del carrito. Puedes desactivar las cookies desde tu navegador si lo deseas.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-bold mb-4">Almacenamiento de Datos</h2>
              <p className="text-muted-foreground">
                Mantenemos tus datos de forma segura y limitada únicamente al tiempo necesario para completar transacciones y cumplir con obligaciones legales aplicables.
              </p>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-2xl font-bold mb-4">Contacto</h2>
              <p className="text-muted-foreground">
                Si deseas acceder, modificar o eliminar tus datos personales, o tienes alguna duda respecto al manejo de los mismos, puedes contactarnos a través de nuestro{" "}
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

export default PoliticaPrivacidad;

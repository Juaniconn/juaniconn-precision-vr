import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FileText, Package, AlertTriangle, CreditCard } from "lucide-react";

const PoliticaVenta = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold text-secondary tracking-widest uppercase mb-4 block">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-foreground">
              POLÍTICA DE <span className="text-secondary">VENTA</span>
            </h1>
            <p className="text-sm text-muted-foreground">Última actualización: 17 de junio de 2026</p>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Card icon={FileText} title="Al Adquirir un Producto Beekonz">
              <p className="text-muted-foreground leading-relaxed">
                Al realizar una compra en beekonz.shop aceptas los siguientes términos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-4">
                <li>Usar el dispositivo de forma responsable</li>
                <li>No modificar componentes internos</li>
                <li>Aceptar variaciones en los tiempos de envío</li>
                <li>Comprender que la compatibilidad depende del ecosistema SlimeVR / SteamVR (software de terceros)</li>
                <li>Los pedidos solo pueden cancelarse antes de ser enviados; después de despachados son finales y no reembolsables</li>
              </ul>
            </Card>

            <Card icon={CreditCard} title="Pagos">
              <p className="text-muted-foreground leading-relaxed">
                Todas las compras se procesan de forma segura mediante Stripe. Los precios se muestran en Pesos
                Mexicanos (MXN) salvo que se indique lo contrario. Los precios pueden cambiar sin previo aviso, pero
                los pedidos confirmados mantienen el precio acordado.
              </p>
            </Card>

            <Card icon={Package} title="Envíos">
              <p className="text-muted-foreground leading-relaxed">
                Los tiempos de envío son estimados y pueden variar según ubicación y condiciones logísticas. México:
                2-5 días hábiles. Internacional: 5-10 días hábiles. Todos los envíos incluyen número de rastreo. Para
                más detalle, consulta nuestra{" "}
                <a href="/politica-envios" className="text-secondary hover:underline font-medium">
                  Política de Envíos
                </a>
                .
              </p>
            </Card>

            <Card icon={AlertTriangle} title="Actualizaciones y Soporte">
              <p className="text-muted-foreground leading-relaxed">
                Beekonz puede actualizar firmware y especificaciones sin previo aviso para mejorar la experiencia del
                usuario. Para cualquier duda, contáctanos a través de nuestro{" "}
                <a
                  href="https://discord.gg/ekr3ERWJQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline font-medium"
                >
                  Discord oficial
                </a>
                .
              </p>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

const Card = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="relative p-8 rounded-2xl bg-card border border-border overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
          <Icon className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-2xl font-display text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  </div>
);

export default PoliticaVenta;

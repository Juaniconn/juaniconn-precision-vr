import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Truck, Package, Globe, AlertTriangle, Shield, MapPin } from "lucide-react";

const PoliticaEnvios = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-primary">Logística</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-foreground">
              POLÍTICA DE <span className="text-primary">ENVÍOS</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground mt-6">
              Al realizar un pedido en beekonz.shop aceptas los siguientes términos de envío.
            </p>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Section icon={Package} title="Procesamiento y Envío de Pedidos">
              <p>
                Los pedidos se procesan y se envían dentro de nuestros tiempos de preparación establecidos. Una vez
                que un pedido ha sido enviado, no puede ser cancelado. Todas las ventas son finales y no
                reembolsables.
              </p>
            </Section>

            <Section icon={Truck} title="Responsabilidad del Envío">
              <p>
                La titularidad y responsabilidad del paquete se transfieren al cliente una vez que el envío ha sido
                entregado al servicio de paquetería. No somos responsables por retrasos, pérdidas o daños que puedan
                ocurrir durante el transporte al destino.
              </p>
              <p className="text-sm text-muted-foreground">
                Todos los envíos incluyen número de rastreo. Puedes consultar tu pedido en la sección de{" "}
                <a href="/seguimiento-pedidos" className="text-primary font-medium hover:underline">
                  Seguimiento de Pedidos
                </a>
                .
              </p>
            </Section>

            <Section icon={MapPin} title="Envíos Nacionales (México)">
              <p>
                Realizamos envíos a los <strong className="text-foreground">32 estados</strong> de la República
                Mexicana desde nuestro centro logístico en Ciudad de México. Los tiempos estimados de entrega son de{" "}
                <strong className="text-foreground">2 a 5 días hábiles</strong>, dependiendo de la ubicación.
              </p>
            </Section>

            <Section icon={Globe} title="Envíos Internacionales y Aduanas">
              <p>
                Realizamos envíos internacionales a más de 12 países. Para pedidos internacionales, el cliente es el
                único responsable de cualquier arancel de importación, impuesto de exportación, cargo aduanal,
                impuestos, costo de agente aduanal u otros cargos requeridos por el país destino. Estos cargos no
                están incluidos en el precio de compra ni en el costo de envío salvo que se indique explícitamente.
              </p>
              <p>
                El cliente también es responsable de cumplir con las leyes y regulaciones aduaneras locales del país
                destino. Si se utiliza un servicio de mensajería, el cliente asume toda la responsabilidad de declarar
                correctamente la mercancía y de pagar cualquier arancel, multa, penalización, costo de almacenaje o
                cargo adicional impuesto por las autoridades aduaneras.
              </p>
            </Section>

            <Section icon={AlertTriangle} title="No Pago de Cargos Aduanales">
              <p>
                Si un envío es rechazado, abandonado, devuelto o retenido en aduana debido a tarifas no pagadas,
                declaraciones incorrectas o problemas regulatorios, no somos responsables de reembolsos, reenvíos ni
                compensación de ningún tipo.
              </p>
            </Section>

            <Section icon={Shield} title="Envíos Relacionados con Garantía">
              <p>
                Si un envío de reemplazo es aprobado bajo nuestra garantía limitada de 180 días, el cliente sigue
                siendo responsable de cualquier arancel aduanal, impuesto o cargo relacionado con la importación del
                envío de reemplazo.
              </p>
            </Section>

            <Section icon={Truck} title="Contacto">
              <p>
                Para preguntas relacionadas con envíos, contáctanos a través de nuestro{" "}
                <a
                  href="https://discord.gg/ekr3ERWJQ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:underline"
                >
                  Discord oficial
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

const Section = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="relative p-8 rounded-2xl overflow-hidden bg-card border border-border">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
    <div className="relative">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/15">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-display text-foreground">{title}</h2>
      </div>
      <div className="space-y-4 leading-relaxed text-foreground/90">{children}</div>
    </div>
  </div>
);

export default PoliticaEnvios;

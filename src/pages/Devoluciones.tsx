import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, RotateCcw, Headphones, AlertCircle } from "lucide-react";

const Devoluciones = () => {
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
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-primary">Políticas</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-foreground">
              POLÍTICA DE <span className="text-primary">REEMBOLSO Y GARANTÍA</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground mt-6">
              Cancelación de pedidos, devoluciones y garantía limitada Beekonz
            </p>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Section icon={RotateCcw} title="Cancelación de Pedidos">
              <p>
                Los pedidos solo pueden ser cancelados <strong className="text-foreground">antes</strong> de ser
                enviados. Una vez que el pedido ha sido enviado, la venta es considerada final y no reembolsable.
              </p>
            </Section>

            <Section icon={AlertCircle} title="Devoluciones y Reembolsos">
              <p>
                No aceptamos devoluciones ni ofrecemos reembolsos por productos ya entregados.
              </p>
              <p>
                Si necesitas una reparación o reemplazo por un artículo defectuoso o que presente fallas, contáctanos
                a través de nuestro{" "}
                <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Discord oficial
                </a>
                . Asegúrate de incluir tu número de pedido e información de contacto para poder asistirte.
              </p>
            </Section>

            <Section icon={Shield} title="Garantía Limitada Beekonz — 180 días">
              <p>
                Todos los productos Beekonz están cubiertos por una <strong className="text-foreground">garantía
                limitada de 180 días</strong>. Si un producto se confirma como defectuoso o presenta fallas dentro de
                este período de garantía, enviaremos un reemplazo por la pieza dañada o defectuosa.
              </p>
              <p className="text-sm text-muted-foreground">
                La garantía no cubre: daños por mal uso, modificaciones externas, descargas eléctricas, golpes o
                desgaste normal.
              </p>
            </Section>

            <Section icon={Headphones} title="Proceso de Soporte">
              <p>
                Para iniciar un proceso de garantía, contáctanos por{" "}
                <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Discord
                </a>
                . Nuestro equipo te guiará paso a paso y resolverá cualquier duda en el menor tiempo posible.
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

export default Devoluciones;

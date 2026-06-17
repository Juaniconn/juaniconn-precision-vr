import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Database, Lock, Globe, Users, FileText } from "lucide-react";

const PoliticaPrivacidad = () => {
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
            <span className="text-sm font-semibold tracking-widest uppercase mb-4 block text-primary">Legal</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display mb-4 text-foreground">
              POLÍTICA DE <span className="text-primary">PRIVACIDAD</span>
            </h1>
            <div className="w-24 h-1 mx-auto rounded-full bg-primary" />
            <p className="text-sm text-muted-foreground mt-6">Última actualización: 17 de junio de 2026</p>
          </div>

          <div className="space-y-8 animate-fade-in">
            <Section icon={FileText} title="Introducción">
              <p>
                Beekonz opera esta tienda en línea y sitio web (beekonz.shop), incluyendo toda la información,
                contenido, funciones, herramientas, productos y servicios relacionados (los "Servicios"). Esta Política
                de Privacidad describe cómo recopilamos, usamos y divulgamos tu información personal cuando usas
                nuestros Servicios o te comunicas con nosotros.
              </p>
              <p>Al utilizar los Servicios, reconoces haber leído y comprendido esta Política de Privacidad.</p>
            </Section>

            <Section icon={Database} title="Información Personal que Recopilamos">
              <p>Podemos recopilar información personal incluyendo:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Nombre, dirección de facturación y de envío",
                  "Correo electrónico y número de teléfono",
                  "Información de pago y de transacción",
                  "Credenciales y preferencias de cuenta",
                  "Mensajes enviados a través del formulario de contacto o Discord",
                  "Dispositivo, navegador, dirección IP y datos de uso",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Shield} title="Cómo Usamos tu Información">
              <p>Usamos la información personal para:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Procesar y cumplir con tus pedidos",
                  "Brindar soporte al cliente vía Discord y formulario web",
                  "Enviar actualizaciones de envío y pedido",
                  "Prevenir fraude y proteger las transacciones",
                  "Cumplir con obligaciones legales",
                  "Mejorar nuestra tienda y servicios",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-foreground">No vendemos tu información personal.</p>
            </Section>

            <Section icon={Users} title="Cómo Compartimos la Información">
              <p>Podemos compartir información personal con:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Procesadores de pago (Stripe)",
                  "Proveedores de envío y logística",
                  "Plataformas de seguimiento de pedidos (ClickUp)",
                  "Proveedores de prevención de fraude y analítica",
                  "Autoridades legales cuando la ley lo requiera",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>Estos proveedores solo procesan la información necesaria para prestar sus servicios.</p>
            </Section>

            <Section icon={Lock} title="Seguridad y Retención">
              <p>Aplicamos medidas razonables para proteger tu información. Sin embargo, ningún sistema puede garantizar seguridad absoluta.</p>
              <p>Retenemos la información personal únicamente durante el tiempo necesario para:</p>
              <ul className="space-y-2 list-none">
                {["Prestar nuestros servicios", "Cumplir obligaciones legales", "Resolver disputas", "Hacer cumplir acuerdos"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </Section>

            <Section icon={Shield} title="Tus Derechos">
              <p>Dependiendo de tu ubicación, puedes tener derecho a:</p>
              <ul className="space-y-2 list-none">
                {[
                  "Acceder a tu información personal",
                  "Solicitar corrección o eliminación",
                  "Solicitar una copia de tus datos",
                  "Optar por no recibir comunicaciones de marketing",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Las solicitudes pueden enviarse a través de nuestro{" "}
                <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Discord oficial
                </a>
                .
              </p>
            </Section>

            <Section icon={Users} title="Privacidad de Menores">
              <p>
                Nuestros Servicios no están destinados a menores de edad. No recopilamos intencionalmente información
                personal de menores.
              </p>
            </Section>

            <Section icon={Globe} title="Transferencias Internacionales">
              <p>
                Tu información puede ser procesada en países distintos al tuyo, incluyendo Estados Unidos, donde las
                leyes de protección de datos pueden diferir.
              </p>
            </Section>

            <Section icon={FileText} title="Cambios a esta Política">
              <p>
                Podemos actualizar esta Política de Privacidad de vez en cuando. Las actualizaciones se publicarán en
                esta página con la fecha revisada.
              </p>
            </Section>

            <Section icon={Lock} title="Contacto">
              <p>
                Para preguntas sobre esta Política de Privacidad o para ejercer tus derechos de privacidad, contáctanos
                a través de nuestro{" "}
                <a href="https://discord.gg/ekr3ERWJQ6" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
                  Discord oficial
                </a>{" "}
                o visita{" "}
                <a href="https://beekonz.shop" className="text-primary font-medium hover:underline">
                  beekonz.shop
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

export default PoliticaPrivacidad;

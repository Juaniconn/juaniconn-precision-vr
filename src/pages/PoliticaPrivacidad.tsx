import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, Cookie, Database, Mail } from "lucide-react";

const PoliticaPrivacidad = () => {
  const sections = [
    {
      icon: Database,
      title: "Información que Recopilamos",
      content: "Podemos recopilar información personal como nombre, dirección de correo electrónico, número de teléfono y dirección de envío cuando realizas una compra o nos contactas directamente."
    },
    {
      icon: Shield,
      title: "Uso de la Información",
      content: "La información proporcionada se utiliza exclusivamente para procesar pedidos, coordinar envíos, brindar soporte y mejorar la experiencia de compra. No vendemos, intercambiamos ni compartimos tus datos personales con terceros ajenos a nuestra operación."
    },
    {
      icon: Lock,
      title: "Pagos y Seguridad",
      content: "Los pagos se procesan mediante plataformas seguras y reconocidas que cumplen con estándares de cifrado. Nosotros no almacenamos datos de tarjetas bancarias ni credenciales de pago."
    },
    {
      icon: Cookie,
      title: "Cookies y Datos de Navegación",
      content: "Utilizamos cookies únicamente para mejorar el funcionamiento y la experiencia del sitio, como recordar preferencias o facilitar el uso del carrito. Puedes desactivar las cookies desde tu navegador si lo deseas."
    },
    {
      icon: Database,
      title: "Almacenamiento de Datos",
      content: "Mantenemos tus datos de forma segura y limitada únicamente al tiempo necesario para completar transacciones y cumplir con obligaciones legales aplicables."
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
              <span className="text-sm font-medium text-primary">Tu privacidad importa</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Política de <span className="text-gradient">Privacidad</span>
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
                    <p className="text-muted-foreground leading-relaxed">{section.content}</p>
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
                    Si deseas acceder, modificar o eliminar tus datos personales, o tienes alguna duda respecto al manejo de los mismos, puedes contactarnos a través de nuestro{" "}
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

export default PoliticaPrivacidad;

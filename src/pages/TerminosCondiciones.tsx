import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  FileText, Scale, CreditCard, Truck, Shield, AlertCircle,
  Copyright, MapPin, Lock, Globe, UserCheck, Package, Link2,
} from "lucide-react";

const TerminosCondiciones = () => {
  const sections = [
    {
      icon: FileText,
      title: "Introducción",
      content: [
        'Bienvenido a Beekonz. Los términos "nosotros", "nuestro" y "nos" se refieren a Beekonz Trackers. Beekonz opera esta tienda y sitio web, incluyendo toda la información, contenido, funciones, herramientas, productos y servicios relacionados (los "Servicios").',
        "Al visitar, interactuar o usar nuestros Servicios, aceptas estar sujeto a estos Términos y Condiciones y a nuestra Política de Privacidad. Si no estás de acuerdo, no deberías usar los Servicios.",
      ],
    },
    {
      icon: UserCheck,
      title: "1. Acceso y Cuenta",
      content: [
        "Al aceptar estos Términos, declaras tener al menos la mayoría de edad en tu lugar de residencia.",
        "Aceptas proporcionar información veraz, actualizada y completa para tus compras y uso de cuenta.",
        "Eres responsable de mantener la seguridad de tu cuenta y credenciales.",
      ],
    },
    {
      icon: Package,
      title: "2. Productos",
      content: [
        "Intentamos mostrar los productos con la mayor precisión posible, pero no garantizamos que las imágenes, colores o apariencia sean idénticos a lo que ves en tu dispositivo.",
        "Las descripciones y disponibilidad de productos pueden cambiar en cualquier momento sin previo aviso.",
      ],
    },
    {
      icon: FileText,
      title: "3. Pedidos",
      content: [
        "Cuando realizas un pedido, estás haciendo una oferta de compra. Nos reservamos el derecho de aceptar o rechazar cualquier pedido.",
        "Los pedidos solo pueden cancelarse antes de ser enviados. Una vez enviados, la venta es final y no reembolsable.",
        "Las solicitudes de reparación o reemplazo se manejan exclusivamente conforme a nuestra garantía limitada de 180 días.",
      ],
    },
    {
      icon: CreditCard,
      title: "4. Precios y Facturación",
      content: [
        "Los precios están sujetos a cambios sin previo aviso. Los precios publicados no incluyen impuestos, envío, aranceles aduaneros ni cargos de importación, salvo que se indique explícitamente.",
        "Aceptas proporcionar información de pago válida y nos autorizas a cargar el método de pago seleccionado a través de Stripe.",
      ],
    },
    {
      icon: Truck,
      title: "5. Envíos y Entrega",
      content: [
        "Todos los tiempos de entrega son estimados y no están garantizados.",
        "Una vez que los productos son entregados al servicio de paquetería, la titularidad y el riesgo de pérdida pasan al cliente. No somos responsables por retrasos, pérdida o daño durante el tránsito.",
        "Para envíos internacionales, el cliente es el único responsable de aranceles, impuestos de importación, tarifas de exportación, costos de agente aduanal, multas, almacenaje y demás cargos requeridos por el país destino.",
        "Si se utiliza un servicio de mensajería, el cliente asume la responsabilidad de declarar correctamente la mercancía y de cumplir con las regulaciones locales de importación.",
        "Si un envío es rechazado, abandonado, devuelto o retenido en aduana por cualquier motivo, el pedido continúa siendo no reembolsable.",
      ],
    },
    {
      icon: Copyright,
      title: "6. Propiedad Intelectual",
      content: [
        "Todo el contenido de este sitio web, incluyendo logos, textos, imágenes, gráficos y diseños de productos, es propiedad de Beekonz Trackers o de sus licenciantes y está protegido por leyes de propiedad intelectual. El uso no autorizado está prohibido.",
      ],
    },
    {
      icon: AlertCircle,
      title: "6A. Aviso de Marca de Terceros (SlimeVR)",
      content: [
        '"SlimeVR" es un nombre y marca registrada de terceros propiedad de sus respectivos dueños. Beekonz Trackers es un vendedor independiente de hardware de terceros compatible y no está afiliado, respaldado, patrocinado o conectado oficialmente con el proyecto SlimeVR, su marca, organización o desarrolladores.',
        "Nuestros productos son dispositivos de hardware de terceros diseñados para ser compatibles con ecosistemas de software desarrollados por la comunidad. No vendemos productos oficiales de SlimeVR.",
        "Al comprar en nuestra tienda, reconoces y aceptas que: (i) estos son dispositivos de terceros; (ii) no somos representantes, socios o agentes del proyecto SlimeVR; (iii) la marca, software y ecosistema de SlimeVR son propiedad y son mantenidos por sus respectivos creadores; (iv) la compatibilidad del software puede depender de proyectos de terceros fuera de nuestro control; (v) todas las marcas, nombres y referencias de terceros se utilizan únicamente con fines de compatibilidad e identificación.",
      ],
    },
    {
      icon: Link2,
      title: "7. Herramientas Opcionales",
      content: [
        'Podemos ofrecer acceso a herramientas de terceros "tal cual" sin garantías. El uso de estas herramientas es bajo tu propio riesgo.',
      ],
    },
    {
      icon: Globe,
      title: "8. Enlaces a Terceros",
      content: [
        "No somos responsables por sitios web o servicios de terceros vinculados desde nuestros Servicios.",
      ],
    },
    {
      icon: CreditCard,
      title: "9. Pagos con Stripe",
      content: [
        "Los pagos se procesan de manera segura a través de Stripe. Todas las compras se realizan directamente con Beekonz Trackers. Stripe no es responsable de reclamaciones relacionadas con compras realizadas en nuestra tienda.",
      ],
    },
    {
      icon: Lock,
      title: "10. Privacidad",
      content: [
        "El envío de tu información personal a través de la tienda se rige por nuestra Política de Privacidad.",
      ],
    },
    {
      icon: FileText,
      title: "11. Retroalimentación",
      content: [
        "Cualquier retroalimentación que nos proporciones podrá ser utilizada por nosotros sin restricción ni compensación.",
      ],
    },
    {
      icon: AlertCircle,
      title: "12. Errores",
      content: [
        "Nos reservamos el derecho de corregir errores, inexactitudes u omisiones y de cancelar pedidos si es necesario.",
      ],
    },
    {
      icon: Shield,
      title: "13. Usos Prohibidos",
      content: [
        "No puedes usar los Servicios con fines ilegales ni para violar leyes o derechos de propiedad intelectual.",
      ],
    },
    {
      icon: AlertCircle,
      title: "14. Terminación",
      content: [
        "Podemos terminar el acceso a los Servicios en cualquier momento si se violan estos Términos.",
      ],
    },
    {
      icon: Shield,
      title: "15. Renuncia de Garantías",
      content: [
        'Todos los productos y servicios se proporcionan "tal cual" y "según disponibilidad" sin garantías de ningún tipo, excepto por nuestra política de reemplazo de garantía limitada de 180 días.',
      ],
    },
    {
      icon: Scale,
      title: "16. Limitación de Responsabilidad",
      content: [
        "En la máxima medida permitida por la ley, Beekonz Trackers no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros Servicios o productos.",
      ],
    },
    {
      icon: Shield,
      title: "17. Indemnización",
      content: [
        "Aceptas indemnizar y mantener indemne a Beekonz Trackers de cualquier reclamación derivada de tu incumplimiento de estos Términos o uso indebido de los Servicios.",
      ],
    },
    {
      icon: FileText,
      title: "18. Divisibilidad",
      content: [
        "Si alguna disposición de estos Términos resulta inaplicable, las disposiciones restantes seguirán vigentes.",
      ],
    },
    {
      icon: FileText,
      title: "19. Acuerdo Completo",
      content: [
        "Estos Términos constituyen el acuerdo completo entre tú y Beekonz Trackers en relación con los Servicios.",
      ],
    },
    {
      icon: FileText,
      title: "20. Cesión",
      content: [
        "Podemos ceder nuestros derechos bajo estos Términos sin previo aviso.",
      ],
    },
    {
      icon: MapPin,
      title: "21. Ley Aplicable",
      content: [
        "Estos Términos se rigen por las leyes de los Estados Unidos Mexicanos.",
      ],
    },
    {
      icon: AlertCircle,
      title: "22. Cambios",
      content: [
        "Nos reservamos el derecho de actualizar estos Términos en cualquier momento publicando los cambios en nuestro sitio web.",
      ],
    },
    {
      icon: FileText,
      title: "23. Contacto",
      content: [
        "Para preguntas sobre estos Términos, contáctanos a través de nuestro Discord oficial: https://discord.gg/ekr3ERWJQ6",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bee-gradient-soft opacity-50" />
        <div className="absolute inset-0 grid-pattern opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-sm font-medium tracking-widest uppercase mb-6">
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
              TÉRMINOS Y <span className="text-secondary">CONDICIONES</span>
            </h1>
            <p className="text-xl text-muted-foreground font-light">Última actualización: 17 de junio de 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-8 animate-fade-in hover:border-secondary/40 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-foreground">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-card border border-secondary/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">
                ¿Tienes preguntas sobre estos términos?
              </h3>
              <p className="text-muted-foreground mb-6">Contáctanos a través de nuestro Discord oficial</p>
              <a
                href="https://discord.gg/ekr3ERWJQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-full hover:bg-bee-gold-hover transition-all duration-300"
              >
                Contactar en Discord
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TerminosCondiciones;

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Info } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const SeguimientoPedidos = () => {
  return (
    <main 
      className="min-h-screen"
      style={{
        background: 'hsl(var(--background))'
      }}
    >
      <Header />
      
      {/* Page Content */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide mb-4"
              style={{ color: 'hsl(var(--foreground))' }}
            >
              Seguimiento de Pedidos
            </h1>
            <div 
              className="w-24 h-1 mx-auto mb-6 rounded-full"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
            />
            <p 
              className="text-lg max-w-2xl mx-auto mb-8"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Visualiza el progreso de tu pedido en tiempo real.
            </p>
            <p 
              className="max-w-3xl mx-auto leading-relaxed"
              style={{ color: 'hsl(var(--foreground) / 0.9)' }}
            >
              Desde la fabricación hasta la entrega final, aquí puedes consultar el estado actualizado de tu pedido directamente desde nuestro panel interno.
            </p>
          </div>

          {/* ClickUp Embed */}
          <div className="max-w-5xl mx-auto mb-12">
            <div 
              className="rounded-2xl overflow-hidden p-1"
              style={{
                background: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
              }}
            >
              <iframe 
                className="clickup-embed w-full rounded-xl"
                src="https://sharing.clickup.com/9017841418/b/h/8cr2nra-517/7ae5e7a78615cff"
                height="700"
                style={{
                  background: 'transparent',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '12px',
                }}
                title="Seguimiento de Pedidos Beekonz"
              />
            </div>
          </div>

          {/* Info Notice */}
          <div 
            className="max-w-3xl mx-auto mb-12 p-5 rounded-xl flex items-start gap-4"
            style={{
              background: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
            }}
          >
            <Info 
              className="w-6 h-6 flex-shrink-0 mt-0.5"
              style={{ color: 'hsl(var(--primary))' }}
            />
            <p 
              className="text-sm md:text-base leading-relaxed"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              Si tu pedido no aparece, verifica tu número de orden o contáctanos directamente para ayudarte.
            </p>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="https://discord.gg/ekr3ERWJQ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
              style={{
                backgroundColor: 'hsl(var(--primary))',
                color: 'hsl(var(--primary-foreground))',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px hsl(34 100% 50% / 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <DiscordIcon className="w-5 h-5" />
              <span>¿Tienes dudas sobre tu pedido?</span>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default SeguimientoPedidos;

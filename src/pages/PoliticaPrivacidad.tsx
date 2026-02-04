import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Database, Lock } from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const PoliticaPrivacidad = () => {
  return (
    <main 
      className="min-h-screen"
      style={{
        background: 'linear-gradient(180deg, #1A070E 0%, #25010B 100%)'
      }}
    >
      <Header />
      <div className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F3CC80 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10">
          {/* Hero */}
          <div className="text-center mb-16 animate-fade-in">
            <span 
              className="text-sm font-semibold tracking-widest uppercase mb-4 block"
              style={{ color: '#F3CC80' }}
            >
              Legal
            </span>
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display mb-4"
              style={{ color: '#FBF4F4' }}
            >
              POLÍTICA DE <span style={{ color: '#F3CC80' }}>PRIVACIDAD</span>
            </h1>
            <div 
              className="w-24 h-1 mx-auto rounded-full"
              style={{ backgroundColor: '#F3CC80' }}
            />
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Protección de Datos */}
            <div 
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: '#2A0F18',
                border: '1px solid #3A1C23',
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(243, 204, 128, 0.15)' }}
                  >
                    <Shield className="w-6 h-6" style={{ color: '#F3CC80' }} />
                  </div>
                  <h2 className="text-2xl font-display" style={{ color: '#FBF4F4' }}>Protección de Datos</h2>
                </div>
                <p className="leading-relaxed" style={{ color: '#E6DDE0' }}>
                  Protegemos tu información con seriedad. Solo recolectamos datos esenciales para procesar compras y ofrecer soporte.
                </p>
              </div>
            </div>

            {/* Uso de Información */}
            <div 
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: '#2A0F18',
                border: '1px solid #3A1C23',
              }}
            >
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(243, 204, 128, 0.15)' }}
                  >
                    <Database className="w-6 h-6" style={{ color: '#F3CC80' }} />
                  </div>
                  <h2 className="text-2xl font-display" style={{ color: '#FBF4F4' }}>Uso de Información</h2>
                </div>
                <div className="space-y-4" style={{ color: '#E6DDE0' }}>
                  <p className="leading-relaxed">
                    Nunca vendemos ni compartimos tu información con terceros. Tus datos se utilizan exclusivamente para:
                  </p>
                  <ul className="list-none space-y-3 ml-2">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F3CC80' }} />
                      Procesar y enviar pedidos
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F3CC80' }} />
                      Comunicación post-compra
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F3CC80' }} />
                      Soporte técnico
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#F3CC80' }} />
                      Mejora de productos y servicios
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tus Derechos */}
            <div 
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: '#2A0F18',
                border: '1px solid #3A1C23',
              }}
            >
              <div className="absolute top-0 left-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(243, 204, 128, 0.15)' }}
                  >
                    <Lock className="w-6 h-6" style={{ color: '#F3CC80' }} />
                  </div>
                  <h2 className="text-2xl font-display" style={{ color: '#FBF4F4' }}>Tus Derechos</h2>
                </div>
                <p className="leading-relaxed" style={{ color: '#E6DDE0' }}>
                  Puedes solicitar la eliminación total de tus datos en cualquier momento contactándonos a través de nuestro{" "}
                  <a 
                    href="https://discord.gg/ekr3ERWJQ6" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-medium hover:underline"
                    style={{ color: '#F3CC80' }}
                  >
                    Discord oficial
                  </a>.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-8">
              <a
                href="https://discord.gg/ekr3ERWJQ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl group"
                style={{
                  backgroundColor: '#F3CC80',
                  color: '#25010B',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(243, 204, 128, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '';
                }}
              >
                <DiscordIcon className="w-5 h-5" />
                <span>Contactar Soporte</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PoliticaPrivacidad;

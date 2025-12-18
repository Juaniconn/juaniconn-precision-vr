import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { 
  Menu, 
  X, 
  ChevronRight,
  Cpu,
  Package,
  HelpCircle,
  FileText,
  Shield,
  Scale,
  Download,
  Users,
  Target,
  Sparkles,
  Zap
} from "lucide-react";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mega-menu-container') && !target.closest('.menu-trigger')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const productItems = [
    { name: "Starter Pack (6 Trackers)", href: "https://buy.stripe.com/dRm00k1bneIteETdrT7g40f", external: true },
    { name: "Advanced Pack (8 Trackers)", href: "https://buy.stripe.com/4gM3cwaLX6bXaoD87z7g40g", external: true },
    { name: "Pro Pack (10 Trackers)", href: "https://buy.stripe.com/bJeeVe7zLbwhcwL4Vn7g40h", external: true },
    { name: "Crear mi Set (Personalizado)", href: "https://discord.gg/juaniconn", external: true },
  ];

  const aboutItems = [
    { name: "Acerca de Juaniconn", href: "/acerca-de", icon: Users },
    { name: "Nuestra Misión", href: "/mision", icon: Target },
    { name: "Garantía y Devoluciones", href: "/garantia-devoluciones", icon: Shield },
    { name: "Política de Privacidad", href: "/politica-privacidad", icon: FileText },
    { name: "Términos y Condiciones", href: "/politica-venta", icon: Scale },
  ];

  const resourceItems = [
    { name: "FAQ", href: "/faq", icon: HelpCircle },
    { name: "Actualizaciones de Firmware", href: "https://github.com/DTQSYS/NRF52840-ICM45686-QMC6309", icon: Download, external: true },
    { name: "Especificaciones Técnicas", href: "/especificaciones-tecnicas", icon: Zap },
  ];

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}>
        <nav className="flex items-center gap-2 px-3 py-2 bg-black/60 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          {/* Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-mint to-soft-blue rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <Cpu className="relative w-4 h-4 text-white" />
            </div>
            <span className="text-white font-display text-base tracking-wider hidden sm:block">Juaniconn</span>
            <Sparkles className="w-3 h-3 text-mint animate-pulse hidden sm:block" />
          </NavLink>

          {/* Menu Button - Desktop */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-trigger hidden md:flex items-center gap-2 px-4 py-2 bg-black/80 rounded-full border border-white/20 hover:border-mint/50 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-1">
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
            </div>
            <span className="text-white text-sm font-medium">menu</span>
          </button>

          {/* Discord Icon */}
          <a 
            href="https://discord.gg/juaniconn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
          >
            <DiscordIcon className="w-5 h-5 text-white" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-black/60 border border-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </nav>

        {/* Mega Menu - Desktop */}
        <div className={`mega-menu-container absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 hidden md:block ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="relative flex rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-card rotate-45 rounded-sm border-l border-t border-white/10" />
            
            {/* Productos */}
            <div className="w-64 bg-gradient-to-br from-background to-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Package className="w-5 h-5 text-mint" />
                  <h3 className="text-mint text-sm font-medium uppercase tracking-wider">Productos</h3>
                </div>
                <ul className="space-y-3">
                  {productItems.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between text-foreground/70 hover:text-mint text-sm py-1 group transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.name}</span>
                        <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quiénes Somos */}
            <div className="w-56 bg-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/10 to-soft-pink/5 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Users className="w-5 h-5 text-soft-blue" />
                  <h3 className="text-soft-blue text-sm font-medium uppercase tracking-wider">Quiénes Somos</h3>
                </div>
                <ul className="space-y-3">
                  {aboutItems.map((item, idx) => (
                    <li key={idx}>
                      <NavLink 
                        to={item.href}
                        className="flex items-center gap-3 text-foreground/70 hover:text-foreground text-sm py-1 group transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-soft-blue/60 group-hover:text-soft-blue transition-colors" />
                        <span>{item.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Recursos */}
            <div className="w-56 bg-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-bl from-soft-pink/10 to-soft-orange/5 pointer-events-none" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Zap className="w-5 h-5 text-soft-pink" />
                  <h3 className="text-soft-pink text-sm font-medium uppercase tracking-wider">Recursos</h3>
                </div>
                <ul className="space-y-3">
                  {resourceItems.map((item, idx) => (
                    <li key={idx}>
                      {item.external ? (
                        <a 
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-foreground/70 hover:text-foreground text-sm py-1 group transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-soft-pink/60 group-hover:text-soft-pink transition-colors" />
                          <span>{item.name}</span>
                        </a>
                      ) : (
                        <NavLink 
                          to={item.href}
                          className="flex items-center gap-3 text-foreground/70 hover:text-foreground text-sm py-1 group transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <item.icon className="w-4 h-4 text-soft-pink/60 group-hover:text-soft-pink transition-colors" />
                          <span>{item.name}</span>
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-20 px-6 overflow-y-auto md:hidden">
          <div className="flex flex-col w-full space-y-6">
            {/* Productos */}
            <div>
              <h3 className="text-mint text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Package className="w-4 h-4" />
                Productos
              </h3>
              <ul className="space-y-3 pl-2">
                {productItems.map((item, idx) => (
                  <li key={idx}>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/70 hover:text-white text-sm flex items-center gap-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <ChevronRight className="w-3 h-3" />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quiénes Somos */}
            <div>
              <h3 className="text-soft-blue text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Quiénes Somos
              </h3>
              <ul className="space-y-3 pl-2">
                {aboutItems.map((item, idx) => (
                  <li key={idx}>
                    <NavLink 
                      to={item.href}
                      className="text-white/70 hover:text-white text-sm flex items-center gap-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-soft-blue/60" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="text-soft-pink text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Recursos
              </h3>
              <ul className="space-y-3 pl-2">
                {resourceItems.map((item, idx) => (
                  <li key={idx}>
                    {item.external ? (
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white text-sm flex items-center gap-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-soft-pink/60" />
                        {item.name}
                      </a>
                    ) : (
                      <NavLink 
                        to={item.href}
                        className="text-white/70 hover:text-white text-sm flex items-center gap-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-soft-pink/60" />
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Discord CTA */}
            <div className="pt-4 border-t border-white/10">
              <a 
                href="https://discord.gg/juaniconn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-white font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DiscordIcon className="w-5 h-5" />
                Únete a Discord
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

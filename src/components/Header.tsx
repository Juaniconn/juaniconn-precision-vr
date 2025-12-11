import { useState, useEffect } from "react";
import { NavLink } from "./NavLink";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  ChevronRight,
  Cpu,
  Package,
  Settings,
  Wrench,
  Cable,
  HelpCircle,
  FileText,
  Shield,
  Scale,
  MessageCircle,
  Download,
  Mail,
  Users,
  Target,
  Sparkles
} from "lucide-react";

// Discord icon component
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

  // Close menu when clicking outside
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
    { 
      title: "Sets de Trackers", 
      items: [
        { name: "Starter Set (6 trackers)", href: "/productos#starter" },
        { name: "Advanced Set (8 trackers)", href: "/productos#advanced" },
        { name: "Pro Set (10 trackers)", href: "/productos#pro" },
      ]
    },
    { 
      title: "Set Personalizado", 
      items: [
        { name: "Crear mi Set", href: "/productos#custom" },
      ]
    },
    { 
      title: "Piezas y Accesorios", 
      items: [
        { name: "Dongle NRF52840", href: "/productos#parts" },
        { name: "Straps", href: "/productos#parts" },
        { name: "Carcasas", href: "/productos#parts" },
        { name: "PCB de reemplazo", href: "/productos#parts" },
        { name: "Cables USB-C", href: "/productos#parts" },
      ]
    },
  ];

  const aboutItems = [
    { name: "Acerca de Juaniconn", href: "/contacto", icon: Users },
    { name: "Nuestra misión", href: "/contacto", icon: Target },
    { name: "Garantía y Devoluciones", href: "/garantia-devoluciones", icon: Shield },
    { name: "Política de privacidad", href: "/politica-privacidad", icon: FileText },
    { name: "Términos y condiciones", href: "/politica-venta", icon: Scale },
  ];

  const resourceItems = [
    { name: "Soporte", href: "https://discord.gg/UE2QDNf3sK", icon: HelpCircle, external: true },
    { name: "FAQ", href: "/#faq", icon: MessageCircle },
    { name: "Guía de configuración", href: "/smols", icon: Settings },
    { name: "Actualizaciones de Firmware", href: "/smols", icon: Download },
    { name: "Discord oficial", href: "https://discord.gg/UE2QDNf3sK", icon: DiscordIcon, external: true },
    { name: "Contacto", href: "/contacto", icon: Mail },
  ];

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}>
        {/* Main Navbar - Pill Shape */}
        <nav className="relative flex items-center gap-2 px-2 py-2 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
          
          {/* Left Section - Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-glow rounded-lg opacity-80 group-hover:opacity-100 transition-opacity" />
              <Cpu className="relative w-5 h-5 text-white" />
            </div>
            <span className="text-white font-display text-lg tracking-wider hidden sm:block">Juaniconn</span>
            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
          </NavLink>

          {/* Decorative Diamond */}
          <div className="hidden md:flex items-center justify-center w-6">
            <div className="w-2 h-2 bg-gradient-to-br from-white/40 to-white/10 rotate-45 rounded-sm" />
          </div>

          {/* Center Section - Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="menu-trigger relative flex items-center gap-3 px-4 py-2.5 bg-black rounded-full border border-white/20 hover:border-primary/50 transition-all duration-300 group overflow-hidden"
          >
            {/* Animated border glow */}
            <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-primary/20 animate-pulse" />
            </div>
            
            <div className="relative flex items-center justify-center w-6 h-6">
              <div className={`flex flex-col gap-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-1.5 rotate-90' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-1.5' : ''}`} />
              </div>
            </div>
            
            {/* Glowing orb decoration */}
            <div className="relative w-5 h-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-60 blur-sm group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0.5 bg-gradient-to-br from-blue-300 to-purple-400 rounded-full" />
            </div>
            
            <span className="relative text-white text-sm font-medium tracking-wide hidden sm:block">menu</span>
          </button>

          {/* Right Section - Icons */}
          <div className="flex items-center gap-2">
            {/* User Icon */}
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <User className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            </button>

            {/* Cart Icon */}
            <button className="relative w-10 h-10 flex items-center justify-center rounded-full bg-black/60 border border-white/20 hover:border-white/40 transition-all duration-300 group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <ShoppingCart className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
            </button>

            {/* Discord Icon with gradient */}
            <a 
              href="https://discord.gg/UE2QDNf3sK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <DiscordIcon className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-black/60 border border-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </nav>

        {/* Mega Menu */}
        <div className={`mega-menu-container absolute top-full left-1/2 -translate-x-1/2 mt-4 transition-all duration-500 ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="relative flex rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Arrow indicator */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 rounded-sm" />
            
            {/* Column 1 - Productos (Mint gradient) */}
            <div className="w-72 bg-gradient-to-br from-background to-card p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-mint/10 to-transparent pointer-events-none" />
              <div className="absolute top-0 left-0 w-32 h-32 bg-mint/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Package className="w-5 h-5 text-mint" />
                  <h3 className="text-mint text-sm font-medium uppercase tracking-wider">Productos</h3>
                </div>
                <p className="text-xs text-foreground/50 mb-6">Trackers</p>
                
                <div className="space-y-6">
                  {productItems.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-foreground font-semibold text-sm mb-3">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <NavLink 
                              to={item.href}
                              className="flex items-center justify-between text-foreground/70 hover:text-mint text-sm py-1 group transition-colors"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              <span>{item.name}</span>
                              <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-mint" />
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2 - Quiénes Somos (Soft blue/pink glow) */}
            <div className="w-64 bg-card p-6 relative overflow-hidden">
              {/* Soft blue glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-soft-blue/10 to-soft-pink/5 pointer-events-none" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-soft-blue/20 rounded-full blur-3xl pointer-events-none" />
              
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

            {/* Column 3 - Recursos (Soft pink glow) */}
            <div className="w-64 bg-card p-6 relative overflow-hidden">
              {/* Pink glow effect */}
              <div className="absolute inset-0 bg-gradient-to-bl from-soft-pink/10 to-soft-orange/5 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-soft-pink/20 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative">
                <div className="flex items-center gap-2 mb-6">
                  <Wrench className="w-5 h-5 text-soft-pink" />
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
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl pt-24 px-6 overflow-y-auto animate-fade-in md:hidden">
          <div className="space-y-8">
            {/* Productos Section */}
            <div>
              <h3 className="text-primary text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Package className="w-4 h-4" />
                Productos
              </h3>
              {productItems.map((section, idx) => (
                <div key={idx} className="mb-4">
                  <h4 className="text-white font-semibold text-sm mb-2">{section.title}</h4>
                  <ul className="space-y-2 pl-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <NavLink 
                          to={item.href}
                          className="text-white/70 hover:text-white text-sm flex items-center gap-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <ChevronRight className="w-3 h-3" />
                          {item.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quiénes Somos Section */}
            <div>
              <h3 className="text-blue-400 text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Quiénes Somos
              </h3>
              <ul className="space-y-3">
                {aboutItems.map((item, idx) => (
                  <li key={idx}>
                    <NavLink 
                      to={item.href}
                      className="text-white/70 hover:text-white text-sm flex items-center gap-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="w-4 h-4 text-blue-400/60" />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recursos Section */}
            <div>
              <h3 className="text-purple-400 text-sm font-medium uppercase tracking-wider mb-4 flex items-center gap-2">
                <Wrench className="w-4 h-4" />
                Recursos
              </h3>
              <ul className="space-y-3">
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
                        <item.icon className="w-4 h-4 text-purple-400/60" />
                        {item.name}
                      </a>
                    ) : (
                      <NavLink 
                        to={item.href}
                        className="text-white/70 hover:text-white text-sm flex items-center gap-3"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4 text-purple-400/60" />
                        {item.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <NavLink 
              to="/productos"
              className="block w-full py-4 bg-primary hover:bg-primary-glow text-white text-center font-semibold rounded-full transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ver Productos
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

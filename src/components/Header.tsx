import { NavLink } from "./NavLink";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: "Inicio", to: "/" },
    { label: "Smols", to: "/smols" },
    { label: "Kits", action: () => scrollToSection('kits') },
    { label: "Características", action: () => scrollToSection('features') },
    { label: "Testimonios", action: () => scrollToSection('testimonials') },
    { label: "Envíos", action: () => scrollToSection('shipping') },
    { label: "FAQ", action: () => scrollToSection('faq') },
    { label: "Contacto", to: "/contacto" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-lg border-b border-border shadow-soft' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-display tracking-wider text-foreground hover:text-primary transition-smooth">
            JUANICONN
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth"
                  activeClassName="text-primary"
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-smooth"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button 
              className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-6 transition-smooth group"
              onClick={() => scrollToSection('kits')}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Comprar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in bg-card/95 backdrop-blur-lg rounded-xl p-4 border border-border">
            {navItems.map((item) => (
              item.to ? (
                <NavLink
                  key={item.label}
                  to={item.to}
                  className="block py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-smooth"
                  activeClassName="text-primary bg-primary/10"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              ) : (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action?.();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left py-3 px-4 text-foreground/80 hover:text-foreground hover:bg-secondary/50 rounded-lg transition-smooth"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4 border-t border-border mt-4">
              <Button 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground font-semibold py-6 transition-smooth"
                onClick={() => {
                  scrollToSection('kits');
                  setIsOpen(false);
                }}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Comprar Ahora
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
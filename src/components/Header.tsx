import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="text-2xl font-bold text-gradient">
            Juaniconn
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/smols"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Smols
            </NavLink>
            <NavLink
              to="/contacto"
              className="text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
            >
              Contacto
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <NavLink
              to="/"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/smols"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Smols
            </NavLink>
            <NavLink
              to="/contacto"
              className="block text-foreground/80 hover:text-foreground transition-colors"
              activeClassName="text-primary font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </NavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

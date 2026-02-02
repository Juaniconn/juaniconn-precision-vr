import { NavLink } from "./NavLink";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/logo.svg";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: "Discord", href: "https://discord.gg/ekr3ERWJQ6", icon: DiscordIcon },
    { name: "TikTok", href: "https://www.tiktok.com/@beekonz", icon: TikTokIcon },
    { name: "Instagram", href: "https://www.instagram.com/beekonz/", icon: InstagramIcon },
    { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100083643665008", icon: FacebookIcon },
  ];

  return (
    <footer className="relative py-16 bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid-pattern" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Beekonz" className="h-8 w-auto" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Precisión que se siente. Libertad que se vive.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Full Body Tracking de Alta Precisión para la comunidad hispana.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
                  title={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6 text-lg">Ayuda</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink 
                  to="/contacto" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contacto</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/seguimiento-pedidos" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Seguimiento de Pedidos</span>
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://discord.gg/ekr3ERWJQ6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <DiscordIcon className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Discord</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <NavLink 
                  to="/especificaciones-tecnicas" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Especificaciones</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6 text-lg">Políticas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink 
                  to="/politica-privacidad" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacidad</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/politica-venta" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Política de Venta</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/garantia-devoluciones" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Garantía y Devoluciones</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/terminos-condiciones" 
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Términos y Condiciones</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Productos - Updated Stripe links */}
          <div>
            <h4 className="font-display font-semibold text-primary-foreground mb-6 text-lg">Productos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Starter Pack (6)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a 
                  href="https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Advanced Pack (8)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a 
                  href="https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/70 hover:text-secondary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Pro Pack (10)</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {currentYear} Beekonz Trackers. Todos los derechos reservados.
            </p>
            <p className="text-xs text-primary-foreground/50">
              Hecho con <span className="text-secondary">❤</span> para la comunidad VR hispana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

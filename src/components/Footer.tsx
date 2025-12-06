import { NavLink } from "./NavLink";
import { Instagram, MessageCircle, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative py-16 bg-card border-t border-border overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold text-gradient">Juaniconn</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Precisión que se siente. Libertad que se vive.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Full Body Tracking de Alta Precisión para la comunidad hispana.
            </p>
          </div>

          {/* Ayuda */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-lg">Ayuda</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink 
                  to="/contacto" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Contacto</span>
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://discord.gg/UE2QDNf3sK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Discord</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <NavLink 
                  to="/smols" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Especificaciones</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Políticas */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-lg">Políticas</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <NavLink 
                  to="/politica-privacidad" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Privacidad</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/politica-venta" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Política de Venta</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/garantia-devoluciones" 
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Garantía y Devoluciones</span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-6 text-lg">Social</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a 
                  href="https://instagram.com/juaniconntv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <Instagram className="h-4 w-4" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Instagram</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@juaniconn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">TikTok</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Juaniconn Trackers. Todos los derechos reservados.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Hecho con ❤️ para la comunidad VR hispana
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

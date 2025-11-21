import { NavLink } from "./NavLink";
import { Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">Juaniconn Trackers</h3>
            <p className="text-muted-foreground text-sm">
              Precisión que se siente. Libertad que se vive.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Ayuda</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </NavLink>
              </li>
              <li>
                <a 
                  href="https://discord.gg/UE2QDNf3sK" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Políticas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <NavLink to="/politica-privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </NavLink>
              </li>
              <li>
                <NavLink to="/politica-venta" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Venta
                </NavLink>
              </li>
              <li>
                <NavLink to="/garantia-devoluciones" className="text-muted-foreground hover:text-primary transition-colors">
                  Garantía y Devoluciones
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Social</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://instagram.com/juaniconntv" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://tiktok.com/@juaniconn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Juaniconn. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

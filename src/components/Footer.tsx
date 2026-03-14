import { MessageCircle, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import LogoBadge from "./LogoBadge";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <LogoBadge size="md" />
            <div>
              <p className="font-heading text-xl font-bold text-secondary-foreground">Salgado no Prato</p>
              <p className="text-sm text-secondary-foreground/60">Sabor que conquista</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            
            <div className="flex gap-3">
              <a
                href="https://wa.me/5531993410289"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" fill="currentColor" />
              </a>
              <a
                href="https://instagram.com/salgado.noprato"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-instagram text-instagram-foreground transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-secondary-foreground/10 pt-6 text-center text-xs text-secondary-foreground/50">
          <p>
            © {year} Salgado no Prato. Todos os direitos reservados. ·{" "}
            <Link to="/politica-de-privacidade" className="underline hover:text-secondary-foreground/80">
              Política de Privacidade
            </Link>{" "}
            ·{" "}
            <Link to="/termos-de-uso" className="underline hover:text-secondary-foreground/80">
              Termos de Uso
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

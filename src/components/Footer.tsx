import { MessageCircle, Instagram, Star, MapPin, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import LogoBadge from "./LogoBadge";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        {/* Brand row */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start">
          <LogoBadge size="md" />
          <div>
            <p className="font-heading text-xl font-bold text-secondary-foreground">Salgado no Prato</p>
            <p className="max-w-xs text-sm text-secondary-foreground/60">
              Salgados artesanais preparados com ingredientes selecionados para tornar seus eventos inesquecíveis.
            </p>
          </div>
        </div>

        {/* 3 columns */}
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {/* Column 1 — Horário & WhatsApp */}
          <div className="space-y-4 text-sm text-secondary-foreground">
            <div>
              <h4 className="flex items-center gap-2 font-heading font-bold">
                <Clock className="h-4 w-4" /> Horário de funcionamento
              </h4>
              <p className="mt-1 text-secondary-foreground/70">Seg a Sex: 08h – 18h</p>
              <p className="text-secondary-foreground/70">Sábado: 08h – 14h</p>
            </div>
            <div>
              <h4 className="flex items-center gap-2 font-heading font-bold">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </h4>
              <a
                href="tel:+5531993410289"
                className="mt-1 inline-block text-secondary-foreground/70 underline hover:text-secondary-foreground"
              >
                (31) 99341-0289
              </a>
            </div>
          </div>

          {/* Column 2 — Localização */}
          <div className="space-y-2 text-sm text-secondary-foreground">
            <h4 className="flex items-center gap-2 font-heading font-bold">
              <MapPin className="h-4 w-4" /> Localização
            </h4>
            <p className="text-secondary-foreground/70">
              Atendemos toda a região de Belo Horizonte e região.
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-heading font-bold text-primary underline hover:text-primary/80"
            >
              <ExternalLink className="h-4 w-4" /> Ver no Google Maps
            </a>
          </div>

          {/* Column 3 — Redes & Links */}
          <div className="space-y-4 text-sm text-secondary-foreground">
            <div>
              <h4 className="font-heading font-bold">Redes sociais</h4>
              <div className="mt-2 flex gap-3">
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
            <div>
              <h4 className="font-heading font-bold">Links rápidos</h4>
              <ul className="mt-1 space-y-1">
                <li>
                  <a href="#cardapio" className="text-secondary-foreground/70 underline hover:text-secondary-foreground">
                    Cardápio
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/5531993410289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-foreground/70 underline hover:text-secondary-foreground"
                  >
                    Fazer pedido
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-secondary-foreground/10 pt-6 text-xs text-secondary-foreground/50 md:flex-row">
          <p>© {year} Salgado no Prato. Todos os direitos reservados.</p>
          <div className="flex gap-3">
            <Link to="/politica-de-privacidade" className="underline hover:text-secondary-foreground/80">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="underline hover:text-secondary-foreground/80">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

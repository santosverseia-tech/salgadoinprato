import { MessageCircle, Instagram, MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import LogoBadge from "./LogoBadge";

const WHATSAPP_URL = "https://wa.me/5571988190836";
const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Rua+Vila+Aurino+-+Vilas+de+Abrantes+-+Camaçari+BA";

const Footer = () => {
  const year = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "clique_whatsapp", { location: "footer" });
    }
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <footer className="bg-footer py-14 text-footer-foreground">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <LogoBadge size="md" />
              <span className="font-heading text-xl font-bold">Cantinho da Lira</span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-footer-muted">
              Salgados artesanais preparados com ingredientes selecionados para tornar seus eventos inesquecíveis.
            </p>
          </div>

          {/* Column 2 — Atendimento */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Atendimento</h4>
            <div className="space-y-3 text-sm text-footer-muted">
              <div className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-footer-accent" />
                <div>
                  <p className="font-semibold text-footer-foreground">Horário</p>
                  <p>Seg a Sex: 08h – 18h</p>
                  <p>Sáb: 08h – 14h</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-footer-accent" />
                <div>
                  <p className="font-semibold text-footer-foreground">WhatsApp</p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="hover:text-footer-foreground hover:underline"
                  >
                    55 71 98819-0836
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 — Localização */}
          <div className="space-y-4">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Localização</h4>
            <div className="flex items-start gap-2 text-sm text-footer-muted">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-footer-accent" />
              <div>
                <p>Rua Vila Aurino</p>
                <p>Vilas de Abrantes</p>
                <p>Camaçari / BA</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 font-heading font-bold text-footer-accent hover:underline"
                >
                  Ver no mapa <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4 — Redes & Links */}
          <div className="space-y-5">
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Redes sociais</h4>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={handleWhatsAppClick}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground transition-transform hover:scale-110"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-5 w-5" fill="currentColor" />
                </button>
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-instagram text-instagram-foreground"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </span>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Links rápidos</h4>
              <ul className="mt-3 space-y-2 text-sm text-footer-muted">
                <li>
                  <a href="#cardapio" className="hover:text-footer-foreground hover:underline">
                    Cardápio
                  </a>
                </li>
                <li>
                  <button onClick={handleWhatsAppClick} className="hover:text-footer-foreground hover:underline">
                    Fazer Pedido
                  </button>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-footer-foreground hover:underline">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#contato" className="hover:text-footer-foreground hover:underline">
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-footer-foreground/10 pt-6 text-xs text-footer-muted md:flex-row">
          <p>© {year} Cantinho da Lira. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-footer-foreground hover:underline">
              Política de Privacidade
            </Link>
            <Link to="/termos-de-uso" className="hover:text-footer-foreground hover:underline">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

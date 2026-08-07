import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5571988190836";

const FloatingWhatsApp = () => {
  const handleClick = () => {
    // Meta Pixel Lead event
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead");
    }
    // GA4 custom event
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "clique_whatsapp", { location: "floating" });
    }
    window.open(WHATSAPP_URL, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp shadow-lg animate-pulse-glow transition-transform hover:scale-110 md:h-16 md:w-16"
    >
      <MessageCircle className="h-7 w-7 text-whatsapp-foreground md:h-8 md:w-8" fill="currentColor" />
    </button>
  );
};

export default FloatingWhatsApp;
